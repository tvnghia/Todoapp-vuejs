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

import database from '../firebase/firebase'

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
        title: this.todoTitle,
        status: false
      }

      database.ref().push(todo)
      
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
          this.$emit('addNewTodoItem', arr)
          this.todoTitle = ''
        })  
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
