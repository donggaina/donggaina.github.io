$(function () {

    $(".home-bxslider").bxSlider({
        auto: "auto",
        autoControls: true,
        mode: 'fade',
    });
    $("#home-rmd-main").bxSlider({
        useCSS:false,
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 244,
        slideMargin: 0,
        pager:false,
        auto: "auto",
        autoControls: true,
    });
    $(".home-rmd-main .bx-controls-direction .bx-prev").attr("class","bx-prev2");
    $(".home-rmd-main .bx-controls-direction .bx-next").attr("class","bx-next2");

});