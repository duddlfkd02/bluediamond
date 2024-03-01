$(document).ready(function(){
    $('.icon img:nth-child(3)').hide();

    $('.icon img:nth-child(2)').click(function(){
        $(this).next().show();
    });

    $('.icon img:nth-child(3)').click(function(){
        $(this).hide();
    })

    $('.third_product').hide();
    $('.more_btn').click(function(){
        $('.third_product').show();
    });


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


});






/*------애니메이션 js -------*/

$(function(){
    $(document).on("scroll",function(){
        if($(document).scrollTop() > 24){ 
            $(".first_product ul").addClass("animate__fadeIn");
            $(".first_product ul").css({"visibility":"visible"});
        }
        if($(document).scrollTop() > 506){ 
            $(".second_product ul" ).addClass("animate__fadeIn");
            $(".second_product ul").css({"visibility":"visible"});
        
        }
        if($(document).scrollTop() > 1098){ 
            $(".third_product ul" ).addClass("animate__fadeIn");
            $(".third_product ul").css({"visibility":"visible"});
        
        }
        if($(document).scrollTop() > 1110){ 
            $(".nutthin > h3, .nutthin > ul").addClass("animate__fadeInUp");
            
        }
        if($(document).scrollTop() > 1300){ 
            $(".btimage").addClass("animate__fadeIn");
            
        }
    });
    
    

$(document).scroll(function () {
    var height = $(document).scrollTop();
    console.log(height);
});

});


