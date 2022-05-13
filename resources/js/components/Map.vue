<template>
    <div id="map">
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    name: "Map",
    data() {
        return {
            center: [ 46.252316,  20.146179 ],
        }
    },
    methods: {
        setupLeafletMap: function () {
            const map = L.map('map').setView(this.center, 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoidGhvbWFzbW8xNCIsImEiOiJja3o1bWs3ZzAwbmZmMnBxZnFyMXJidDNjIn0.VhrFSe0T5QKnYTcx5cl-cw', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'sk.eyJ1IjoidGhvbWFzbW8xNCIsImEiOiJja3o1bWs3ZzAwbmZmMnBxZnFyMXJidDNjIn0.VhrFSe0T5QKnYTcx5cl-cw'
            }).addTo(map);

            var marker = L.marker([ 46.255609, 20.117855 ]).addTo(map);

            marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

            var popup = L.popup();

            function onMapClick(e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent("You clicked the map at " + e.latlng.toString())
                    .openOn(map);
            }

            map.on('click', onMapClick);

        },
    },
    mounted() {
        this.setupLeafletMap();
    },
};
</script>

<style>
 #map {
    float: left;
    height: 500px;
    width: 800px;
    overflow :hidden
 }
</style>