require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/geometry/Point"
], async (Map, MapView, FeatureLayer, GraphicsLayer, Graphic, Point) => {
    const map = new Map({ basemap: "dark-gray-vector" });
    const view = new MapView({
        container: "map",
        map: map,
        center: [174.767244, -36.843548],
        zoom: 10.5
    });

    const fields = [
        { name: "ObjectID", alias: "ObjectID", type: "oid" },
        { name: "name", alias: "Station Name", type: "string" },
        { name: "responseTime", alias: "Response Time", type: "integer" }
    ];

    const createLayer = (title) => {
        return new FeatureLayer({
            title: title,
            visible: false,
            source: [],
            fields: fields,
            objectIdField: "ObjectID",
            geometryType: "polygon",
            spatialReference: { wkid: 4326 },
            renderer: {
                type: "unique-value",
                field: "responseTime",
                defaultSymbol: { type: "simple-fill" },
                uniqueValueInfos: [
                    {
                        value: 380,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(80,200,120,0.2)",
                            outline: { width: 0.0 }
                        }
                    },
                    {

                        value: 480,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(80,200,120,0.2)",
                            outline: { width: 0.0 }
                        }
                    },
                    {
                        value: 600,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(255,165,0,0.2)",
                            outline: { width: 0 }
                        }
                    },
                    {
                        value: 900,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(205,28,24,0.2)",
                            outline: { width: 0 }
                        }
                    },
                    {

                        value: 300,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(80,200,120,0.2)",
                            outline: { width: 0.0 }
                        }
                    },
                    {
                        value: 420,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(255,165,0,0.2)",
                            outline: { width: 0 }
                        }
                    },
                    {
                        value: 720,
                        symbol: {
                            type: "simple-fill",
                            color: "rgba(205,28,24,0.2)",
                            outline: { width: 0 }
                        }
                    }
                ]
            },
        });
    };

    const layers = {
        normal: createLayer("Normal"),
        strike: createLayer("Strike"),
        volunteer: createLayer("Volunteer Delay"),
        volunteerStrike: createLayer("Vol Delay + Strike")
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

    const BATCH_SIZE = 2000;
    const fetchAndBuildLayer = async (url, targetLayer) => {
        try {
            const res = await fetch(url);
            const json = await res.json();

            let graphicsBatch = [];
            let oidCounter = 1;

            const flushBatch = async () => {
                if (graphicsBatch.length === 0) return;

                await targetLayer.applyEdits({
                    addFeatures: graphicsBatch
                });

                graphicsBatch = [];

                await new Promise(resolve => setTimeout(resolve, 20));
            };

            for (const station of json) {
                const polys = [];

                for (const feature of station.table) {
                    const coords = feature.geometry.coordinates;
                    const timeVal = Number(feature.properties.value);

                    if (feature.geometry.type === "MultiPolygon") {
                        for (const poly of coords) {
                            polys.push({ rings: poly, time: timeVal });
                        }
                    } else {
                        polys.push({ rings: coords, time: timeVal });
                    }
                }

                for (const item of polys) {
                    graphicsBatch.push({
                        geometry: {
                            type: "polygon",
                            rings: item.rings
                        },
                        attributes: {
                            ObjectID: oidCounter++,
                            name: station.name,
                            responseTime: item.time
                        }
                    });

                    if (graphicsBatch.length >= BATCH_SIZE) {
                        await flushBatch();
                    }
                }
            }

            await flushBatch();

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

    try {
        let loadedCount = 0;
        const totalFiles = 4;

        const updateProgress = () => {
            loadedCount++;

            const textSpan = loader.querySelector("span");
            if (textSpan) {
                const spinner = textSpan.querySelector("svg").outerHTML;
                textSpan.innerHTML = `${spinner} Loading layers... ${loadedCount}/${totalFiles}`;
            }
        };

        await Promise.all([
            fetchAndBuildLayer("/api/stations", layers.normal).then(updateProgress),
            fetchAndBuildLayer("/api/strike-stations", layers.strike).then(updateProgress),
            fetchAndBuildLayer("/api/volunteer-stations", layers.volunteer).then(updateProgress),
            fetchAndBuildLayer("/api/volunteer-strike-stations", layers.volunteerStrike).then(updateProgress)
        ]);

        updateLayerVisibility();

        view.when(() => {
            if (loader) loader.remove();
        });

    } catch (error) {
        console.error("Critical error loading map layers:", error);
        if (loader) {
            loader.innerHTML = `<div class="text-red-500 font-bold text-center">Error loading map data.<br>Please refresh the page.</div>`;
        }
    }

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

        const res = await fetch(`/api/get-directions/${point.longitude}/${point.latitude}?strike=${strikeToggle.checked}&delay=${volToggle.checked}`);
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

        searchInput.value = ""

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
