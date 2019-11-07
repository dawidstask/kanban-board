<template>
  <div>
    <span>backlog</span>
    <p>{{ tasks }}</p>
  </div>
</template>

<script>
export default {
  name: 'Backlog',
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style scoped>

</style>
