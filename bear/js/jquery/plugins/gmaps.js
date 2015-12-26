google.maps.event.addDomListener(window, 'load', initialize);
function initialize() { 

  var lat = $('#map_canvas').attr('data-lat');
    var lng = $('#map_canvas').attr('data-lng');      

  var settings = {
    zoom: 15,
    scrollwheel: false,
        disableDefaultUI: true,
    center: new google.maps.LatLng(lat,lng),          
    mapTypeControl: true,   
    navigationControl: true,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}]
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), settings);                
  
  
  var companyImage = new google.maps.MarkerImage('images/marker.png',
    new google.maps.Size(38,55),
    new google.maps.Point(0,0),
    new google.maps.Point(50,50)          
  );  

  var companyPos = new google.maps.LatLng(lat,lng);

  var companyMarker = new google.maps.Marker({
    position: companyPos,   
    map: map,
    icon: companyImage,   
    zIndex: 3
  });
  
    
  google.maps.event.addDomListener(window, 'load', initialize);
}