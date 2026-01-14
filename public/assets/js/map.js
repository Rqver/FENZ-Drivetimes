require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/geometry/Point"
], async (Map, MapView, GraphicsLayer, Graphic, Point) => {
    const map = new Map({ basemap: "dark-gray-vector" });
    const view = new MapView({
        container: "map",
        map: map,
        center: [174.767244, -36.843548],
        zoom: 10.5
    });

    const layers = {
        normal: new GraphicsLayer({ title: "Normal", visible: true }),
        strike: new GraphicsLayer({ title: "Strike", visible: false }),
        volunteer: new GraphicsLayer({ title: "Volunteer Delay", visible: false }),
        volunteerStrike: new GraphicsLayer({ title: "Vol Delay + Strike", visible: false })
    };

    map.addMany([layers.normal, layers.strike, layers.volunteer, layers.volunteerStrike]);

    const routeLayer = new GraphicsLayer({ title: "Routes", visible: false });
    map.add(routeLayer);

    const strikeToggle = document.getElementById("strike-toggle");
    const volToggle = document.getElementById("volunteer-toggle");
    const exitBtn = document.getElementById("exit-routes");
    const loader = document.getElementById("map-loading");

    const legendSection = document.getElementById("legend-section");

    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const defaultSidebar = document.getElementById("default-sidebar");
    const routeSidebar = document.getElementById("route-sidebar");
    const routeAddressEl = document.getElementById("route-address");
    const routeStationListEl = document.getElementById("route-station-list");

    let currentMode = "layer"; // 'layer' or 'route'
    let lastClickedPoint = null; // Stores {latitude, longitude}

    const fetchAndBuildLayer = async (url, targetLayer) => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            const graphicsToAdd = [];

            for (const station of json) {
                const polys = [];
                for (const feature of station.table) {
                    const coords = feature.geometry.coordinates;
                    if (feature.geometry.type === "MultiPolygon") {
                        for (const poly of coords) {
                            polys.push({ rings: poly, time: Number(feature.properties.value) });
                        }
                    } else {
                        polys.push({ rings: coords, time: Number(feature.properties.value) });
                    }
                }

                for (const item of polys) {
                    let colour;
                    if (item.time <= 480) colour = "rgba(80,200,120,0.2)";
                    else if (item.time <= 600) colour = "rgba(255,165,0,0.2)";
                    else if (item.time <= 900) colour = "rgba(205,28,24,0.2)";

                    graphicsToAdd.push(new Graphic({
                        geometry: { type: "polygon", rings: item.rings },
                        symbol: {
                            type: "simple-fill",
                            color: colour,
                            outline: { width: 0.0, color: "rgb(0,0,0)" }
                        },
                        attributes: { name: station.name, responseTime: item.time }
                    }));
                }
            }
            targetLayer.addMany(graphicsToAdd);
            return true;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
            return false;
        }
    };

    const drawRoute = (fc, colour) => {
        const feature = fc.features[0];
        routeLayer.add(new Graphic({
            geometry: { type: "polyline", paths: feature.geometry.coordinates },
            symbol: { type: "simple-line", width: 3, color: colour },
            attributes: { duration: feature.properties.summary.duration }
        }));
    };

    const updateLayerVisibility = () => {
        if (currentMode === "route") return;

        const isStrike = strikeToggle.checked;
        const isVolDelay = volToggle.checked;

        layers.normal.visible = false;
        layers.strike.visible = false;
        layers.volunteer.visible = false;
        layers.volunteerStrike.visible = false;

        if (isStrike && isVolDelay) layers.volunteerStrike.visible = true;
        else if (isStrike) layers.strike.visible = true;
        else if (isVolDelay) layers.volunteer.visible = true;
        else layers.normal.visible = true;
    };

    await fetchAndBuildLayer("/api/stations", layers.normal);
    view.when(() => { if (loader) loader.remove(); });

    (async () => {
        await fetchAndBuildLayer("/api/strike-stations", layers.strike);
        await fetchAndBuildLayer("/api/volunteer-stations", layers.volunteer);
        await fetchAndBuildLayer("/api/volunteer-strike-stations", layers.volunteerStrike);
    })();

    const routeColours = ["rgb(251, 44, 54)", "rgb(255, 105, 0)", "rgb(254, 154, 0)", "rgb(240, 177, 0)", "rgb(124, 207, 0)", "rgb(0, 201, 80)", "rgb(0, 188, 125)", "rgb(0, 187, 167)", "rgb(0, 184, 219)", "rgb(0, 166, 244)"];

    const updateSidebarForRoutes = (processedData, addressName) => {
        defaultSidebar.classList.add("hidden");
        routeSidebar.classList.remove("hidden");

        routeAddressEl.textContent = addressName || "Searching location...";

        routeStationListEl.innerHTML = "";

        const sortedForList = [...processedData].sort((a, b) => a.station.driveTime - b.station.driveTime);

        sortedForList.forEach(item => {
            const li = document.createElement("li");
            li.className = "flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border-l-4";
            li.style.borderLeftColor = item.colour;

            li.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-slate-200">${item.station.station.name}</span>
                    <span class="text-xs text-zinc-500">${item.station.distance.toFixed(2)} km</span>
                </div>
                <div class="text-right">
                     <span class="block text-lg font-bold text-slate-100 leading-none">
                        ${item.station.driveTime}<span class="text-xs font-normal text-zinc-500 ml-1">min</span>
                     </span>
                </div>
            `;
            routeStationListEl.appendChild(li);
        });
    };

    const fetchAndDisplayRoutes = async (point, locationText) => {
        routeLayer.removeAll();
        routeStationListEl.innerHTML = '<li class="text-zinc-500 text-sm animate-pulse">Calculating routes...</li>';

        const res = await fetch(`/api/get-directions/${point.longitude}/${point.latitude}/${strikeToggle.checked}`);
        const json = await res.json();

        const processedData = json.map((station, i) => ({
            station,
            colour: routeColours[i] || "rgb(255,255,255)"
        }));

        const sortedForDrawing = [...processedData].sort((a, b) => b.station.distance - a.station.distance);

        sortedForDrawing.forEach(({ station, colour }) => {
            drawRoute(station.directions, colour);
        });

        if (locationText){
           return updateSidebarForRoutes(processedData, locationText);
        }

        const addressRes = await fetch(`/api/reverse/${point.longitude}/${point.latitude}/`);
        const addressJson = await addressRes.json();

        updateSidebarForRoutes(processedData, addressJson.display_name);
    };


    const setRouteMode = () => {
        currentMode = "route";

        layers.normal.visible = false;
        layers.strike.visible = false;
        layers.volunteer.visible = false;
        layers.volunteerStrike.visible = false;

        routeLayer.visible = true;
        exitBtn.classList.remove("hidden");

        legendSection.classList.add("hidden");
    };

    const setNormalMode = () => {
        currentMode = "layer";
        lastClickedPoint = null;

        routeLayer.removeAll();
        routeLayer.visible = false;
        exitBtn.classList.add("hidden");

        defaultSidebar.classList.remove("hidden");
        routeSidebar.classList.add("hidden");

        legendSection.classList.remove("hidden");

        routeAddressEl.textContent = "";
        routeStationListEl.innerHTML = "";

        updateLayerVisibility();
    };

    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const renderSearchResults = (features) => {
        searchResults.innerHTML = "";

        if (!features || features.length === 0) {
            searchResults.classList.add("hidden");
            return;
        }

        features.forEach(feature => {
            const props = feature.properties;
            if (props.osm_key === "highway" || props.countrycode !== "NZ") return;

            const mainText = props.name || `${props.housenumber || ''} ${props.street || ''}`.trim();
            const subText = [props.district, props.state].filter(Boolean).join(", ");
            const displayText = mainText ? `${mainText}, ${subText}` : subText;

            const li = document.createElement("li");
            li.className = "cursor-pointer border-b border-zinc-800 px-4 py-3 text-sm text-slate-200 last:border-0 hover:bg-zinc-800 hover:text-emerald-500";
            li.innerHTML = `
                <div class="font-medium">${mainText || subText}</div>
                <div class="text-xs text-zinc-500">${subText}</div>
            `;

            li.addEventListener("click", () => {
                const [lon, lat] = feature.geometry.coordinates;

                searchResults.classList.add("hidden");
                searchInput.value = displayText;

                const point = new Point({
                    longitude: lon,
                    latitude: lat,
                    spatialReference: { wkid: 4326 }
                });

                lastClickedPoint = point;

                view.goTo({ target: point, zoom: 12 });
                setRouteMode();
                fetchAndDisplayRoutes(point, displayText);
            });

            searchResults.appendChild(li);
        });

        searchResults.classList.remove("hidden");
    };

    searchInput.addEventListener("input", debounce(async (e) => {
        const query = e.target.value;
        if (query.length < 3) {
            searchResults.classList.add("hidden");
            return;
        }

        try {
            const res = await fetch(`/api/search?search=${encodeURIComponent(query)}`);
            const data = await res.json();
            renderSearchResults(data.features);
        } catch (err) {
            console.error("Search failed", err);
        }
    }, 300));

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add("hidden");
        }
    });

    const handleToggleChange = () => {
        if (currentMode === "route" && lastClickedPoint) {
            fetchAndDisplayRoutes(lastClickedPoint);
        } else {
            updateLayerVisibility();
        }
    };

    strikeToggle.addEventListener("change", handleToggleChange);
    volToggle.addEventListener("change", handleToggleChange);

    view.on("click", async (event) => {
        const point = view.toMap(event);
        if(!point) return;

        lastClickedPoint = point;

        setRouteMode();
        await fetchAndDisplayRoutes(point);
    });

    exitBtn.addEventListener("click", () => {
        setNormalMode();
    });
});
