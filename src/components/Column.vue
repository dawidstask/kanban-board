<template>
  <div>
    <span>{{ title }}</span>
    <draggable v-model="tasks" :options="{ group: 'main' }">
      <p v-for="task in tasks" :key="task.id">
        {{ task }}
      </p>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'Column',
  props: ['title', 'taskStatus'],
  components: {
    draggable,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.state.tasks[this.taskStatus];
      },
      set(tasks) {
        this.$store.commit('updateTasks', {
          tasks,
          status: this.taskStatus,
        });
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
  div
    height 87vh
</style>
