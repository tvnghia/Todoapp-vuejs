<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span><strong>{{ todoLength }}</strong> item left</span>
        <button type="button" class="btn btn-outline-primary">All</button>
        <button type="button" class="btn btn-outline-primary">Active</button>
        <button type="button" class="btn btn-outline-primary">Complete</button>
        <button type="button" class="btn btn-outline-primary">Clear</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todoLength']
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
