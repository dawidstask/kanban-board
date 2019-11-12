<template>
  <div class="add-task">
    <form
      v-if="isFormVisible"
      @submit.prevent="submit"
    >
      <div>
        <input
          type="text"
          v-model="task.description"
          placeholder="Description..."
          autofocus
          required
        >
        <select
          v-model="task.type"
          required
        >
          <option
            v-for="type in taskTypes"
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
  name: 'TaskForm',
  props: {
    id: Number,
    description: String,
    type: String,
  },
  computed: {
    taskTypes() {
      return this.$store.state.taskTypes;
    },
  },
  data() {
    return {
      isFormVisible: true,
      task: {
        description: this.description,
        type: this.type,
      },
    };
  },
  methods: {
    submit() {
      if (!this.task.description || !this.task.type) {
        return;
      }

      if (this.id) {
        this.$store.commit('editTask', { id: this.id, ...this.task, status: 'todo' });
      } else {
        this.$store.commit('addTask', this.task);
      }

      this.$nextTick(() => {
        this.$emit('task-added');
      });
      this.$nextTick(() => {
        this.clearForm();
      });
    },
    clearForm() {
      this.task.description = null;
      this.task.type = null;
      this.isFormVisible = false;
      this.$emit('form-closed');
    },
  },
};
</script>

<style lang="stylus" scoped>
  .add-task
    height 5em
</style>
