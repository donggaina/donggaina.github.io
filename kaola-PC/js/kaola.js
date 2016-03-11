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
        $('html,body').animate({scrollTop:0}, 1200);
    });
    //倒计时
    getTime();
    function getTime() {
        var endTime = new Date('2016/03/14 00:00:00');
        var nowTime = new Date();
        var t = endTime.getTime() - nowTime.getTime();
        var d = 0;
        var h = 0;
        var h2 = 0
        var m = 0;
        var m2 = 0;
        var s = 0;
        var s2 = 0;
        if (t >= 0) {
            h = Math.floor(t / 1000 / 60 / 60 / 24 % 10);
            h2 = Math.floor(t / 1000 / 60 / 60 % 24 % 10);

            m = Math.floor(t / 1000 / 60 % 60 / 10);
            m2 = Math.floor(t / 1000 / 60 % 60 % 10);

            s = Math.floor(t / 1000 % 60 / 10);
            s2 = Math.floor(t / 1000 % 60 % 10);
        }
        $("#q-hour").text(h);
        $("#q-hour2").text(h2);
        $("#q-min").text(m);
        $("#q-min2").text(m2);
        $("#q-sec").text(s);
        $("#q-sec2").text(s2);
    }

    setInterval(getTime, 1000);
});

