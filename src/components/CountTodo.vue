<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span><strong>{{ todos | countLeft }}</strong> item left</span>
        <button type="button" class="btn btn-outline-primary" @click="allShow">All</button>
        <button type="button" class="btn btn-outline-primary" @click="activeShow">Active</button>
        <button type="button" class="btn btn-outline-primary" @click="completeShow">Complete</button>
        <button type="button" class="btn btn-outline-primary">Clear</button>
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
    allShow () {
      this.$emit('allShow')
    },
    activeShow () {
      this.$emit('activeShow')
    },
    completeShow () {
      this.$emit('completeShow')
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
