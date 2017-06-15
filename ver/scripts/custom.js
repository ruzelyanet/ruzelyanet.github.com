$(document).ready(function() {
	// copy to clipboard
	console.log($('.copy').length);
	$('.copy').on('click', function() {
		console.log(this);
		var link = $(this).siblings('a').attr('href');
		console.log(link);
		var $textarea = $('<textarea/>', {
			'css' : {
				'position' : 'absolute',
				'bottom' : '-200%'
			}
		}).text(link).appendTo('body');
		$textarea.select();
		try {
		    var successful = document.execCommand('copy');
		    var msg = successful ? 'ссылка скопирована в буфер обмена' : 'не удалось скопировать ссылку';
		    $('.copy2clipboard-msg').text(msg).show('slow');
			setTimeout(function(){ $('.copy2clipboard-msg').hide('slow'); }, 2000);
		} catch (err) {
		   console.log('Oops, unable to copy');
		}
	});
});