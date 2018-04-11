$(document).ready(function(){

	$(".b-begin-slider").slick({	  				
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay:  true,
		autoplaySpeed: 5000
	});

	$(window).scroll(function(){
		var elFix = $(".header-fix");
		var top = $(this).scrollTop();		
		top >= 1 ? elFix.addClass("header-scroll") : elFix.removeClass("header-scroll");
	});

	$(".icheck input:radio, .icheck input:checkbox").styler();

	$('.carousel').slick({	  		
		centerMode: true,
  		variableWidth: true,
  		asNavFor: '.carousel-content',
  		focusOnSelect: true
	});

	$(".carousel-content").slick({	  		
		slidesToShow: 1,
	  	slidesToScroll: 1,	
	  	fade: true,
	  	arrows: false,
	  	asNavFor: '.carousel',
	  	adaptiveHeight: true
	});
	

});