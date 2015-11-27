(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');

        var body = $("body");
		
        //price slider       
        var $range = $(".select-price");

        $range.ionRangeSlider({        	
        	type: "double",
		    min: 1000,
		    max: 999000,
		    from: 1000,
    		to: 999000,
    		onStart:function(obj){    			
    			$range.parents(".catalog-filter__price").find(".inp-from").val(obj.from);				
				$range.parents(".catalog-filter__price").find(".inp-to").val(obj.to);
    		},
    		onChange:function(obj){     		        		    								
				$range.parents(".catalog-filter__price").find(".inp-from").val(obj.from);				
				$range.parents(".catalog-filter__price").find(".inp-to").val(obj.to);
    		},
    		onUpdate:function(obj){
    			$range.parents(".catalog-filter__price").find(".inp-from").val(obj.from);				
				$range.parents(".catalog-filter__price").find(".inp-to").val(obj.to);
    		}
		});
		
		var slider = $range.data("ionRangeSlider");
        //price slider end     

		//styler inputs
        $(":checkbox").styler();
                
        //reset form
        $('.btn--reset').on("click", function(e) {
            e.preventDefault();              
            $(this).parents("form").find(':radio, :checkbox').attr('checked', false).trigger('refresh');            
            slider.reset();          
       });

		//carousel
		$(".b-splash-product__caroudel").jCarouselLite({
		    btnNext: ".product__caroudel__next",
		    btnPrev: ".product__caroudel__prev",
		    speed: 500,
		    visible: 4
		});
				
		//checkbox
		$(".catalog-filter__list__item .jq-checkbox").each(function(){
			if($(this).hasClass("checked")){
				$(this).parents(".catalog-filter__list__item").addClass("checked");
			}
		});

		body.on("change", ".catalog-filter__list__item .jq-checkbox", function(){
			if($(this).hasClass("checked")){
				$(this).parents(".catalog-filter__list__item").addClass("checked");
			} else{
				$(this).parents(".catalog-filter__list__item").removeClass("checked");
			}
		});

		//search
		body.on("click", ".clear-search", function(){								
			$(".serach__text-area").attr("value", " ");
			$(".serach__text-area").focus();
		});	
		
		//custom scroll				
		$(".brends--horizontally .brends__list, .splash-products__list").mCustomScrollbar({
			axis:"x",
			theme:"dark-2",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true},			
			scrollButtons:{
				enable:true,
				scrollType:"stepped"
			}/*,
			snapAmount: "244",
			mouseWheel:{scrollAmount:"244"}*/
		});

		$(".catalog-filter__list").mCustomScrollbar({			
			theme:"dark-2",
			scrollButtons:{
				enable:true,
				scrollType:"stepped"
			},
			scrollbarPosition:"outside",
			callbacks:{			
				onCreate: function(){
					$(".catalog-filter__list.mCustomScrollbar").each(function(){
						var height = $(this).height();
						$(this).height(height);
					});									
				}
			}
		});

		//filter slide toggle
		body.on("click", ".catalog-filter__item__title", function(e){							
			$(this).parent().find(".catalog-filter__item__content").stop().slideToggle("slow");			
			$(this).toggleClass("filter-slide--down");
			$(this).toggleClass("filter-slide--up");
		});
		
		//card fade slide
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
		//card fade slide end
		

    });
})(jQuery);