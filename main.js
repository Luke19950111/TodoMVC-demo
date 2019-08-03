//localStorage存储
var STORAGE_KEY = 'todos-vue'
var todoStorage = {
    fetch: function(){
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach((todo, index)=>{
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function(todos){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
    
}

var app = new Vue({
    data() {
        return {
            todos: todoStorage.fetch(),
        }
    },
    watch: {
        todos: {
            handler: function(todos){
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    methods: {
        addTodo(){
            console.log('addTodo')
        }
    },
})

app.$mount('.todoapp')