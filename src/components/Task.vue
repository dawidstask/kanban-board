<template>
  <div class="task">
    <div
      :class="`task--${data.type}`"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <span class="task__header">
        <span
          :class="{
            'task__header-id': hover,
            'task__header-id--done' : hover && taskStatus === 'done'
          }"
        >
          #{{ data.id }}
        </span>
        <span
          v-if="hover"
          class="task__header-edit"
          @click="editMode = true"
        >
          edit
        </span>
        <span
          v-if="hover && taskStatus === 'done'"
          class="task__header-delete"
          @click="deleteTask"
        >
          delete
        </span>
      </span>
      <template v-if="editMode">
        <TaskForm
          :id="data.id"
          :description="data.description"
          :type="data.type"
          :taskStatus="taskStatus"
          @form-closed="closeForm"
        />
      </template>
      <template v-else>
        <span class="task__description">{{ data.description }}</span>
        <span class="task__type">{{ data.type }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';

export default {
  name: 'Task',
  props: {
    data: Object,
    taskStatus: String,
  },
  components: {
    TaskForm,
  },
  computed: {
    taskTypes() {
      return this.$store.state.taskTypes;
    },
  },
  data() {
    return {
      hover: false,
      editMode: false,
    };
  },
  methods: {
    closeForm() {
      this.editMode = false;
    },
    deleteTask() {
      const shouldDelete = window.confirm(`Do you want to delete task #${this.data.id}?`);

      if (shouldDelete) {
        this.$store.commit('removeTask', { ...this.data, status: 'done' });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
  .task
    padding .5em
    cursor grab
  .task div
    display flex
    flex-direction column
    background-color white
    border-radius .3em
  .task__header
    padding .3em
  .task__header-id
    margin-left 1.6em
  .task__header-id--done
    margin-left 5.35em
  .task__header-edit
    float right
    cursor pointer
  .task__header-delete
    float right
    cursor pointer
    margin-right 1em
  .task__description
    padding .7em
    text-align left
  .task__type
    align-self flex-end
  .task--feature .task__header,
  .task--feature .task__type
    background-color #ace1af
  .task--bugfix .task__header,
  .task--bugfix .task__type
    background-color #dc143c
    color white
  .task--default .task__header,
  .task--default .task__type
    background-color #F5F5F5
  .task__type
    margin: 0.5em;
    padding: 0.3em 0.7em;
    border-radius: 1em;
    font-size: 0.75em;
    font-weight: 500;
</style>
