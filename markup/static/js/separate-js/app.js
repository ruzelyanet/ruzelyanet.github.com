$(document).ready(function(){
	
	$(".search__clear").click(function(){
		$(".search__area").val("");
	});

	$(".sandwich").click(function(){
		$(".menu").slideToggle();
	});


	$(".big-slider").owlCarousel({ 
      navigation : true,
      slideSpeed : 300,      
      singleItem:true   
  });

	$(".product-carousel").owlCarousel({		
		items : 4,
		itemsDesktop : [1024,3],
		itemsDesktopSmall : [1000,2],
		itemsTablet: [700,2],
		itemsMobile : [550,1]
	});

	$(".product-detail__carousel").owlCarousel({		
		items : 1,
		itemsDesktop : [1024,1],
		itemsDesktopSmall : [1000,1],
		itemsTablet: [700,1],
		itemsMobile : [550,1],
		navigation : true
	});

	// Custom Navigation Events
	$(".prod-next").click(function(){
		$(".product-carousel").trigger('owl.next');
	});

	$(".prod-prev").click(function(){
		$(".product-carousel").trigger('owl.prev');
	});

});