$(document).ready(function(){

	var track = function (data) {
    	$(".from-price").html(data.from);
    	$(".to-price").html(data.to);
    };
		
	$("#range-price").ionRangeSlider({
		type: "double",
		min: 10000,
	    max: 100000,
	    from: 20000,
	    to: 65000,
	    step: 100,
	    hide_min_max: true,
    	hide_from_to: true,
	    onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
	});

	$.scrollIt({	  
	  topOffset: -150
	});

	$(".big-baner-bg").fallings({
		velocity: .4,
        initialPosition: -50,
        bgParallax: true,
		bgPercent: '50%'
	});

	$(".media-cup").fallings({
		velocity: .3,
        initialPosition: 100,
        bgParallax: false,
		bgPercent: '50%'
	});
	
	$(".media-pen").fallings({
		velocity: .4,
        initialPosition: 300,
        bgParallax: false,
		bgPercent: '50%'
	});

	$(".keys-list").owlCarousel({		
		items : 2		
	});

	// Custom Navigation Events
	$("#keys-carousel-prev").click(function(){
		$(".keys-list").trigger('owl.next');
	});

	$(".prod-prev").click(function(){
		$(".keys-list").trigger('owl.prev');
	});

});


ymaps.ready(function () {	
	var lat = $(".interactve-map").data("lat");
	var lng = $(".interactve-map").data("lng");
	var location = [lat, lng];
    var myMap = new ymaps.Map('interactve-map', {
            center: location,
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/general/marker.png',
            // Размеры метки.
            iconImageSize: [55, 80],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });
	
	myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
});