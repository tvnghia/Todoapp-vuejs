<template>
  <div>
    <input 
      type="text" 
      v-model="newtodo"
      @keyup.13="createNew"
      placeholder=" Add new todo" >
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'


export default {
  data() {
    return {
      newtodo: ''
    }
  },
  methods: {
    createNew() {
      const todo = {
        id: uuidv4(),
        title: this.newtodo,
        status: false
      }

      if(this.newtodo !== '') {
        this.$emit('createNew', todo),
        this.newtodo = ''
      }
    }
  }
}
</script>

<style scoped>
  input {
    width: 500px;
    height: 50px;
  }
</style>
