$(document).ready(function () {
    $(".spinner").number();

    //$("#pay").modal("show");



    window.location.hash = "ru";

    $(".switch-lng a").click(function (e) {
        e.preventDefault();
        var hash = $(this).attr("href");

        window.location.hash = hash;

        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        locationHash();
    });

    function locationHash() {
        if (window.location.hash == "#ru") {
            $("body").removeClass("lng-uz");
            $("body").addClass("lng-ru");
        } else if (window.location.hash == "#uz") {
            $("body").removeClass("lng-ru");
            $("body").addClass("lng-uz");
        }
    }



    $('#orderForm').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                tel: true
            }
        },

        messages: {
            name: "Заполните Ваше Имя",
            phone: "Заполните номер телефона"
        },
        submitHandler: function () {
            console.log("Submitted!!!");
        }
    });



});