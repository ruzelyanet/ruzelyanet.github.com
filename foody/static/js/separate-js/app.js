$(function(){
	
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