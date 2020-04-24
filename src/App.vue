<template>
  <div class="container-fluid text-center">
    <h1>My Todo App!</h1>

    <!--Enter todo-->
    <todo-list-input @addNewTodoItem="todos=($event)" />

    <!--List todo-->
    <ul class="list-group">
      <todo-item
        v-for="todo in filterTodos"
        :key="todo.id"
        :todo="todo"
        @removeTodoItem="removeTodoItem"
        @toggleStatus="toggleStatus" />
    </ul>

    <!--Footer-->
    <count-todo
      :todos="todos"
      v-show="todos.length"
      @onFilter="target = $event"
      @deleteAllDone="deleteAllDone" />
  </div>
</template>

<script>
import TodoListInput from './components/TodoListInput'
import CountTodo from './components/CountTodo'
import TodoItem from './components/TodoItem'
import database from './firebase/firebase'

const arr = []
database.ref()
  .once('value')
  .then(snapshot => {
    snapshot.forEach(childsnapshot => {
      arr.push({
        id: childsnapshot.key,
        ...childsnapshot.val()
      })
    })
  })

export default {
  data() {
    return {
      todos: arr,
      target: 'all'
    }
  },

  computed: {
    filterTodos: function() {
      let filter = this.todos
      if (this.target === 'completed') {
        filter = [...filter].filter(item => item.status)
      } else if (this.target === 'active') {
        filter = [...filter].filter(item => !item.status)
      }

      return filter
    }
  },

  components: {
    TodoListInput,
    CountTodo,
    TodoItem
  },

  methods: {
    removeTodoItem(id) {
      const index = this.todos.findIndex(item => {
        return item.id === id
      })
      this.todos.splice(index, 1)
      database.ref(`${id}`).remove()
    },

    toggleStatus(id) {
      this.todos.map(todo => {
        if (todo.id === id) {
          database.ref(`${id}`).update({
            status: !todo.status
          })
          todo.status = !todo.status
        }
      })
    },

    deleteAllDone() {
      this.todos.map(todo => {
        if (todo.status) {
          database.ref(todo.id).remove()
        }
      })
      this.todos = this.todos.filter(todo => !todo.status)
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
