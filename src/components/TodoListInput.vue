<template>
  <div>
    <input type="text" v-model="newtodo" @keyup.13="createNew" placeholder="Add new todo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      newtodo: ''
    }
  },
  methods: {
    createNew() {
      this.$emit('createNew', this.newtodo),
      this.newtodo = ''
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
