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
			

		function cardslider(){		
			var srcImg = $(".card-product-previews-photos").find(".card-product-previews-photos__item--active").attr("href");
			$(".card-product-main-photo img").attr("src", srcImg);	

			function clicked(){
				$(".card-product-previews-photos__item").on("click", function(){
					var preview = $(this);

					preview.siblings().removeClass("card-product-previews-photos__item--active");
					preview.addClass("card-product-previews-photos__item--active");

					srcImg = preview.attr("href");

					$(".card-product-main-photo img").one("load", function(){												
						 $(this).hide().fadeIn(700);
					}).attr("src", srcImg);


					return false;
				});
			}

			clicked();

		}

		cardslider();
		

    });
})(jQuery);