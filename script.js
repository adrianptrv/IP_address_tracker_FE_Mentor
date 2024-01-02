// Setting the Default Map view
var obj, IPholder;
var errmsg = 0;
var map = L.map('map', {
  'minZoom': 3,
  'maxBounds': [
  [90,-180],
  [-90, 180]
]
})


// Loading the map itself
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=GNJkuzyL6GpeIIxa1RaW', {
 attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
 noWrap: true,
}).addTo(map);


//Creating new marker color
var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


//Getting user IP through the API
fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_g2i0cJWEDpYku0AA3rUFNuaINNhDm&ipAddress=')
.then(res => res.json())
.then(data => {
 obj = data;
})


//Transferring user IP to variables and initiating the map pinpoint fucntion
setTimeout( function() {
IPholder = obj.ip;
setMap();}, 1000 )


//Updating the elements content with the current IP info
function updateText(){
$(".info-fields div:nth-of-type(1) p").text(obj.ip);
$(".info-fields div:nth-of-type(2) p").text(obj.location.city + ", " + obj.location.country + "\n" + obj.location.postalCode)
$(".info-fields div:nth-of-type(3) p").text(obj.location.timezone);
$(".info-fields div:nth-of-type(4) p").text(obj.isp);
}


//Getting the input IP and running it through the IP API, and then executing the map pinpoint fucntion
function getip(){
IPholder = $("#InField").val();
fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_g2i0cJWEDpYku0AA3rUFNuaINNhDm&ipAddress=" + IPholder)
 .then(res => res.json())
 .then(data => {
   obj = data;
  })

 setTimeout( function() {
 setMap();}, 500 )
}




//Map pinpoint function (Setting the exact location on the map with the latitude and longitude we get from the IP API. Then adding a marker and popup with the IP to the same location.) 
function setMap(){
  if (obj.code == '422') {
    $("#InField").css("color", "red");
    $(".error-msg").css("display", "block");
    errmsg = 1;
  }
  else {
 map.setView([obj.location.lat, obj.location.lng], 14);
 var marker = L.marker([obj.location.lat, obj.location.lng], {icon: blackIcon}).addTo(map);
 marker.bindPopup("<b>" + IPholder + "</b><br>is located here.").openPopup();
 updateText();
 if (errmsg == 1){
  $("#InField").css("color", "unset");
  $(".error-msg").css("display", "none");
  errmsg = 0;
 }
  }
}


//Changing map texture feature
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


//Make input text be submitted with Enter key
$("#InField").bind("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  $("#submitField").click();
}
});

