function init_map(){var myOptions = {zoom:12,center:new google.maps.LatLng(57.70887,11.974559999999997),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(57.70887,11.974559999999997)});infowindow = new google.maps.InfoWindow({content:'<strong>Min Skola</strong><br>Göteborg<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);

document.getElementById("demo").innerHTML = Date();







$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});