var mymap = L.map('mapid').setView([39.750,-104.9515], 16);


// Background
L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2hhZWRyaWNoIiwiYSI6ImNrbGhqc2R5bjEzejkycG9pd245aTRwcmcifQ.uWiNjJ2Y3PAaB--3St8xwQ'
    }).addTo(mymap);

// Geojson Layer
var gjData = 'https://chaedri.github.io/leafletDenver/data/maples.geojson'

let xhr = new XMLHttpRequest();
xhr.open('GET', gjData);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
    treeLayer = L.geoJSON(xhr.response, {
                        pointToLayer: function (feature, latlng) {
                               return L.circleMarker(latlng, pointStyle);
       	               }
                       }
                  )
       treeLayer.addTo(mymap);

};
xhr.send();

var pointStyle = {
    radius: 3,
    fillColor: "#134413",
    color: "#000",
    weight: 1,
    opacity: 0.35,
    fillOpacity: 0.8
    };

