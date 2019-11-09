<template>
  <div class="task">
    <div :class="`task--${data.type}`">
      <span class="task__header">#{{ data.id }}</span>
      <span class="task__description">{{ data.description }}</span>
      <span class="task__type">{{ data.type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    data: Object,
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
    margin: .5em;
    padding: .3em .7em;
    border-radius: .3em;
    font-size: .9em;
</style>
