(function ($) {
    $(document).ready(function () {
        'use strict';
       
			            

        function initApp(){
            $('html').removeClass('no-js');

        }

        function initHeader(){
            $.scrollIt({
                //upKey: 38, // key code to navigate to the next section
                //downKey: 40, // key code to navigate to the previous section
                //easing: 'linear', // the easing function for animation
                //scrollTime: 600, // how long (in ms) the animation takes
                //activeClass: 'active', // class given to the active nav element
                //onPageChange: null, // function(pageIndex) that is called when page is changed
                topOffset: -100 // offste (in px) for fixed top navigation
            });
        }

        function initPlugins(){
            
            $('.fix-scroll-top').themepileUIBackToTop();            

            $('.page').stickem({
                offset:155
            });

            var stickySetting = { 'offset' : 150 };
            var sticky = $('.stickem-container').stickem(stickySetting).destroy();
                sticky = $('.stickem-container').stickem(stickySetting);

            $('.fancybox').fancybox({
                helpers : {
                    thumbs : {
                        width: 75,
                        height: 50
                    }
                }
            });                        

            $("a[href='#/top/']").click(function() {
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
            });            
         

        }

        function initValidation () {
            $(".wpcf7-form").validate({
                rules:{
                    "your-name":"required",                
                    "your-email":{
                        "required":true,
                        "email":true
                    },
                    "your-subject":"required",
                    "your-message":"required"
                }
            });
        }

        function initSlider(){
            /*--leaf-through--*/

            var $el = $( '#leaf-through' ),
                windy = $el.windy( {
                    // rotation and translation boundaries for the items transitions
                    boundaries : {
                        rotateX : { min : 40 , max : 90 },
                        rotateY : { min : -15 , max : 45 },
                        rotateZ : { min : -10 , max : 10 },
                        translateX : { min : -400 , max : 400 },
                        translateY : { min : -400 , max : 400 },
                        translateZ : { min : 350 , max : 550 }
                    }
                } ),
                allownavnext = false,
                allownavprev = false;

            $( '#nav-prev' ).on( 'mousedown', function( event ) {

                allownavprev = true;
                navprev();
            
            } ).on( 'mouseup mouseleave', function( event ) {

                allownavprev = false;
            
            } );

            $( '#nav-next' ).on( 'mousedown', function( event ) {

                allownavnext = true;
                navnext();
            
            } ).on( 'mouseup mouseleave', function( event ) {

                allownavnext = false;
            
            } );

            function navnext() {
                if( allownavnext ) {
                    windy.next();
                    setTimeout( function() {    
                        navnext();
                    }, 150 );
                }            
            }

            function navprev() {
                if( allownavprev ) {
                    windy.prev();
                    setTimeout( function() {    
                        navprev();
                    }, 150 );
                }
            }
        }

        function initProjects() {
        
             // Portfolio Sortable
            $('.projects__item').addClass('projects__item_state_visible');
            $('.filter').on('click', function(){
                if($(this).attr('data-portfolio-link')) {
                    var category = $(this).attr('data-portfolio-link');
                    $('.filter').removeClass('projects__filter__list__item__link_state_active');
                    $(this).addClass('projects__filter__list__item__link_state_active');
                    $('.projects__item').removeClass('projects__item_state_visible');
                    if(category === "all") {
                        $('.projects__item').addClass('projects__item_state_visible');
                    } else  {
                        $('.projects__item[data-portfolio-type="'+category+'"]').addClass('projects__item_state_visible');
                    }
                    return false;
                } else {
                    return true;
                }

            });

            //Pagination
            $('.projects__wrapper .load-more-button').unbind('click').bind('click', function(){
                
                var link = $(this);
                link.text('Loading');
                link.parent().addClass('pagination_state_loading');    

                $.ajax({
                    url: $(this).attr('href'),
                    type: 'post',
                    dataType: 'html',
                    //data: {q:1},                    
                    success : function(data) {                    

                        $(data).insertBefore($('.projects .pagination'));

                        link.text('Load More Projects');
                        link.parent().removeClass('pagination_state_loading');

                        $('.projects__item').addClass('projects__item_state_visible');
                        $('.projects__filter__list__item__link').removeClass('projects__filter__list__item__link_state_active');
                        $('.projects__filter__list__item__link[data-portfolio-link="all"]').addClass('projects__filter__list__item__link_state_active');                        

                        // Reinit Plugins                        
                        initPlugins();
                    }
                });
                return false;
            });

        }


        function initBlog(){

           $('body').on('click', '.blog__item__load-post', function(){
                var link = $(this);
                link.text('Loading');
                $.ajax({
                    url: $(this).attr('href'),
                    type: 'post',
                    dataType: 'html',
                    data: {q:1},
                    success : function(data) {                    
                        $(data).insertBefore(link);
                        link.remove();
                        initPlugins(); 

                    }
                });
                return false;
            });


            $('.blog .load-more-button').on('click').on('click', function(){
                var link = $(this);
                link.text('Loading');
                link.parent().addClass('pagination_state_loading');
                $.ajax({
                    url: $(this).attr('href'),
                    type: 'post',
                    dataType: 'html', 
                    data: {q:1},                   
                    success : function(data) {

                        $(data).insertBefore($('.blog .pagination'));
                        link.text('Load More Blogs');
                        link.parent().removeClass('pagination_state_loading');
                        $('.projects__item').addClass('projects__item_state_visible');
                        $('.projects__filter__list__item__link').removeClass('projects__filter__list__item__link_state_active');
                        $('.projects__filter__list__item__link[data-portfolio-link="all"]').addClass('projects__filter__list__item__link_state_active');
                        
                        // Reinit Plugins                        
                        initPlugins();                                                

                    }
                });
                return false;
            });

        }
        

        function initAll(){
            initApp(),
            initHeader(),
            initPlugins(),
            initValidation (),
            initSlider(),
            initProjects(),
            initBlog()
        }        


        $("body").queryLoader2({
            barColor: "#6e6d73",
            backgroundColor: "rgb(0,0,0)",
            percentage: true,
            barHeight: 1,
            minimumTime: 100,
            onComplete : initAll
        });

				
    });
})(jQuery);


