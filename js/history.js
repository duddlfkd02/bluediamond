$(document).ready(function(){

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