<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span><strong>{{ countLeftt }}</strong> item left</span>
        <button 
          class="btn btn-outline-primary" 
          @click="onFilter('all')">
          All</button>
        <button 
          class="btn btn-outline-primary" 
          @click="onFilter('active')">
          Active</button>
        <button 
          class="btn btn-outline-primary" 
          @click="onFilter('completed')">
          Complete</button>
        <button 
          class="btn btn-outline-primary" 
          @click="deleteAllDone">
          ClearDone</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos'],

  computed: {
    countLeftt: function() {
      return this.todos.filter(todo => !todo.status).length
    }
  },

  methods: {
    onFilter(target) {
      this.$emit('onFilter', target)
    },

    deleteAllDone() {
      this.$emit('deleteAllDone')
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
  justify-content: space-around;
  align-items: center;
}
</style>
