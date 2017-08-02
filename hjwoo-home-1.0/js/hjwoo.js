$(function() {
    $(".more-link").mouseover(function() {
        $(this).children("img").attr("src", "img/4-003-more-link-blue.png");
    });
    $(".more-link").mouseout(function() {
        $(this).children("img").attr("src", "img/4-004-more-link-black.png");
    });

    $(document).delegate(".hjwoo-nav a", "click", function(argument) {
        var obj = $(this);
        var active = obj.hasClass('active');
        if (active) {
            return;
        } else {
            obj.addClass('active').siblings().removeClass('active');
        }
    });
    $(document).delegate(".hjwooQa-ask", "click", function(argument) {
        var obj = $(this);
        obj.next(".hjwooQa-answer").toggleClass('hide');
        obj.children().children(".arrow-right").toggleClass('hide');
        obj.children().children(".arrow-down").toggleClass('hide');
    });
})
$(window).scroll(function(){
        if($(document).scrollTop() > "600"){
            $(".go-top").css("display","block")
        } else if($(document).scrollTop() < "600"){
            $(".go-top").css("display","none")
        }
    });

$(".go-top").click(function () {
        $('html,body').animate({scrollTop:0},600);

});

$(".go-top").hover(function(){
    $(".goTop-alert").toggleClass("hide");
    $(".bubble-outside").toggleClass("active");
    
});