
$(document).ready(function(){


	if($(window).width() > 992){
		var s = skrollr.init();
	}

	//choice form
	$("input[name=selectFormContacts]").change(function(){		
		
		var $this = $(this);
		var btn = $this.parents("form").find(".btn");
		var val = $this.val();
		
		if($this){

			btn.attr({"disabled": false});

			if($this.hasClass("input-client")){
				$(".btn-client").css({
					"display": "inline-block"
				});
				$(".btn-customer").css({
					"display": "none"
				});				
			}

			if($this.hasClass("input-customer")){
				$(".btn-client").css({
					"display": "none"
				});
				$(".btn-customer").css({
					"display": "inline-block"
				});				
			}
				
		}

	});

	//call popups
	function openModal(pathModal){
		var wrapModals = $(".popups");		
		$("body").toggleClass("body-fix");		
		$(".header").addClass("header-grey");
		$(".primary").addClass("primary-grey");
		wrapModals.addClass("popups-visible");		
		$(pathModal).siblings().removeClass("popup-active");
		$(pathModal).addClass("popup-active");
	}

	function closeModal(){
		$(".header").removeClass("header-grey");
		$(".primary").removeClass("primary-grey");
		$(".popups").removeClass("popups-visible");
		$("body").removeClass("body-fix");	
		$(".popup").removeClass("popup-active");
	}

	$(".js-call-popap").click(function(e){
		e.preventDefault();
		closeModal();

		var pathModal = $(this).data("modal");
		openModal(pathModal);
	});

	$(".popups-overlay").click(function(){		
		closeModal();
	});

	$(".popup-close").click(function(){		
		closeModal();
	});


	//ajax form success
		/*function thanksModal(){
			closeModal();
			openModal("#thankMessage");
		}
		thanksModal()*/



	//js-validator
	$(".form-contacts form .input-require").keyup(function(){
		$(this).parents("form").find(".input-require").each(function(elem){
			var $this = $(this),
			valu = $this.val(),
			emailVal = $this.parents("form").find("input[type=email]").val();						

			if(valu && isValidEmailAddress(emailVal)){
				$this.parents("form").find("button").attr({"disabled": false});
			} else {
				$this.parents("form").find("button").attr({"disabled": true});
			}
		});
	});

	//form styler
	$(':radio').styler();
	
	//trigger mobile nav
	$(".mobi-navigation ul li span").click(function(){		
		$(".mob-nav").trigger("click");
	});

	//toggle body fix vlass
	$(".mob-nav").click(function(){
		$("body").toggleClass("body-fix");		
	});

	//nav scrolling
	$.scrollIt({
		//topOffset: -130 
	});

	//accordion
	$(".js-accordion").each(function(){
		if($(this).hasClass("js-accordion--open")){
			$(this).find(".js-accordion-body").slideDown("slow");
		}	
	})
		
	$(".js-accordion-action").click(function(){
		$(this).parents(".js-accordion").siblings().removeClass("js-accordion--open");
		$(this).parents(".js-accordion").siblings().find(".js-accordion-body").slideUp("slow");

		$(this).parents(".js-accordion").addClass("js-accordion--open");
		$(this).parents(".js-accordion").find(".js-accordion-body").slideDown("slow");
	});
	
	//carousels
	$('.team-carousel').owlCarousel({
	    loop:true,
	    margin:-64,
	    nav:true,
	    center:true,
	    smartSpeed: 1000,    
	    responsive:{
	        0:{
	            items: 1
	        },
	        750:{
	            items: 1,
	            margin: 0
	        },
	        1000:{	            
	            items: 2
	        },
	        1300:{
	            items: 2
	        }
	    }
	});

	$('.partners_carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:true,	    
	    responsive:{
	        0:{
	            items: 1
	        },
	        750:{
	            items: 3
	        },
	        1000:{	            
	            items: 4
	        }
	    }
	});
	
	//header fixed
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top > 200){
			$(".header").addClass("header-top");
		} else {
			$(".header").removeClass("header-top");
		}
	});

		// distinguishes between scrolling up and down scrolling
	var tempScrollTop, currentScrollTop = 0;		
	$(window).scroll(function(){
		currentScrollTop = $(window).scrollTop();	
		if (tempScrollTop < currentScrollTop){			
			$(".header").removeClass("header-scroll");
		} else if (tempScrollTop > currentScrollTop){			
			$(".header").addClass("header-scroll");
		}			
		tempScrollTop = currentScrollTop;		
	});	

});


//email validator functionm
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}