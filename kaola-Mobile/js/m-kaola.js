Zepto(function(){
    $('.img-slider').bxSlider({
        auto: true,
        autoControls: true,
        controls:false
    });
    var UA = window.navigator.userAgent;
    var CLICK = 'click';
    if(/ipad|iphone|andriod/.test(UA)){
        CLICK = 'tap';
    }
    $("#menu")[CLICK](function(){
        $("#m-nav").toggleClass("hide");
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > "630"){
            $("#goTop").removeClass("hide");
        } else{
            $("#goTop").addClass("hide");
        }
    });
   $("#goTop")[CLICK](function(){
        $(document).scrollTop(0);
    });
    $("#close")[CLICK](function(){
        $(".m-download").hide();
    });
});




