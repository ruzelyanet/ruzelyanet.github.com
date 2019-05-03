var videoobj = document.getElementById('company-movie'),
    videoLength = videoobj.duration,
    interval = 2000;

$(document).ready(function () {

    // -- video --
    var video = $("#company-movie");





    // -- video muted switch
    video.muted = true;
    function muted(el) {
        if (video.muted) {
            video.prop('muted', false);
            video.muted = false;

            el.find("i").removeClass("icon-voice-on").addClass("icon-voice-off");
        } else {
            video.prop('muted', true);
            video.muted = true;
            el.find("i").removeClass("icon-voice-off").addClass("icon-voice-on");
        }
    }

    $(".switch-voice").click(function () {
        var $this = $(this);
        muted($this);
    });
    // -- video muted switch end


    // -- Video reload //загрузить видео сначала
    function playReload(i) {
        if (i == 0) {
<<<<<<< HEAD
            //video.currentTime=0;
            video[0].load();
=======
            video.currentTime = 0;
>>>>>>> master
        }
        else {
            video.trigger("pause");
        }
    }

    //storis autoswitcher slider
    function storisInterval(interval) {

        storisIntervalId = setInterval(function () {
            storis.trigger("next.owl.carousel");
        }, interval);

    }

    //storis reset autoswitcher slider
    function storisClearInterval() {
        clearTimeout(storisIntervalId);
    }



    // -- storis slider --
    var storis = $(".storis-list"), // сам слайдер
        initStoris = false,
        //interval = Math.ceil(videoLength) * 1000,
        storisIntervalId,
        videoCurrentTime = 0;


    storis.owlCarousel({ // подключение слайдре
        loop: false,
        items: 1,
        // animateOut: "fadeOut",
        // animateIn: "fadeIn",
        dots: true,
        nav: true,
        navText: ["<img src='static/img/general/icon-prev.svg'>", "<img src='static/img/general/icon-next.svg'>"],
        margin: 20,
        autoplayHoverPause: true,
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
        onInitialized: function (e) {

            loadVideo();

            // return start stories true
            return (initStoris = true);
        }
    });







    // -- video load
    function loadVideo() {

        playReload(0);

        // выполнение после загрузки видео
        //videoobj.addEventListener('loadeddata', function () {

        var progressVideoLoad = 0

        var progressVideo = setInterval(function () {

            var videoCurrentTime = videoobj.currentTime;
            progressVideoLoad = Math.floor(videoCurrentTime / videoLength * 100);

            $(".storis .owl-dots .owl-dot:eq(0) span").css({
                width: progressVideoLoad + "%"
            });

            if (progressVideoLoad == 100) {
                progressVideoLoad == 100;

                storis.trigger("next.owl.carousel");
            }

        }, 100);


        var currentIndex = 0;

        var progressDot = 0;
        var progressDot2 = 0;


        function intervalFn(proc, dotProgress, i) {

            clearInterval(progressDot2);

            progressDot = setInterval(function () {
                proc += dotProgress;

                present = proc;

                $(".storis .owl-dots .owl-dot:eq(" + i.item.index + ") span").css({
                    width: proc + "%"
                });

                if (proc >= 100) {
                    clearInterval(progressDot);
                    proc = 100;

                    $(".storis .owl-dots .owl-dot:eq(" + i.item.index + ") span").css({
                        width: proc + "%"
                    });

                    console.log("next");

                    storis.trigger("next.owl.carousel");

                }

            }, 100);
        }

        function intervalFn2(proc, dotProgress, i) {

            clearInterval(progressDot2);

            progressDot2 = setInterval(function () {
                proc += dotProgress;

                present = proc;

                $(".storis .owl-dots .owl-dot:eq(" + i.item.index + ") span").css({
                    width: proc + "%"
                });

                if (proc >= 100) {
                    clearInterval(progressDot);
                    proc = 100;

                    $(".storis .owl-dots .owl-dot:eq(" + i.item.index + ") span").css({
                        width: proc + "%"
                    });
                    storis.trigger("next.owl.carousel");
                }

            }, 100);
        }



        // -- slider change
        storis.on("changed.owl.carousel", function (i) {

            // video voice icon existence
            if (i.item.index != 0) {
                $(".voice").removeClass("view");
            } else {
                $(".voice").addClass("view");

                loadVideo();
            }

            playReload(i.item.index);




            if (i.item.index != 0) {

                var dotProgress = Math.floor(100 / interval * 100);
                var proc = 0;

                if (i.item.index % 2 == 0) {
                    clearInterval(progressDot2);
                    intervalFn(proc, dotProgress, i);

                } else {
                    clearInterval(progressDot);
                    intervalFn2(proc, dotProgress, i);
                }


                if (i.item.index >= currentIndex) {
                    proc = 100;
                    $(".storis .owl-dots .owl-dot:eq(" + currentIndex + ") span").css({
                        width: proc + "%"
                    });
                }

                if (currentIndex > i.item.index) {
                    proc = 0;
                    $(".storis .owl-dots .owl-dot:eq(" + currentIndex + ") span").css({
                        width: proc + "%"
                    });
                }

            } else {
                clearInterval(progressDot);
                clearInterval(progressDot2);

                proc = 0;

                $(".storis .owl-dots .owl-dot:eq(1) span").css({
                    width: proc + "%"
                });
            }



            currentIndex = i.item.index;



            if (currentIndex != 0) {

                clearInterval(progressVideo);
                // storisInterval(interval);

                var progressVideoLoad = 100;

                $(".storis .owl-dots .owl-dot:eq(0) span").css({
                    width: progressVideoLoad + "%"
                });
            }


            playReload(currentIndex);
        });

        //});

    }
});
