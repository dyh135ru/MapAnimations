// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-106.426452, 23.196525],
  [-106.429967, 23.202732],
  [-106.421359, 23.211547],
  [-106.445014, 23.238231],
  [-106.454666, 23.249072],
  [-106.461873, 23.266237],
  [-106.465769, 23.275341],
  [-106.482131, 23.300543],

];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHloMTM1cnUiLCJhIjoiY2twa2RyYjhrMGlnMTJ2cnRhdnJmbXF3MSJ9.UdUuXhfVeXoCTHnBbdF0WA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-106.45485257561768, 23.23515177741325],
  zoom: 12,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
    .setLngLat([-106.426305, 23.188827])
    .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {

    if(counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();

  },1000);

}

map.on('mousemove', function (e) {
  document.getElementById('info').innerHTML =
  // e.point is the x, y coordinates of the mousemove event relative
  // to the top-left corner of the map
  JSON.stringify(e.point) +
  '<br />' +
  // e.lngLat is the longitude, latitude geographical position of the event
  JSON.stringify(e.lngLat.wrap());
  });

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
