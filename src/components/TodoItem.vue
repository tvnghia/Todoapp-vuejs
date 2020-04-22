<template>
  <li class="list-group-item">
    <span 
      :class="{ selected: todo.status }">
      <input 
        type="checkbox" 
        :checked="todo.status"
        @change="toggleStatus(todo.id)" >
      {{ todo.title }}
    </span>
    <button class="btn btn-warning" @click="removeTodoItem(todo.id)">X</button>
  </li>
</template>

<script>

export default {
  props: ['todo'],

  methods: {
    removeTodoItem(id) {
      this.$emit('removeTodoItem', id)
    },

    toggleStatus(id) {
      this.$emit('toggleStatus', id)
    }
  }
}
</script>

<style scoped>
.selected {
  text-decoration: line-through;
}
</style>
