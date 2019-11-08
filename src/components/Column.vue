<template>
  <div class="board__column--helper">
    <span>{{ title }}</span>
    <draggable class="board__column--helper" v-model="tasks" :options="{ group: 'main' }">
      <div v-for="task in tasks" :key="task.id">
        <Task :data="task" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import Task from '@/components/Task.vue';

export default {
  name: 'Column',
  props: ['title', 'taskStatus'],
  components: {
    draggable,
    Task,
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
  .board__column--helper
    height 100%
</style>
