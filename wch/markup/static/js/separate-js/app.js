$(window).load(function(){


	/*==============================================================*/
    //WOW Animation  - START CODE
    /*==============================================================*/

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    /*==============================================================*/
    //WOW Animation  - END CODE
    /*==============================================================*/
    

	$(".js-call-seach").click(function(){
		$(".c-search").addClass("c-search--open");
		$("body").addClass("overflow-hidden");
	});

	$(".js-call-seach-close").click(function(){
		$(".c-search").removeClass("c-search--open");
		$("body").removeClass("overflow-hidden");
	});

    var carousel = $(".testimonials-autors").waterwheelCarousel({
      separation: 150,
      sizeMultiplier: 0.7,
      edgeFadeEnabled: true,
      opacityMultiplier: 0.5,
      movedToCenter: function(){
      	
      	$(".testimonial-item").removeClass("active");

      	var center = $(".carousel-center");
        
        $(".testimonial-item[data-text-item="+ center.data("autor-item") +"]").addClass("active");

        var name = center.data("name");
        var post = center.data("post");

        $(".autor-name").text(name);
        $(".autor-post").text(post);

      }
    });    

    $(".partners").owlCarousel({		
		items : 6,
		itemsDesktop : [1024,5],
		itemsDesktopSmall : [1000,4],
		itemsTablet: [700,3],
		itemsMobile : [550,1],
		navigation : false
	});
    
    $('.b-testimonials .arrow--left').bind('click', function () {
      carousel.prev();
      return false
    });

    $('.b-testimonials .arrow--right').bind('click', function () {
      carousel.next();
      return false;
    });

	$(".anim-slider").animateSlider(
	 	{
	 		autoplay	:true,
	 		interval	:10000,
	 		animations 	: 
			{
				0	:
				{			
					".slide-bg":
 					{
 						show   	  : "fadeIn",
						hide 	  : "fadeOut",						
						delayShow : "delay1s"	
 					},	

					".big-slide-title": 
					{
						show   	  : "bounceInDown",
						hide 	  : "flipOutX",
						delayShow : "delay1-5s"
 					},

 					".big-slide-subtitle": 
					{
						show   	  : "fadeInLeft",
						hide 	  : "flipOutX",
						delayShow : "delay2s"
 					},

 					".big-slide-text": 
					{
						show   	  : "fadeInRight",
						hide 	  : "flipOutX",
						delayShow : "delay2-5s"
 					},

 					".big-slide-info__footer": 
					{
						show   	  : "flipInX",
						hide 	  : "flipOutX",
						delayShow : "delay3s"
 					},
 					
 					".big-slide-img img": {
 						show   	  : "fadeInRight",
						hide 	  : "fadeOutRight",						
						delayShow : "delay3-5s"		
 					}

				},
				1	:
				{	
					".slide-bg":
 					{
 						show   	  : "fadeIn",
						hide 	  : "fadeOut",						
						delayShow : "delay1s"	
 					},	

					".big-slide-title": 
					{
						show   	  : "bounceInDown",
						hide 	  : "flipOutX",
						delayShow : "delay1-5s"
 					},

 					".big-slide-subtitle": 
					{
						show   	  : "fadeInLeft",
						hide 	  : "flipOutX",
						delayShow : "delay2s"
 					},

 					".big-slide-text": 
					{
						show   	  : "fadeInRight",
						hide 	  : "flipOutX",
						delayShow : "delay2-5s"
 					},

 					".big-slide-info__footer": 
					{
						show   	  : "flipInX",
						hide 	  : "flipOutX",
						delayShow : "delay3s"
 					},
 					
 					".big-slide-img img": {
 						show   	  : "fadeInRight",
						hide 	  : "fadeOutRight",						
						delayShow : "delay3-5s"		
 					}
				}
			}
	 	});

});