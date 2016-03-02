google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {	
	//var latlng = new google.maps.LatLng(40.7271964,-73.9883757);
	
	var lat = $('#map_canvas').attr('data-lat');
    var lng = $('#map_canvas').attr('data-lng');			

	var settings = {
		zoom: 3,
		scrollwheel: false,
        disableDefaultUI: true,
		center: new google.maps.LatLng(lat,lng),
		
		styles: [
	                {
	                    "featureType": "water",
	                    "stylers": [
	                        { "visibility": "on" },
	                        { "color": "#000000" }
	                    ]
	                },{
	                    "featureType": "landscape.natural.landcover",
	                    "stylers": [
	                        { "visibility": "on" },
	                        { "color": "#808080" },
	                        { "hue": "#ff0000" },
	                        { "gamma": 1 },
	                        { "saturation": -100 },
	                        { "lightness": -95 }
	                    ]
	                },{
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        { "visibility": "off" },
	                        { "color": "#808080" }
	                    ]
	                },{
	                    "elementType": "labels.text.fill",
	                    "stylers": [
	                        { "visibility": "off" }
	                    ]
	                },{
	                    "featureType": "administrative",
	                    "stylers": [
	                        { "visibility": "off" }
	                    ]
	                },{
	                    "elementType": "geometry",
	                    "stylers": [
	                        { "visibility": "on" }
	                    ]
	                },{
	                    "featureType": "administrative.country",
	                    "stylers": [
	                        { "visibility": "off" }
	                    ]
	                },{
	                    "featureType": "road",
	                    "elementType": "geometry",
	                    "stylers": [
	                        { "visibility": "off" }
	                    ]
	                }
	            ],

		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);                

	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Blue Fountain Media</h1>'+
		'<div id="bodyContent">'+
		'<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.."</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString					 
	});
	
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)					
	);

	var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	var companyPos = new google.maps.LatLng(lat,lng);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		animation: google.maps.Animation.BOUNCE,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Blue Fountain Media",
		zIndex: 3});
	
	/*var trainImage = new google.maps.MarkerImage('images/metro.png',
		new google.maps.Size(50,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);			

	var trainShadow = new google.maps.MarkerImage('images/train_shadow.png',
		new google.maps.Size(70,50),
		new google.maps.Point(0,0),
		new google.maps.Point(60, 50)
	);

	var trainPos = new google.maps.LatLng(40.727184,-73.988823);

	var trainMarker = new google.maps.Marker({
		position: trainPos,
		animation: google.maps.Animation.DROP,
		map: map,
		icon: trainImage,
		shadow: trainShadow,
		title:"Metro Station",
		zIndex: 2
	});

	var parkingImage = new google.maps.MarkerImage('images/parking.png',
		new google.maps.Size(50,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var parkingShadow = new google.maps.MarkerImage('images/parking_shadow.png',
		new google.maps.Size(70,50),
		new google.maps.Point(0,0),
		new google.maps.Point(60, 50)
	);

	var parkingPos = new google.maps.LatLng(40.7269075,-73.9874834);

	var parkingMarker = new google.maps.Marker({
		position: parkingPos,
		animation: google.maps.Animation.DROP,
		map: map,
		icon: parkingImage,
		shadow: parkingShadow,
		title:"Parking Lot",
		zIndex: 1
	});*/
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}