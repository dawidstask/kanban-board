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
import { mapGetters } from 'vuex';

export default {
  name: 'TaskForm',
  props: {
    id: Number,
    description: String,
    type: String,
  },
  computed: {
    ...mapGetters([
      'taskTypes',
    ]),
  },
  data() {
    return {
      isFormVisible: false,
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

      this.clearForm();
      this.$nextTick(() => {
        this.$emit('task-added');
      });
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
