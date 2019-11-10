<template>
  <div class="board">
    <div class="board__column board__column--todo">
      <Column title="Todo" taskStatus="todo" />
    </div>
    <div class="board__column board__column--pending">
      <Column title="In progress" taskStatus="pending" />
    </div>
    <div class="board__column board__column--done">
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
  .board
    display flex
    flex-wrap wrap
    align-items center
    background-color #cdc5e6
  .board__column
    flex 1
    height 86vh
</style>
