$(function () {

    $('.slide').slick({
        dots: false,
        autoplay: false,
        arrows: true,

        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),

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