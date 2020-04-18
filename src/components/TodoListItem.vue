<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos" :key="todo">
        <span :class="{ selected: checked }"><base-input v-model="checked"></base-input>  {{ todo }}</span>
        <button class="btn btn-warning" @click="delTodo(index)">X</button>
      </li>
    </ul>
</template>

<script>

import BaseInput from './BaseInput'

export default {
  props: ['todos'],
  data() {
    return {
      checked: false
    }
  },
  computed: {
 
  },
  methods: {
    delTodo(index) {
      this.$emit('delTodo', index)
    },
    abs() {
      console.log('sad')
    }
  },
  components: {
    BaseInput
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

.selected {
  text-decoration: line-through;
}
</style>
