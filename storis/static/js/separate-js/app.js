$(document).ready(function () {

    // -- video --
    var video = $("#company-movie"),
        videoobj = document.getElementById('company-movie');;


    // -- video muted switch
    video.muted = true;

    function muted() {
        if (video.muted) {
            video.prop('muted', false);
            video.muted = false;
        } else {
            video.prop('muted', true);
            video.muted = true;
        }
    }

    $(".switch-voice").click(function () {
        muted();
    });



    // -- Video reload
    function playReload(i) {
        if (i == 0) {
            video[0].load();
        }
        else {
            video.trigger("pause");
        }
    }




    // -- storis slider --
    var storis = $(".storis-list"),
        initStoris = false,
        interval = 15000,
        storisIntervalId;

    storis.owlCarousel({
        loop: false,
        items: 1,
        // animateOut: "fadeOut",
        // animateIn: "fadeIn",
        dots: true,
        nav: true,
        navText: ["<img src='static/img/general/icon-prev.svg'>", "<img src='static/img/general/icon-next.svg'>"],
        margin: 20,
        responsive: {
            567: {
                margin: 20,
                center: true
            },

            0: {
                margin: 0,
                center: false
            }
        },
        onInitialize: function () {
            return (initStoris = true);
        }
    });

    //storis interval slide
    function storisInterval(interval) {
        storisIntervalId = setInterval(function () {
            storis.trigger("next.owl.carousel");
        }, interval);
    }

    //storis clear interval
    function storisClearInterval() {
        clearTimeout(storisIntervalId);
    }







    // -- video load
    function loadVideo() {
        video[0].load();
        videoobj.addEventListener('loadeddata', function () {
            if (videoobj.readyState >= 2) {
                storisClearInterval();
                storisInterval(interval);

                // start video dots
                storisDots();
            }
        });
    }


    loadVideo();




    // -- slider change
    storis.on("changed.owl.carousel", function (i) {
        var currentIndex = i.item.index;

        storisClearInterval();
        storisInterval(interval);

        // video voice icon existence
        if (currentIndex != 0) {
            $(".voice").removeClass("view");
        } else {
            $(".voice").addClass("view");
        }

        playReload(currentIndex);
    });





    //storis dots
    function storisDots() {
        var strorisIndex = 0;
        $(".storis .owl-dots .owl-dot:eq(" + strorisIndex + ") span").addClass(
            "isActive inActive"
        );

        storis.on("to.owl.carousel changed.owl.carousel", function (e) {
            var count = e.item.count - 1;

            if (e.item.index >= strorisIndex) {
                strorisIndex = e.item.index;

                $(".storis .owl-dots .owl-dot span").removeClass("inActive");
                $(
                    ".storis .owl-dots .owl-dot:eq(" + e.item.index + ") span"
                ).addClass("isActive inActive");
            } else if (e.item.index <= strorisIndex) {
                $(".storis .owl-dots .owl-dot span").removeClass("inActive");
                $(
                    ".storis .owl-dots .owl-dot:eq(" + e.item.index + ") span"
                ).addClass("isActive inActive");

                for (var i = 0; i <= count; i++) {
                    if (i > e.item.index) {
                        $(
                            ".storis .owl-dots .owl-dot:eq(" + i + ") span"
                        ).removeClass("isActive inActive");
                    }
                }
            }
        });
    }


});