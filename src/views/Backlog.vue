<template>
  <div>
    <p v-for="task in tasks" :key="task.id">
      <span>{{ task }}</span>
    </p>
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
