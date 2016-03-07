/**
 * Created by donggaina on 2015/11/18.
 */
$(function () {
    var $newList = $("#newList");
    var $doneList = $("#doneList");
    var $n = $("#numFinish");
    // 初始数据Json
    var date = [
        {"title": "学习JavaScript", "done": false},
        {"title": "给Alex打电话", "done": false},
        {"title": "买生日礼物", "done": false},
        {"title": "看电影", "done": false},
    ];


    function init() {
        for (var i = 0; i < date.length; i++) {
            createLi(date[i])
        }
    }

    init();
    function fn() {
        var $t = $("#TaskDone");
        if ($n.text() == 0) {
            $t.hide();
        } else {
            $t.show();
        }
    }
    fn();
    // 创建待办事件li 
    function createLi(todo) {
        // 读取模板
        var html = $("#templateLi").html();
        // 替换模板数据
        html = html.replace("{{title}}", todo.title);
        if (todo.done) {
            $(html).addClass("done").appendTo($doneList);
            //parseInt($n.text()) + 1
            $n.text(parseInt($n.text()) + 1);
            fn();
        } else {
            // 插入第一个
            $(html).prependTo($newList);
        }
    }

    $("#inputWapper").keydown(function (event) {
        if (event.keyCode == 13) {
            var $value = $(this).val();
            var todo = {"title": $value, "done": false};
            createLi(todo);
            $(this).val(""); //清空input的数据
        }
    });
    // 事件委托 勾选待办事件
    $(document).delegate(".checkBox", "click", function () {
        var $li = $(this).parent().parent().parent();
        //$li.remove();
        if ($li.hasClass("done")) {
            $li.removeClass("done").appendTo($newList);
            $n.text(parseInt($n.text()) - 1);
            fn();
        } else {
            $li.addClass("done").appendTo($doneList);
            $n.text(parseInt($n.text()) + 1);
            fn();
        }
    });
    // 删除事件
    $(document).delegate(".close", "click", function () {
        var $li = $(this).parent().parent();
        $li.remove();
        if ($li.hasClass("done")) {
            $n.text(parseInt($n.text()) - 1);
            fn();
        }
    });
    
    $("#TaskDone").click(function () {
        $doneList.toggle();
    });
});