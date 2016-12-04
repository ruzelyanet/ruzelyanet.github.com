$(document).ready(function(){
	
	$(".call-menu").click(function(){
		$(this).parent().find(">div").slideToggle();
		$(this).toggleClass("call-menu--open");
	});

	$(".form-fix").sticky({topSpacing:25});

	$(".js-call-list-menu").click(function(){
		$(".sidebar-dinamic__body").fadeIn();
	});

	$(".js-close-list-menu").click(function(){
		$(".sidebar-dinamic__body").fadeOut();
	});

	$(".img-slideshow__small a").click(function(){
		var href = $(this).attr("href");			
		$(".img-slideshow__big img").attr({
			src: href
		});
		return false;
	});

	//input mask
    $('input[type=tel]').mask('+7 (999) 999-99-99', {
        autoclear: false
    });
	
	$(".sandwich").click(function(){
		$(this).toggleClass("sandwich--close");
		$(".mob-dropmenu").slideToggle();
	});


	$('.simle-slider').owlCarousel({
	    loop: false,	    
	    nav: true,	    
	    margin: 10,	    
	    items: 1
	});

	$('.img-slideshow__list').owlCarousel({
	    loop:false,	    
	    nav:true,	    
	    margin: 10,	    
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }
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
	    autoplay: true,
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