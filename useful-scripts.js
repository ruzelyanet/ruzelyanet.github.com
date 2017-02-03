
// различает скролл прокрутки вверх и вниз
var tempScrollTop, currentScrollTop = 0;		
$(window).scroll(function(){
	currentScrollTop = $(window).scrollTop();	
	if (tempScrollTop < currentScrollTop){			
		$(".header").addClass("header-scroll");
	} else if (tempScrollTop > currentScrollTop){
		$(".header").removeClass("header-scroll");
	}			
	tempScrollTop = currentScrollTop;		
});