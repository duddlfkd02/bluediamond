$(function () {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 37) {
            $(".content1 > div").addClass("animate__fadeInUp");
        }
        if ($(document).scrollTop() > 500) {
            $(".content2_title h3,.content2_text > p").addClass("animate__fadeInUp");
        }
        if ($(document).scrollTop() > 980) {
            $(".content3_title h4, .content3 p").addClass("animate__fadeInUp");

        }
        if ($(document).scrollTop() > 1250) {
            $(".btimage").addClass("animate__fadeIn");
            $(".btimage").css({ "visibility": "visible" });
        }
    });


    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav').toggle();

    });

    $(window).resize(function () {
        let wWidth = $(window).width();

        if (wWidth > 699) {
            $("nav").removeAttr("style");
        }
    })



    $(document).scroll(function () {
        var height = $(document).scrollTop();
        console.log(height);
    });

});

