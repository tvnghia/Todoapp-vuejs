<template>
  <div>
    <todo-list-input @createNew="newTodo"></todo-list-input>
    <todo-list-item :todos="todos" @delTodo="delTodo"></todo-list-item>
    <count-todo :todo-length="todoCount" v-show="todos.length"></count-todo>
  </div>
</template>

<script>

import TodoListInput from './TodoListInput'
import TodoListItem from './TodoListItem'
import CountTodo from './CountTodo'

export default {
  data() {
    return {
      todos: [],
      todosComplete: 0
    }
  },
  computed: {
    todoCount: function () {
      return this.todos.length - this.todosComplete
    }
  },
  components: {
    TodoListInput,
    TodoListItem,
    CountTodo
  },
  methods: {
    newTodo(newtodo) {
      this.todos.push(newtodo)
    },
    delTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
