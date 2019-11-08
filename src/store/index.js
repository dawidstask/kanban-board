import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [{
        id: 1,
        description: 'task1',
        type: 'feature',
      },
      {
        id: 2,
        description: 'task2',
        type: 'bugfix',
      }],
      pending: [{
        id: 3,
        description: 'task3',
        type: 'default',
      }],
      done: [{
        id: 4,
        description: 'task4',
        type: 'default',
      }],
    },
    lastId: 4,
  },
  mutations: {
    updateTasks(state, { tasks, status }) {
      state.tasks[status] = tasks;
    },
  },
  actions: {
  },
  modules: {
  },
});
