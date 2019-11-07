import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        description: 'task1',
        type: 'feature',
        status: 'todo',
      },
      {
        description: 'task2',
        type: 'bugfix',
        status: 'pending',
      },
      {
        description: 'task3',
        type: 'default',
        status: 'done',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
