

var store = [
        {'title': '学习JavaScript', 'done': false},
        {'title': '给Alex打电话', 'done': false},
        {'title': '买生日礼物', 'done': false},
        {'title': '看电影', 'done': true},
    ];


var vm = new Vue({
	el:'#todoApp',
	data:{
		todos:store,
		newTodo:'',
	},

	methods:{
		addTodo:function () {
			 var text = this.newTodo.trim();
			 if(text){
			 	this.todos.push({'title':text,'done': false});
			 	this.newTodo='';
			 }
		},
		removeTodo:function (index) {
			 this.todos.splice(index, 1);
		},
		toggleTodo:function (todo) {
            todo.done = !todo.done;
        }
	},
	computed:{
		finishNum:function(){
			var num = 0;
			for (var i = 0; i < this.todos.length; i++) {
				if(this.todos[i].done){
					num++;
				}
			}
			return num;
		}
	}


});