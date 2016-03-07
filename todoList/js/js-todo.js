/**
 * Created by donggaina on 2015/11/13.
 */
(function () {
    var newList = document.querySelector("#newList");
    var doneList = document.querySelector("#doneList");
    var inputText = document.querySelector("#inputWapper");
    var finishNum = document.querySelector(".finishNum");
// 初始数据Json
    var date = [
        {"title": "购买5号电池", "done": false},
        {"title": "学习javascript", "done": false},
        {"title": "购买5号电池", "done": false},
        {"title": "买生日礼物", "done": false},
    ];

    function init() {
        for (var i = 0; i < date.length; i++) {
            creatLi(date[i]);
        }
    }

    init();
    // 创建待办事件li 
    function creatLi(todo) {
        // 创建html对象
        var li = document.createElement("li");
        var div = document.createElement("div");
        var a = document.createElement("a");
        var span = document.createElement("span");
        var textSpan = document.createElement("span");
        //创建文本对象
        var text = document.createTextNode(todo.title);

        var closetimes = document.createElement("a");
        var i = document.createElement("i");

        if (todo.done) {
            li.setAttribute("class", "done");
            finishNum.innerText = parseInt(finishNum.innerText) + 1;

        } else {
            li.setAttribute("class", "new");
        }
        // 对对象是指属性
        div.setAttribute("class", "task-wapper");
        a.setAttribute("href", "javascript:;");
        span.setAttribute("class", "check-box");
        textSpan.setAttribute("class", "text");
        closetimes.setAttribute("href", "javascript:;");
        closetimes.setAttribute("class", "close ");
        closetimes.setAttribute("id", "a2");
        i.setAttribute("class", "fa fa-times");
        // 添加html元素到父类元素中
        a.appendChild(span);
        textSpan.appendChild(text);
        closetimes.appendChild(i);
        div.appendChild(a);
        div.appendChild(textSpan);
        div.appendChild(closetimes);
        li.appendChild(div);
       
        if (todo.done) {
            doneList.appendChild(li);
        } else {
            newList.appendChild(li);
        }
    }
// 事件委托
    inputText.onkeypress = function (event) {
        if (event.keyCode == 13) {
            var value = this.value;
            var todo = {"title": value, "done": false};
            creatLi(todo);
            this.value = "";
        }
    };

    document.onclick = function (event) {
        var target = event.target;
        if (target.getAttribute("class") == "check-box") {
            var li = target.parentNode.parentNode.parentNode;
            if (li.getAttribute("class") == "done") {
                li.removeAttribute("class");
                doneList.removeChild(li);
                finishNum.innerText = parseInt(finishNum.innerText) - 1;
                newList.appendChild(li);
            } else {
                li.setAttribute("class", "done");
                newList.removeChild(li);
                doneList.appendChild(li);
                finishNum.innerText = parseInt(finishNum.innerText) + 1;
            }
        };
        if (target.getAttribute("class") == "fa fa-times") {
            var li = target.parentNode.parentNode.parentNode;
            if (li.getAttribute("class") == "done") {
                doneList.removeChild(li);
                finishNum.innerText = parseInt(finishNum.innerText) - 1;
            } else {
                newList.removeChild(li);
            }
        }
    }
     // 删除事件 勾选待办事件
    document.querySelector("#done-num").onclick = function () {
        var valueClass = doneList.getAttribute("class");
        if (valueClass == "task-list") {
            doneList.setAttribute("class", "task-list hide")
        } else {
            doneList.setAttribute("class", "task-list")
        }
    };

})();
