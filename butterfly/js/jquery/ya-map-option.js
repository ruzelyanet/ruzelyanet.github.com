ymaps.ready(function () {

    var lat = $('#ya-map').attr('data-lat');
    var lng = $('#ya-map').attr('data-lng');

    var myMap = new ymaps.Map('ya-map', {
            center: [lat, lng],
            zoom: 15,
            controls: []
        }),

        myPlacemark = new ymaps.Placemark([lat,lng], {            
        }, {            
            iconImageHref: 'images/marker.png'            
        });        

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
});