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

    $('.trip_slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        prevArrow: $('#Trip_prev'),
        nextArrow: $('#Trip_next'),
    });




    $('.banner_bottom a').on('click', function () {
        var banner = $('.bannerWrap');
        $(this).toggleClass('on')

        if ($(this).hasClass('on')) {
            $(banner).removeClass('on');
        } else {
            $(banner).addClass('on');
        }
    });

    $('.banner_tit span').on('click', function () {
        var tit = $('.banner_tit span');
        $(tit).removeClass('on');
        $(this).addClass('on');
    });

    $('.bmain_header span').on('click', function () {
        var bmain = $('.bmain_header span');
        $(bmain).removeClass('on');
        $(this).addClass('on');
    });
    $('.banner_seat span').on('click', function () {
        var seat = $('.banner_seat span');
        $(seat).removeClass('on');
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