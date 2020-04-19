<template>
  <div class="container-fluid text-center">
    <h1>My Todo App</h1>

    <!--Enter todo-->
    <todo-list-input @createNew="newTodo" />

    <!--List todo-->
    <ul class="list-group">
      <todo-item 
        v-for="(todo, index) in todos" 
        :key="index"
        :todo="todo"
        @delTodo="delTodo"
        @changeInput="changeInput" />
    </ul>

    <!--Footer-->
    <count-todo 
      :todos="todos" 
      v-show="todos.length" 
      @allShow="allShow"
      @activeShow="activeShow"
      @completeShow="completeShow"/>
  </div>
</template>

<script>

import TodoListInput from './components/TodoListInput'
import CountTodo from './components/CountTodo'
import TodoItem from './components/TodoItem'


export default {
  data() {
    return {
      todos: []
    }
  },
  components: {
    TodoListInput,
    CountTodo,
    TodoItem
  },
  methods: {
    newTodo(todo) {
      this.todos.push(todo) 
    },
    delTodo(id) {
      this.todos.splice(this.todos.findIndex(item => {
        return item.id === id
      }), 1)
    },
    changeInput(id) {
      this.todos.map(item => {
        if (id === item.id) {
          item.status = !item.status
        }
      })
    },
    allShow() {
      this.todos.map(item => {
        item.show = true
        console.log(item.show)
      })
    },
    activeShow() {
      this.todos.map(item => {
        if (item.status) {
          item.show = false
        } else {
          item.show = true
        }
      })
    },
    completeShow() {
      console.log('complete')
      this.todos.map(item => {
        if (item.status) {
          item.show = true
        } else {
          item.show = false
        }
      })
    }
  }
}
</script>

<style scoped>
.list-group {
  max-width: 500px;
  margin: 0 auto;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
