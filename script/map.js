function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
	center: new google.maps.LatLng(37.19235211497089,-3.616599440574646), zoom: 13
	};
	var geocoder = new google.maps.Geocoder;
	var infowindow = new google.maps.InfoWindow;
	//geocodeLatLng(geocoder, map, infowindow);
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: {lat: 37.19235211497089, lng: -3.616599440574646},
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP
    });
}
window.onload = function() {
  myMap();
};