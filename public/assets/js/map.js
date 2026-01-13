require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
], async (Map, MapView, GraphicsLayer, Graphic) => {
    const map = new Map({basemap: "dark-gray-vector"});
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

    map.addMany([
        layers.normal,
        layers.strike,
        layers.volunteer,
        layers.volunteerStrike
    ]);

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

    await fetchAndBuildLayer("/api/stations", layers.normal);

    view.when(() => {
        const loader = document.getElementById("map-loading");
        if (loader) loader.remove();
    });

    (async () => {
        await fetchAndBuildLayer("/api/strike-stations", layers.strike);
        await fetchAndBuildLayer("/api/volunteer-stations", layers.volunteer);
        await fetchAndBuildLayer("/api/volunteer-strike-stations", layers.volunteerStrike);
    })();


    const strikeToggle = document.getElementById("strike-toggle");
    const volToggle = document.getElementById("volunteer-toggle");

    const updateVisibility = () => {
        const isStrike = strikeToggle.checked;
        const isVolDelay = volToggle.checked;

        layers.normal.visible = false;
        layers.strike.visible = false;
        layers.volunteer.visible = false;
        layers.volunteerStrike.visible = false;

        if (isStrike && isVolDelay) {
            layers.volunteerStrike.visible = true;
        } else if (isStrike) {
            layers.strike.visible = true;
        } else if (isVolDelay) {
            layers.volunteer.visible = true;
        } else {
            layers.normal.visible = true;
        }
    };

    strikeToggle.addEventListener("change", updateVisibility);
    volToggle.addEventListener("change", updateVisibility);
});
