<template>
  <div>
    <div v-for="(issues, status) in tasks" :key="status">
      <h3>{{ status }}</h3>
      <div v-for="issue in issues" :key="issue.id">
        <p>#{{ issue.id }} {{ issue.description }} ({{ issue.type }})</p>
      </div>
    </div>
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
