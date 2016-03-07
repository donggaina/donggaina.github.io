$(function () {
    //切换右侧购物车
    $(".tabs-item-shop").click(function () {
        if ($(".sidebar").css("right") == "-295px") {
            $(".sidebar").animate({right: "0px"}, 300);
        } else {
            $(".sidebar").animate({right: "-295px"}, 300);
        }
    });


    $(".toggle-cart").click(function () {
        $(".sidebar").animate({right: "-295px"}, 200);
    });

    //footer位置微信图片的显现
   
    $("#footer-weixin").hover(function () {
        $("#icon-wechat").toggleClass("icon-wechat-hover");
    });
   
    //遍历购物车中的数量和价格和
    var binding = function () {
        var $pn = $(".total-number");
        var $pt = $(".pricetotal");
        var cart_input = $(".cart-item input"); //获取Li中的input
        var $totalnum = 0;
        //遍历Input的值 累加
        for (var i = 0; i < cart_input.length; i++) {
            $totalnum += parseInt(cart_input.eq(i).val());
        }

        var cart_tprice = $(".cart-item .cart-tprice"); //获取Li中的总价格
        var n = cart_tprice.length;
        var $tprice = 0;
        //遍历每个li的总价格 累加
        for (var i = 0; i < n; i++) {
            $tprice += parseInt(cart_tprice.eq(i).text());
        }
        //将总数和总价格添加到结算框中
        $pn.text($totalnum);
        $pt.text($tprice);
    }

    //获取提交按钮的总数和总价格

    //购物数量+1,事件委托

    $(document).delegate(".cart-amount-add", "click", function () {
        var $st = $(this).prev();  //获取当前对象的同级的上一节点
        $st.val(parseInt($st.val()) + 1);

        var $fa = $(this).parent();   //获取当前点击对象的父节点
        var $sp = $fa.next(); //获取父节点的同级的下一节点
        $sp.text(parseInt($sp.text()) + 10);
        binding();
    });


    //购物数量-1 事件委托
    $(document).delegate(".cart-amount-reduce", "click", function () {
        var $st = $(this).next();
        var $fa = $(this).parent();
        var $sp = $fa.next();
        if (parseInt($st.val()) != 0) {
            $st.val(parseInt($st.val()) - 1);
            $sp.text(parseInt($sp.text()) - 10);
        } else {
            $st.val(0);
            $sp.val(0);
        }
        binding();
    });

    //点击清空购物车，购物车内容消失
    $("#clear-cart").click(function () {
        var $dd = $(this).parent().next().children().children("li");
        //首页购物车
        $("#empty-cart").css("display", "block");
        $("#cart-summary").css("display", "none");
        //删除每个li
        $dd.remove();
        $("#tn").text(0);
        $("#ptl").text(0);
    });


    //实时获取滚轮的位置，固定固定框
    $(window).scroll(function () {
        if ($(document).scrollTop() > "325") {
            $("#fix-bar").addClass("fix-bar");
            $("#place_search").css("display", "block");
            $("#goback-top").css("display", "block");
        } else if ($(document).scrollTop() < "325") {
            $("#fix-bar").removeClass("fix-bar");
            $("#place_search").css("display", "none");
            $("#goback-top").css("display", "none");
        }
    });

//点击返回顶端按钮
    $("#goback-top").click(function () {    
		$('html,body').animate({scrollTop:0},600);
    });

    $(document).delegate(".rmd-block", "mouseover", function (event) {
        var x = event.clientX;
        var rmd = $(".rmd-block");
        var rmd_details = $(this).children(".rmd-details");
        //当鼠标所在位置大于910 阴影匡出现在右侧
        if ($(window).width() - x < 355) {
            rmd_details.addClass("last-rmd");
            var html = $("#template2").html();
            $(html).prependTo(rmd_details);
        } else {
            var html = $("#template1").html();
            $(html).prependTo(rmd_details);
        }
    });
    $(document).delegate(".rmd-block", "mouseout", function (event) {
        var x = event.clientX;
        var rmd = $(".rmd-block");
        var rmd_details = $(this).children(".rmd-details");
        //当鼠标所在位置大于910 阴影匡出现在右侧
        if ($(window).width() - x < 400) {
            rmd_details.removeClass("last-rmd");
            rmd_details.children(".bubble-rmd2").remove();
        } else {
            rmd_details.children(".bubble-rmd").remove();
        }
    });





});


