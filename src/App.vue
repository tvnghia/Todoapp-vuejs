<template>
  <div class="container-fluid text-center">
    <h1>My todo App</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/TodoList'

export default {
  components: {
    TodoList
  }
}
</script>

<style>

</style>
