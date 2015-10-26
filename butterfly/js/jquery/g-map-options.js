google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
	//var latlng = new google.maps.LatLng(40.7271964,-73.9883757);
	
	var lat = $('#g-map').attr('data-lat');
    var lng = $('#g-map').attr('data-lng');			

	var settings = {
		zoom: 15,
		scrollwheel: false,
        disableDefaultUI: true,
		center: new google.maps.LatLng(lat,lng),		  		
	
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("g-map"), settings);                
	

	var companyPos = new google.maps.LatLng(lat,lng);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		animation: google.maps,
		map: map});
			
	google.maps.event.addDomListener(window, 'load', initialize);
}