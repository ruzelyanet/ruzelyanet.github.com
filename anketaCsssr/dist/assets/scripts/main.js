
$(document).ready(function(){

	$('input:checkbox, input:radio').styler();

	var txt = $('.about-text'),
	hiddenDiv = $(document.createElement('div')),
	content = null;

	txt.addClass('noscroll');
	hiddenDiv.addClass('hiddendiv');

	$('.about').append(hiddenDiv);

	function changeHeighttext(){
		content = txt.val();
	    content = content.replace(/\n/g, '<br>');
	    hiddenDiv.html(content);
	    txt.css('height', hiddenDiv.height());
	}

	txt.bind('keydown', function() { 
		changeHeighttext()
	});

	txt.bind('keyup', function() { 
		changeHeighttext()
	});


});