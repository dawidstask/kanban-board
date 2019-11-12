import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [{
        id: 1,
        description: 'Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.',
        type: 'feature',
      },
      {
        id: 2,
        description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        type: 'bugfix',
      }],
      pending: [{
        id: 3,
        description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus',
        type: 'default',
      }],
      done: [{
        id: 4,
        description: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        type: 'default',
      }],
    },
    taskTypes: ['feature', 'bugfix', 'default'],
    lastId: 4,
  },
  mutations: {
    addTask(state, task) {
      state.lastId += 1;
      state.tasks.todo.push({ id: state.lastId, ...task });
    },
    editTask(state, task) {
      const found = state.tasks[task.status].find(item => item.id === task.id);
      found.description = task.description;
      found.type = task.type;
    },
    updateTasks(state, { tasks, status }) {
      state.tasks[status] = tasks;
    },
    initialiseStore(state) {
      if (localStorage.getItem('state')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state'))),
        );
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
