
$(document).ready(function(){

	$(".call-mobi-nav").click(function(){
		$(".menu").stop().slideToggle();
	});

	$(".slider-list").slick({
		fade: true,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 3000
	});

	particlesJS("particles-js", {
	    particles: {
	        number: {
	            value: 80,
	            density: {
	                enable: !0,
	                value_area: 800
	            }
	        },
	        color: {
	            value: "#4aa1d9"
	        },
	        shape: {
	            type: "circle",
	            stroke: {
	                width: 0,
	                color: "#000000"
	            },
	            polygon: {
	                nb_sides: 5
	            }
	        },
	        opacity: {
	            value: .5,
	            random: !1,
	            anim: {
	                enable: !1,
	                speed: 1,
	                opacity_min: .1,
	                sync: !1
	            }
	        },
	        size: {
	            value: 3,
	            random: !0,
	            anim: {
	                enable: !1,
	                speed: 40,
	                size_min: .1,
	                sync: !1
	            }
	        },
	        line_linked: {
	            enable: !0,
	            distance: 150,
	            color: "#4aa1d9",
	            opacity: .4,
	            width: 1
	        },
	        move: {
	            enable: !0,
	            speed: 6,
	            direction: "none",
	            random: !1,
	            straight: !1,
	            out_mode: "out",
	            bounce: !1,
	            attract: {
	                enable: !1,
	                rotateX: 600,
	                rotateY: 1200
	            }
	        }
	    },
	    interactivity: {
	        detect_on: "canvas",
	        events: {
	            onhover: {
	                enable: !0,
	                mode: "grab"
	            },
	            onclick: {
	                enable: !0,
	                mode: "push"
	            },
	            resize: !0
	        },
	        modes: {
	            grab: {
	                distance: 140,
	                line_linked: {
	                    opacity: 1
	                }
	            },
	            bubble: {
	                distance: 400,
	                size: 40,
	                duration: 2,
	                opacity: 8,
	                speed: 3
	            },
	            repulse: {
	                distance: 200,
	                duration: .4
	            },
	            push: {
	                particles_nb: 4
	            },
	            remove: {
	                particles_nb: 2
	            }
	        }
	    },
	    retina_detect: !0
	});

});


if($("#map").length){
	ymaps.ready(init);
}

function init () {

	var lat = $("#map").data("lat"),
		lng = $("#map").data("lng");

    var myMap = new ymaps.Map('map', {
            center: [lat, lng],
            zoom: 15
        }),

        myPlacemark = new ymaps.Placemark([lat, lng], {
            
        }, {
           	
        });
        
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}