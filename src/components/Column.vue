<template>
  <div>
    <div class="board__column--helper">
      <h3>{{ title }}</h3>
      <draggable id="draggable" class="board__column--draggable" v-model="tasks" group="main">
        <div v-for="task in tasks" :key="task.id">
          <Task :data="task" :task-status="taskStatus" />
        </div>
      </draggable>
      <button v-if="taskStatus === 'todo' && addMode === false" @click="addMode = true">
        Add task
      </button>
    </div>
    <template v-if="addMode">
      <TaskForm v-if="taskStatus === 'todo'" @task-added="scrollDown" @form-closed="closeForm"/>
    </template>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TaskForm from '@/components/TaskForm.vue';
import Task from '@/components/Task.vue';

export default {
  name: 'Column',
  props: ['title', 'taskStatus'],
  components: {
    draggable,
    TaskForm,
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
  data() {
    return {
      addMode: false,
    };
  },
  methods: {
    scrollDown() {
      const container = this.$el.querySelector('#draggable');
      container.scrollTop = container.scrollHeight;
      this.closeForm();
    },
    closeForm() {
      this.addMode = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .board__column--helper
    max-height 72vh
  .board__column--draggable
    max-height 65vh
    overflow auto
</style>
