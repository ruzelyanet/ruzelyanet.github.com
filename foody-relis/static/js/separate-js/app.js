
$(document).ready(function(e) {

	$("input[type='tel']").mask("+7(999) 999-9999");
	    
	$('img[usemap]').rwdImageMaps();	

	$('.map-img').maphilight({		
		stroke: false
	});


	$('.train-carousel').owlCarousel({			     		
	    center: true, 	    		
	    loop: true,
	    margin: 15,	    
	    nav: true,	    	   
	    responsive : {		    
	    	0: {
	    		items: 1
	    	},
	    	600 : {
		        items: 2
		    },
	    	1000 : {
		        items: 3
		    }		    
		}
	});

	$('.clients-carousel').owlCarousel({
	    center: true,
	    items: 3,
	    loop: true,
	    margin: 17,
	    autoWidth: true,
	    nav: true
	});

	$(".schedule-day").owlCarousel({	    	    			    		
	    margin: 0,	    
	    nav: false,	    
	    autoWidth: true,	    
	    responsive : {		    
	    	0: {
	    		items: 5
	    	},
	    	600 : {
		        items: 14
		    },
	    	1000 : {
		        items: 31
		    }		    
		}
	});

	$('.friends-carousel').owlCarousel({
		center: true,   	    		
	    loop: true,
	    margin: 15,
	    autoWidth: true,
	    nav: true
	});

	$('.review-carousel').owlCarousel({		
	    autoHeight : true,	    
	    loop: true,
	    margin: 55,
	    autoHeight: true,
	    nav: true,
	    responsive : {		    
	    	0: {
	    		items: 1
	    	},
	    	600 : {
		        items: 1
		    },
	    	1000 : {
		        items: 2
		    }		    
		}
	});

	
	$(".js-call-menu").click(function(){
		$(".menu").addClass("b-activity");
		$(".menu").slideToggle();
		$(".js-close-nav").css({
			"visibility": "visible"
		});
	});

	$(".js-call-login").click(function(){
		$(".login-form").addClass("b-activity");
		$(".login-form").slideDown();
		$(".js-close-nav").css({
			"visibility": "visible"
		});
	});

	$(".js-close-nav").click(function(){
		$(".b-activity").slideToggle();
		$(".b-activity").removeClass("b-activity");
		$(".js-close-nav").css({
			"visibility": "hidden"
		});
	});

});