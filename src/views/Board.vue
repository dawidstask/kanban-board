<template>
  <div class="columns">
    <div class="column">
      <Column title="Todo" taskStatus="todo" />
    </div>
    <div class="column">
      <Column title="In progress" taskStatus="pending" />
    </div>
    <div class="column">
      <Column title="Done" taskStatus="done" />
    </div>
  </div>
</template>

<script>
import Column from '@/components/Column.vue';

export default {
  name: 'Board',
  components: {
    Column,
  },
};
</script>

<style lang="stylus" scoped>
  .columns
    display flex
    flex-wrap wrap
    align-items center
    .column
      flex 1
</style>
