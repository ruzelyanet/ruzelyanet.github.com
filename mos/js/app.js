(function ($) {
    $(document).ready(function () {        

    	// call back popap
        var backPopupHash = "#back";
        if (window.location.hash === backPopupHash){
	    	$.fancybox({
	    		href: "#back_popup_cont",
	    		padding: 0,
	    		tpl:{
	    			closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">закрыть</a>'
	    		}
	    	})	        
	    }

	    //fancybox
    	$(".fb").fancybox({
    		padding: 0
    	});

    	$(".call-popap").fancybox({
    		padding: 0,
    		tpl:{
    			closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">закрыть</a>'
    		},
    		afterLoad: function(current) {
		        var title = $(current.element.context).data("title");
		        $(current.href).find("input[name=title]").val(title);
		        $(current.href).find(".popup__title").text(title);
		    }
    	});

    	//scroll nav
    	$.scrollIt({            
            topOffset: -80 // offste (in px) for fixed top navigation
        });

        //input mask
        $('input[type=tel]').mask('+7 (999) 999-99-99', {
            autoclear: false
        });  

        //helpers
       	function warningClose(typeCloseMsg){       		
       		$(typeCloseMsg).hide("slow");       		
       	}

       	function warningShow(typeShowMsg){       		
       		$(typeShowMsg).show("slow");
       		setTimeout(function(){
				warningClose(typeShowMsg);
			}, 5000);
       	}

       	$(".b-warning .close, .popup-msg-fancybox-overlay").click(function(){
       		warningClose(".b-warning");
       	});

       	$(".wng .close").click(function(){
       		warningClose(".wng ");
       	});

        function isEmpty(str) {
		  	return (!str || 0 === str.length);
		}
		$(".form form button").click(function(){			 
			var parent = $(this).closest('form');
			var name = parent.find('input[name=name]').val();  		  
			var phone = parent.find('input[name=phone]').val();  		  
			var title = parent.find('input[name=title]').val();  
			var form_error = false;

			parent.find(':required').each(function() {
				if ( isEmpty($(this).val() )) {					
					form_error = true;
				}
			});			
	  	  
		   if (!form_error){
		   				   		
				$.post("send.php", {name:name, phone:phone, title:title}, 
				    function(data){
						if (data == 'success') {							
							if($(parent).find("button").hasClass("btn-static-form")){
					   			warningShow(".b-warning.popup-success");
					   		} else{		   			
					   			warningShow(".wng-success");
					   			setTimeout(function(){
									$.fancybox.close();
								}, 5000);
					   		}
						}
				    }
				);

			} else{				
				if($(parent).find("button").hasClass("btn-static-form")){
					warningShow(".b-warning.popup-error");
				} else{
					warningShow(".wng-error");
				}				
			}

			return false;
		});


    });
})(jQuery);