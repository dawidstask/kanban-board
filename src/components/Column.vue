<template>
  <div>
    <span>{{ title }}</span>
    <p>{{ tasks }}</p>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: ['title', 'taskStatus'],
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(task => task.status === this.taskStatus);
    },
  },
};
</script>

<style scoped>

</style>
