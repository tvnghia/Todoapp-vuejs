<template>
  <div>
    <input 
      type="text" 
      v-model="todoTitle"
      @keyup.13="addNewTodoItem"
      placeholder=" Add new todo!" >
  </div>
</template>
<script>

import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      todoTitle: ''
    }
  },
  
  methods: {
    addNewTodoItem() {
      if (this.todoTitle === '') return

      const todo = {
        id: uuidv4(),
        title: this.todoTitle,
        status: false
      }

      this.$emit('addNewTodoItem', todo)
      this.todoTitle = ''
    }
  }
}
</script>

<style scoped>
  input {
    width: 500px;
    height: 50px;
    padding: 15px;
  }
</style>
