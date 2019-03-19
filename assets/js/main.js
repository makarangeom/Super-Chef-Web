// Script For Scroll To Top
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".auto-scroll-to-top").addClass("visible");
        } else {
            $(".auto-scroll-to-top").removeClass("visible");
        }
    });
      
    $(".auto-scroll-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});


// Script for change add and remove class in nav menu when scrolling
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".nav").addClass("fixed-menu");
    } else {
        $(".nav").removeClass("fixed-menu");
    }
});