<template>
  <li class="list-group-item">
    <span 
      :class="{ selected: todo.status }">
      <input type="checkbox" @change="changeInput(todo.id)">
      {{ todo.title }}
    </span>
    <button class="btn btn-warning" @click="delTodo(todo.id)">X</button>
  </li>
</template>

<script>

export default {
  props: ['todo'],
  methods: {
    delTodo(id) {
      this.$emit('delTodo', id)

    },
    changeInput(id) {
      this.$emit('changeInput', id)
    }
  }
}
</script>

<style scoped>
.selected {
  text-decoration: line-through;
}
</style>
