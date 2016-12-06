function initialize(lat, long,name) {
//var myCenter = new google.maps.LatLng(40.5015, 40.5015);

name = "googleMap"+name;
console.log(name);
var myCenter = new google.maps.LatLng(lat, long);
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById(name),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});
var flag = 1;
marker.setMap(map);
}