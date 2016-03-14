Zepto(function () {
    getTime();
    function getTime() {
        var endTime = new Date('2016/03/17 00:00:00');
        var nowTime = new Date();
        var t = endTime.getTime() - nowTime.getTime();
        console.log("t:=="+t);
        var d = 0;
        var h = 0;
        var h2 = 0
        var m = 0;
        var m2 = 0;
        var s = 0;
        var s2 = 0;
        if (t >= 0) {
            //d=Math.floor(t/1000/60/60/24);
            h = Math.floor(t/1000/60/60/24%10);
             console.log("h:=="+h);
            h2 = Math.floor(t/1000/60/60%24%10);
             console.log("h2:=="+h2);

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
    //判断设备
    var UA = window.navigator.userAgent;
    var CLICK = 'click';

    if (/iPad|iPhone|Andriod/.test(UA)) {
        CLICK = 'tap';
    }
    $("#qy-input")[CLICK](function (e) {
        $("#qy-index").css("opacity", ".2");
        $("#qy-search").css("display", "block");
    });

    $("#goback")[CLICK](function () {
        $("#qy-index").css("opacity", "1");
        $("#qy-search").css("display", "none");
    });

    var y_group = $(".y-group");
    for (var i = 0; i < y_group.length; i++) {
        var g_d = y_group.eq(i).css("display");
        if (g_d == "block") {
            i++;
            $("#qy-more")[CLICK](function () {
                y_group.eq(i).css("display", "block");
            });
        }
        break;
    }

    $("#qy-more")[CLICK](function () {
        $(document).scrollTop = 'NO';
        var y_group = $(".y-group");
        var n = y_group.length;
        for (var i = 0; i < n; i++) {
            y_group.eq(n - 1).css("display", "block");
            break;
        }
    });

    $("#item-more")[CLICK](function () {
        $(".qy-toggle").css("display", "block");
        $("#item-more").css("display", "none")
    });
    $("#q-up")[CLICK](function () {
        $(document.body).scrolling = "no";
        $("#item-more").css("display", "block")
        $(".qy-toggle").css("display", "none");
    });
    $("#qy-goTop")[CLICK](function () {
        $(document.body).scrollTop(0);
    });

    $(window).scroll(function () {
        if ($(document.body).scrollTop() > "630") {
            $("#qy-goTop").removeClass("hide");
        } else {
            $("#qy-goTop").addClass("hide");
        }
    });





});