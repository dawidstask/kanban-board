<template>
  <div class="add-task">
    <button
      @click="isFormVisible = !isFormVisible"
      v-if="!isFormVisible"
    >
      Add new task
    </button>
    <form
      v-if="isFormVisible"
      @submit.prevent="addTask"
    >
      <div>
        <label>Description: </label>
        <input
          type="text"
          v-model="task.description"
          autofocus
          required
        >
      </div>
      <div>
        <label>Type: </label>
        <select
          v-model="task.type"
          required
        >
          <option
            v-for="type in getTypes"
            :value="type"
            :key="type"
          >
            {{ type }}
          </option>
        </select>
      </div>
      <div>
        <input
          type="button"
          value="Cancel"
          @click="clearForm"
        >
        <input
          type="submit"
          value="Submit"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTaskForm',
  computed: {
    getTypes() {
      const { tasks } = this.$store.state;
      const statuses = Object.keys(tasks);
      const types = [];

      statuses.forEach((status) => {
        tasks[status].forEach((item) => {
          if (types.includes(item.type)) {
            return;
          }

          types.push(item.type);
        });
      });

      return types;
    },
  },
  data() {
    return {
      isFormVisible: false,
      task: {
        description: null,
        type: null,
      },
    };
  },
  methods: {
    addTask() {
      if (!this.task.description || !this.task.type) {
        return;
      }

      this.$store.commit('addTask', this.task);
      this.clearForm();
    },
    clearForm() {
      this.task.description = null;
      this.task.type = null;
      this.isFormVisible = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .add-task
    height 5em
</style>
