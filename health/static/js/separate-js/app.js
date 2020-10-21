(function ($) {

    $('.js-mask-tel').mask('0(000) 000-00-00')

    $(".scroll-to").click(function (e) {
        e.preventDefault()

        mobiNavTrigger().close()

        const to = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(to).offset().top - 100
        })
    })

    // counter
    caunter('.counter', new Date(2020, 10, 5))

    //mobi nav
    function mobiNavTrigger() {
        return {
            open() {
                $('.mobi-nav').addClass('open')
                $('body').addClass('nav-open')
            },
            close() {
                $('.mobi-nav').removeClass('open')
                $('body').removeClass('nav-open')
            }
        }
    }

    $('.burger').click(() => {
        mobiNavTrigger().open()
    })

    $('.mobi-nav-close').click(() => {
        mobiNavTrigger().close()
    })

    $('.mobi-nav-trigger').click(() => {
        mobiNavTrigger().close()
    })


})($);