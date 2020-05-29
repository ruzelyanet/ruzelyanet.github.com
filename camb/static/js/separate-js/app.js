$(document).ready(function () {
    //--- bg slider height

    setTimeout(function () {
        //var firsSectionHeight = $('.section-second').height();

        var firsSectionHeight = document.documentElement.clientHeight;

        console.log(firsSectionHeight);

        $('.bg-intro-item').height(firsSectionHeight);
    }, 0);

    //--- video
    var video = $('#mobVideo');

    video.muted = true;
    function muted(el) {
        if (video.muted) {
            video.prop('muted', false);
            video.muted = false;
        } else {
            video.prop('muted', true);
            video.muted = true;
        }
    }

    $('.b-iphone').click(function () {
        var $this = $(this);
        muted($this);
    });

    //--- Intro bg
    const bgIntro = $('.bg-intro');

    bgIntro.owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: false,
        smartSpeed: 500,
    });

    //---- Intro Lines
    const introLine = new erasableLine();
    introLine.launch(
        {
            select: '.intro-text-slider',
            interval: 5000,
            change: function (index) {
                bgIntro.trigger('to.owl.carousel', index);
            },
        },
        function () {},
    );

    // -----------
    var swiper = new Swiper('.b-web-slider', {
        direction: 'vertical',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $('.pricing-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    // ---
    $('#scene').parallax();

    //teachers
    var teachersSlider = $('.teachers-slider');
    teachersSlider.owlCarousel({
        center: true,
        loop: true,
        dots: false,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            991: {
                items: 3,
            },
        },
    });

    var teachersInfoSlider = $('.teachers-info-slider');
    teachersInfoSlider.owlCarousel({
        loop: true,
        dots: false,
        margin: 0,
        nav: false,
        items: 1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
    });

    teachersSlider.on('changed.owl.carousel', function (event) {
        teachersInfoSlider.trigger('to.owl.carousel', event.item.index);
    });
});
