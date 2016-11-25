$(document).ready(function(){
	
	$(".sandwich").click(function(){
		$(this).toggleClass("sandwich--close");
		$(".mob-dropmenu").slideToggle();
	});	

	$('.testimonials-slider').owlCarousel({
	    loop:true,	    
	    nav:true,
	    autoHeight:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('.img-slider').owlCarousel({
	    loop:true,	    
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('.news-slider').owlCarousel({
	    loop:false,	    
	    nav:false,
	    margin: 50,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});


	$('.action-slider').owlCarousel({
	    loop:true,	    
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	

});