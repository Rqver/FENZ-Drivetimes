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
    })

    const layer = new GraphicsLayer({title: "Response Times"})
    map.add(layer)

    const res = await fetch("/api/stations");
    const json = await res.json();

    const stationMap = [];
    for (const station of json) {
        const polys = [];

        for (const feature of station.table) {
            const coords = feature.geometry.coordinates;

            if (feature.geometry.type === "MultiPolygon") {
                for (const poly of coords) {
                    polys.push({
                        type: "polygon",
                        rings: poly,
                        attributes: {
                            name: station.name,
                            responseTime: Number(feature.properties.value)
                        }
                    })
                }
            } else {
                polys.push({
                    type: "polygon",
                    rings: coords,
                    attributes: {
                        name: station.name,
                        responseTime: Number(feature.properties.value)
                    }
                })
            }
        }

        stationMap.push(polys)
    }

    layer.removeAll();

    for (const station of stationMap) {
        for (const polygon of station) {
            let colour;

            switch (polygon.attributes.responseTime) {
                case 480:
                    colour = "rgba(80,200,120,0.2)";
                    break;
                case 600:
                    colour = "rgba(255,165,0,0.2)";
                    break;
                case 900:
                    colour = "rgba(205,28,24,0.2)";
            }

            const g = new Graphic({
                geometry: polygon,
                symbol: {
                    type: "simple-fill",
                    color: colour,
                    outline: {width: 0.0, color: "rgb(0,0,0)" }
                },
                attributes: polygon.attributes
            })

            layer.add(g);
        }
    }

    view.when(() => {
      const loader = document.getElementById("map-loading");
      if (loader) loader.remove();
    });
})