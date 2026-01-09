require([
    "esri/Map",
    "esri/views/MapView",
], (Map, MapView) => {
    const map = new Map({ basemap: "dark-gray-vector" });
    const view = new MapView({
        container: "map",
        map: map,
        center: [174.767244, -36.843548],
        zoom: 10.5
    })
})