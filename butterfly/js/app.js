(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');

		$(".fancybox").fancybox({
            padding:0
        });

        //stars rating		
        $(".rating").rating();


        //map tabs
        $(".b-switch-map a").click(function() {
            if(!$(this).hasClass("active")) {
                $(".select-map").find(".hidden").removeClass("visible");
                $(".select-map").find("#" + $(this).attr("id")).addClass("visible");
                $(this).siblings().removeClass("active").end().addClass("active");
            }
            return false;
        });

        //carousel
        $(".b-carousel__list").jCarouselLite({
            visible: 4,
            btnNext: ".carousel-next",
            btnPrev: ".carousel-prev",
            speed: 500
        });

    });
})(jQuery);