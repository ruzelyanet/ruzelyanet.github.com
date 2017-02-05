$(document).ready(function(){

	$('input:checkbox, input:radio').styler();

	
	$('.about-text').autoResize({
		animateDuration: 0,
		extraSpace: 60,
		limit: 5000
	});


	$("#level-js").ionRangeSlider({
		grid: true,			
	    hide_min_max: true,
	    hide_from_to: true,
	    from: 2,
	    values: [
	        "Не владею",
	        "Использую готовые решения",
	        "Использую готовые решения<br> и умею их переделывать",
	        "Пишу сложный JS<br> с нуля"
	    ]
	});

});