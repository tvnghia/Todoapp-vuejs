<template>
  <input type="checkbox" @change="change">
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    change(event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style scoped>

</style>
