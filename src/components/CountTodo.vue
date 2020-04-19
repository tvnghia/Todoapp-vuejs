<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span><strong>{{ todos | countLeft }}</strong> item left</span>
        <button type="button" class="btn btn-outline-primary" @click="onFilter('all')">All</button>
        <button type="button" class="btn btn-outline-primary" @click="onFilter('active')">Active</button>
        <button type="button" class="btn btn-outline-primary" @click="onFilter('complete')">Complete</button>
        <button type="button" class="btn btn-outline-primary" @click="deleteAllDone">ClearDone</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  filters: {
    countLeft: function(value) {
      return (value.filter(item => !item.status)).length
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
