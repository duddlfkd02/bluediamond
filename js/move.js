$(document).ready(function(){
    $('.recipes > ul > li > div').click(function(){
        $('.modal_bg, .modal_wrap').show();
        $('header').hide();
    })
    $('.modal_bg,.modalbt').click(function(){
        $('.modal_bg, .modal_wrap').hide();
        $('header').show();
    });


    $('.thirdreci_wrap').hide();
    $('.morebtn').click(function(){
        $('.thirdreci_wrap').show();
    })


    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('nav').toggle();
    });


    $(window).resize(function(){
        let wWidth = $(window).width();

        if(wWidth > 699){
            $("nav").removeAttr("style");
        }
    })

    

    $(document).scroll(function () {
        var height = $(document).scrollTop();
        console.log(height);
    });

});

//-------애니메이션 js--------//

$(document).on("scroll",function(){
    if($(document).scrollTop() > 345){ 
        $(".firstreci_wrap").addClass("animate__fadeInUp");
        $(".firstreci_wrap").css({"visibility":"visible"});
    }


    if($(document).scrollTop() > 997){ 
        $(".secondreci_wrap").addClass("animate__fadeInUp");
        $(".secondreci_wrap").css({"visibility":"visible"});
    }

    if($(document).scrollTop() > 1749){ 
        $(".thirdreci_wrap").addClass("animate__fadeInUp");
        $(".thirdreci_wrap").css({"visibility":"visible"});
    }




});