$(function () {
    $(".img-slider").bxSlider({
        auto: "auto",
        autoControls: true,
        mode: "fade"
    });
    $(".partr-slider").bxSlider({
        auto: "auto",
        controls: false,
        mode: 'vertical',
    });
    var items = $(".nav-item");
    $(".nav-item").mouseover(function () {
        $(this).addClass("navhover");
    });
    $(".nav-item").mouseout(function () {
        $(this).removeClass("navhover");
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > "131") {
            $(".topTabBox").addClass("topTabBox-fix");
            $(".fixed-log").css("display", "block");
            $(".nav-active").css("border-bottom", "none");
            for (var i = 0; i < items.length; i++) {
                items.eq(i).addClass("nav-item-fix");
            }
        } else if ($(document).scrollTop() < "131") {
            $(".topTabBox").removeClass("topTabBox-fix");
            $(".fixed-log").css("display", "none");
            for (var i = 0; i < items.length; i++) {
                items.eq(i).removeClass("nav-item-fix");
            }
            $(".nav-active").css("border-bottom", "4px solid #E31436");
        }
        if ($(document).scrollTop() > "649") {
            $("#kl-left").addClass("kl-left-fixed");
            $("#kl-right").addClass("kl-right-fixed");
        } else if ($(document).scrollTop() < "649") {
            $("#kl-left").removeClass("kl-left-fixed");
            $("#kl-right").removeClass("kl-right-fixed");
        }
    });

    $("#srcolltop").click(function () {
        $(document).scrollTop(0);
    });
    //倒计时
    function getTime(){
        var endTime= new Date('2016/03/4 00:00:00');
        var nowTime = new Date();
        var t =endTime.getTime() - nowTime.getTime();
        var d=0;
        var h=0;
        var m=0;
        var s=0;
        if(t>=0){
            d=Math.floor(t/1000/60/60/24);
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
        }
        document.getElementById("timeArea").innerHTML = h +":"+m+":"+s;
        $("#timeArea").text = h +":"+m+":"+s;
    }
    setInterval(getTime,1000);
});

