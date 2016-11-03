$(document).ready(function(){
		
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