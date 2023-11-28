var obj;
var IPholder;
var map = L.map('map', {
  'minZoom': 3,
  'maxBounds': [
  [90,-180],
  [-90, 180]
]
})
// Setting the Default Map view

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=GNJkuzyL6GpeIIxa1RaW', {
 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
 noWrap: true,
}).addTo(map);
// Loading the map itself


fetch('http://ip-api.com/json/')
.then(res => res.json())
.then(data => {
 obj = data;
})
//Getting user IP through the API

setTimeout( function() {
document.getElementById("InField").value = obj.query
IPholder = obj.query
setMap();}, 500 )
//Transferring user IP to variables and initiating the map pinpoint fucntion


function getip(){
IPholder = document.getElementById("InField").value
fetch('http://ip-api.com/json/' + IPholder)
 .then(res => res.json())
 .then(data => {
   obj = data;
  })
 setTimeout( function() {
 setMap();}, 500 )
}
//Getting the input IP and running it through the IP API, and then executing the map pinpoint fucntion

function setMap(){
 map.setView([obj.lat, obj.lon], 14);
 var marker = L.marker([obj.lat, obj.lon]).addTo(map);
 marker.bindPopup("<b>" + IPholder + "</b><br>is located here.").openPopup();
}
//Map pinpoint function (Setting the exact location on the map with the latitude and longitude we get from the IP API. Then adding a marker and popup with the IP to the same location.) 

function changeMap(mapSelected){
 var mapname = mapSelected.value

 if (mapname == "topo") {
 L.tileLayer('https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=GNJkuzyL6GpeIIxa1RaW', {
 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
 noWrap: true,
 }).addTo(map);
 }

 else if (mapname == "sattelite") {
 L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=GNJkuzyL6GpeIIxa1RaW', {
 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
 }).addTo(map);
 }
 
 else {
 L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=GNJkuzyL6GpeIIxa1RaW', {
 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
 }).addTo(map);
 }
}
//Changing map texture

document.getElementById("InField").addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("submitField").click();
}
});
//Make input text be submitted with Enter key
