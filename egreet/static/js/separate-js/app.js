


$(document).ready(function () {

    var winWidth = $(window).width();

    $(".select-date").datepicker();


    if ($(".buying-steps").length) {
        let stepDone = $(".step-done");
        let stepActivePositionX = stepDone[stepDone.length - 1];
        $('.buying-steps').scrollLeft(stepActivePositionX.offsetLeft - 10);
    }


    $(".js-toggle-list-projects").click(function () {
        $(this).toggleClass("open");
        $(".js-sidebar-list-projects").toggleClass("d-none");
    });



    //$("#modalPasswordReset").modal("show");


    // $('.example-popove').popover({
    //     container: 'body'
    // });


    //$("#modalAssTime").modal("show");


    // $(".air-date").datepicker({
    //     classes: "calendar"
    // })

    $(".burger").click(function () {
        $("body").toggleClass("nav-mob-open");
        $(this).toggleClass("open");
        $(".sidebar").toggleClass("open");
        $(".mobi-contacts-link").toggleClass("active");
    });

    var $owl = $(".pricing-carousel");

    $owl.children().each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        nav: false,
        smartSpeed: 500,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2,
                margin: -72,
                center: true
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });


    $(".js-pass-switch").click(function () {
        $(this).find("i").toggleClass("icon-eye-open");

        var input = $(this).parent().find("input"),
            type = input[0].type;

        if (type == "password") {
            input[0].type = "text"
        } else {
            input[0].type = "password"
        }
    });


    function editInput(input) {
        input.attr("disabled", false);
        input.select();

        input.focusout(function () {
            input.attr("disabled", true);
        });
    }

    $(".info-input-edit").click(function () {
        var input = $(this).parent().find('.form-control');
        editInput(input);
    });



    function projectNameEdit() {
        $(".name-project-input input")[0].focus();
        $(".name-project-input input").blur(function () {
            $(this).parents(".name-project").removeClass("mode-edit");
        });

        $(".name-project-input input").on('keypress', function (e) {
            if (e.which == 13) {
                $(this).blur();
            }
        });
    }

    $(".js-edit-name-project").click(function (e) {
        e.preventDefault();

        $(".name-project").addClass("mode-edit");
        projectNameEdit();
    });






    if (winWidth >= 992) {
        $('[data-toggle="popover"]').popover()

        $('[data-toggle="tooltip"]').tooltip()

        $(".popover-hover-view").hover(function () {
            $(this).popover("show");
        }, function () {
            $(this).popover("hide");
        });
    }


    $(".js-call-calendar").click(function () {
        $(this).parent().find(".calendar").addClass("open");
    });


    $(".calendar-close").click(function () {
        $(this).parents(".calendar").removeClass("open");

        var datepicker = $(this).parents(".calendar").find(".select-date").datepicker().data('datepicker');
        datepicker.clear();
    });

    $(".word-search-input").keypress(function () {
        $(".search-options").addClass("open");
        $('.date-search').addClass("d-none");
    });

    $(".js-search-chat").click(function () {
        $(".msng-chat-search").toggleClass("open");
    });

    $(".msng-chat-search-close").click(function () {
        $(".msng-chat-search").removeClass("open");
    });

    $(".js-expand-chat").click(function () {
        $(".msng").toggleClass("msng-expand");
    });

    $(".js-toggle-chat-bar").click(function () {
        $(".msng").removeClass("msng-expand");
    });


    $(".js-toggle-ibox-content").click(function () {
        $(this).toggleClass("open");
        $(this).parents(".ibox").find(".ibox-content").stop().slideToggle();
    });


});