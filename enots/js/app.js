(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');

        $(".fancybox").fancybox();
														
		$(".b-splash-product__caroudel").jCarouselLite({
		    btnNext: ".product__caroudel__next",
		    btnPrev: ".product__caroudel__prev",
		    speed: 500,
		    visible: 4
		});
		

    });
})(jQuery);