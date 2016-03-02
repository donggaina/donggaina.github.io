$(function(){

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
    //购物数量+1,事件委托
    $(document).delegate(".cart-amount-add", "click", function () {
        var $st = $(this).prev();  //获取当前对象的同级的上一节点
        $st.val(parseInt($st.val()) + 1);
        binding();
    });
    //购物数量-1,事件委托
    $(document).delegate(".cart-amount-reduce", "click", function () {
        var $st = $(this).next();
        if (parseInt($st.val()) != 0) {
            $st.val(parseInt($st.val()) - 1);
        }
        binding();
    });

    //点击加入购物车时，生成右下角li
    $(document).delegate(".food-item .cart-amount-add", "click", function () {
        //获得点击对象 name 和 price
        var target_fa = $(this).parent().prevAll(".food-content");

        //获取右侧date-id的值
        var id= $(this).parent().parent().attr("data-id");
        var foodname = target_fa.children(".food-name").text();
        var foodprice = target_fa.children(".food-price").text();

        //将取的值放入json对象中，替换模板中对应的值 使用Handlebars.js插件
        var content = {"data-id":id,"name": foodname,"price": foodprice};
        var source = $("#template").html();
        var template = Handlebars.compile(source);
        var html = template(content);

        //获取点击对象input的值
        var $count = $(this).prev().val();
        if(parseInt($count) == 1) {
            $(html).appendTo(".cart-item-list");//生成右侧的 li
        }
        binding();
    });

    //点击左侧绑定右侧,右侧购物车左侧数量同时变化 价格倍增
    //获取左侧点击对象根节点的data-id 与右侧匹配
    $(document).delegate(".food-item .food-btn2","click",function() {
        //左侧
        var $id = $(this).parent().attr("data-id");
        var sp =  $(this).prevAll(".food-content").children(".food-price").text(); //单价
        var input_sum = $(this).children(".cart-totalcount").val();//总数量

        //遍历右侧购物车的li
        var $li = $(".cart-item-list li");
        for(var i = 0;i<$li.length;i++) {
            var $id2 = $li.eq(i).attr("data-id");
            //当两者为同一对象
            if($id2 == $id) {
                //左侧的总数量赋给右侧总数
                var $sum = $li.eq(i).children().children(".cart-totalcount").val(input_sum);

                var $tp = $li.eq(i).children(".cart-tprice");
                //总数量*单价 赋给右侧总价格
                $tp.text(parseInt(input_sum)*parseInt(sp));
                if($sum.val() == 0) {
                    $li.eq(i).slideUp(300);
                }
            }
        }
        binding();
    });

    //点击右侧购物车绑定左侧 ,左侧样品同时变化
    //事件委托，获取右侧点击对象根节点的data-id 与左侧匹配
    $(document).delegate(".cart-item .cart-amount","click",function() {
        //右侧购物车  -》当前点击对象
        var $id = $(this).parent().attr("data-id");//获取data-id
        var input_sum = $(this).children(".cart-totalcount").val();//总数
        var $tp = $(this).parent().children(".cart-tprice");//总价格
        if(input_sum == 0) {
            //$(this).parent().remove();
            $(this).parent().slideUp(300);
        }
        //遍历左侧
        var $fooditem = $(".food-item");
        for(var i = 0;i<$fooditem.length;i++) {
            var $id2 = $fooditem.eq(i).attr("data-id");//遍历data-id
            var $sp = $fooditem.eq(i).children().children(".food-price").text();//单价
            //当两者为同一对象
            if($id2 == $id) {
                //右侧的数量赋给左侧
                var $sum = $fooditem.eq(i).children().children(".cart-totalcount").val(input_sum);
                //数量*单价 赋给右侧总价格
                var $rtp = parseInt(input_sum)*parseInt($sp);
                $tp.text($rtp);
            }
        }
        binding();

    });

    //点击蓝色按钮，切换为购物加减按钮
    $(".food-btn").click(function(){
        var fb2 = $(this).next(".food-btn2");

        fb2.css("display","block");//购物加减按钮出现
        $(this).css("display","none");//蓝色框消失

        //点击添加购物按钮 右下角购物车出现
        $(".cart-footer").slideDown(500);
        $("#sidebar_all").css("display", "block");

        $("#empty-shopcart").css("display", "none");
        $("#cart-choose").css("display", "none");
    });


    $(".food-btn2").click(function() {
        var shop_input = $(this).children(".cart-totalcount");
        var bt1 = $(this).prev();
        var input_value = shop_input.val();
        bt1.css("display","none");
        $(this).css("display","block");

    });

    //点击购物车的清空

    $("#shop-clear-cart").click(function () {
        var $li = $(".cart-item-list li");
        //商家购物车
        $li.remove();//删除购物车中的li
        $("#empty-shopcart").slideDown(400);
        $("#cart-choose").slideDown(400);
        $("#cart-sum").css("display", "none");
        $("#sidebar_all").css("display", "none");

        $("#tnb").text(0);
        $("#ppt").text(0);
        var toatalnum = $(".cart-totalcount")
        var fb1 = $(".food-btn");
        var fb2 = $(".food-btn2");
        for(var i=0;i<toatalnum.length;i++ ) {
            toatalnum.eq(i).val(0);
        }

    });

   $(document).delegate("#packup","click",function() {
        var $li = $(".cart-item-list li");
        if($li.length != 0) {
            $("#sidebar_all").slideToggle(400);
        }
    });



    //切换菜单宽度
    var $th_large = $("#th_large");
    var $food_btn = $(".food-btn");
    var food_item = $(".food-item");
    //变窄
    $("#th_large").click(function(){
        $(this).addClass("active");
        $("#th_list").removeClass("active");

        for(var i=0;i< food_item.length;i++) {
            food_item.eq(i).css("width","48%");
            $food_btn.eq(i).css({
                "right": "20px"
            });
        }
    });
    //变宽
    $("#th_list").click(function(){
        $(this).addClass("active");
        $("#th_large").removeClass("active");
        for(var i=0;i< food_item.length;i++) {
            food_item.eq(i).css("width","98%");
            $food_btn.eq(i).css({
                "bottom":"36px",
                "right": "40px"
            });
        }
    });

    //点击收藏
    $("#fav-shop").click(function(){
        var $this = $("#heart_text");
        var $heart_text = $this.text();
        var heart = $(".fav-shop h4 i")
        heart.css("color","#f74342");
       if($heart_text == "收藏"){
           $this.text("取消收藏");
          heart.addClass("fa-heart");
           heart.removeClass("fa-heart-o");
        } else if($heart_text == "取消收藏"){
           heart.addClass("fa-heart-o");
           heart.removeClass("fa-heart");
           $this.text("收藏");
           heart.css("color","#fff");

        }
    });

    //实时获取滚动条的状态
    $(window).scroll(function(){
        if($(document).scrollTop() > "256"){
            $("#menu_category").addClass("menu-category-fix");//固定分类
            $("#bulletin").addClass("bulletin-fix");//固定通告
        } else if($(document).scrollTop() < "256"){
            $("#menu_category").removeClass("menu-category-fix");
            $("#bulletin").removeClass("bulletin-fix");
        }
    });

    //分类背景色变蓝
    var category_a = $("#menu_category a");
    category_a.click(function(){
        var n = category_a.length;
        for(var i=0;i<n;i++) {
            if(category_a.eq(i).hasClass("menu-category-active")) {
                category_a.eq(i).removeClass("menu-category-active");
                $(this).addClass("menu-category-active");
                if($(this).hasClass("category-item0")){
                    $(body).scrollTop(255);
                } else if($(this).hasClass("category-item1")) {
                    $(document).scrollTop(320) ;
                }else if($(this).hasClass("category-item2")) {
                    $(document).scrollTop(478) ;
                }else if($(this).hasClass("category-item3")) {
                    $(document).scrollTop(635) ;
                }else if($(this).hasClass("category-item4")) {
                    $(document).scrollTop(792) ;
                }else if($(this).hasClass("category-item5")) {
                    $(document).scrollTop(949) ;
                }else if($(this).hasClass("category-item6")) {
                    $(document).scrollTop(1106) ;
                }else if($(this).hasClass("category-item7")) {
                    $(document).scrollTop(1265) ;
                }else if($(this).hasClass("category-item8")) {
                    $(document).scrollTop(1422) ;
                }else if($(this).hasClass("category-item9")) {
                    $(document).scrollTop(1579);
                }
            }
        }
    });
    var order = $("#shop-main a");
    order.click(function() {
        var n = order.length;
        for(var i=0;i<n;i++) {
            if(order.eq(i).hasClass("order-focus")) {
                order.eq(i).removeClass("order-focus");
                order.eq(i).children().removeClass("order-focus");
                $(this).addClass("order-focus");
                $(this).children().addClass("order-focus");
            }
        }
    });


        var nav_item = $("#shop-nav a");
        nav_item.click(function() {
            for(var i=0;i<nav_item.length;i++) {
                if(nav_item.eq(i).hasClass("shop-nav-focus")) {
                    nav_item.eq(i).removeClass("shop-nav-focus");
                    $(this).addClass("shop-nav-focus");
                }
            }
        });
    //footer位置微信图片的显现
    $("#footer-weixin").mouseover(function () {
        $("#icon-wechat").css("display", "block");

    });
    $("#footer-weixin").mouseout(function () {
        $("#icon-wechat").css("display", "none");

    });




    //点击返回顶端按钮
    $("#shop-go-top").click(function () {
        $(document).scrollTop(0);
    });





});