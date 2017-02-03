$(document).ready(function(){
  
    viewFullInfoProduct();

    splashProductCarousel()

    $("#responsive_headline").fitText();

	$('.banner').owlCarousel({
	    loop: true,
	    margin: 0,
	    nav: false,
	    items: 1	    
	});
    

	$('[data-toggle="tooltip"]').tooltip();
	

	$(".spin-number").TouchSpin({
        min: 0,
        step: 1,        
        buttondown_class: "spin-btn spin-minus",
        buttonup_class: "spin-btn spin-plus"
    });

    $(".splash-reviews").owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
});


function viewFullInfoProduct(){

    $(".js-open-full").click(function(){        
        
        $(".product-info").removeClass("product-info--in-full product-info--right");
        $(".product-info").removeClass("product-info--in-full product-info--left");

        var container = $(this).parents(".container");
        var product = $(this).parents(".product");
        var productWidth = product.width();
        var productLeft = product.offset();
        var containerWidth = container.width() - 30;    
        var containerLeft = container.offset();
        var posLeft = (containerWidth + containerLeft.left) - productWidth;
                
        if(posLeft <= productLeft.left){
            $(this).parents(".product-info").addClass("product-info--in-full product-info--left");
        }
        else{
            $(this).parents(".product-info").addClass("product-info--in-full product-info--right"); 
        }

        $(this).parents(".product-info").find(".js-close-full-info").removeClass("hide");        

    });

    $(".js-close-full-info").click(function(){      
        $(this).parents(".product-info").removeClass("product-info--in-full product-info--right");
        $(this).parents(".product-info").removeClass("product-info--in-full product-info--left");        
    });    

}

function splashProductCarousel(){
    $(".splash-product").owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $(".splash-product").each(function(){
       var owl =  $(this).owlCarousel(); 

        $(this).parents(".section").find(".prev").click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $(this).parents(".section").find(".splash-product-nav .next").click(function () {
            owl.trigger('next.owl.carousel');
        });
    });

    
}