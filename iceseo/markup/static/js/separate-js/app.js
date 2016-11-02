$(document).ready(function(){

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