$(function () {

    $('.main_slide').slick({
        dots: false,
        // autoplay: true,
        arrows: true,

        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnFocus: false,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),


        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    // $('#seat').on('click', function () {
    //     $(this).addClass('active');
    // })



    $('.banner_seat span').on('click', function () {
        $('span').removeClass('on');
        $(this).addClass('on');
    });

    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() < 3700) {
            $("#top_btn").css('visibility', 'hidden');
        }
        else {
            $("#top_btn").css('visibility', 'visible');
        }
    });



});