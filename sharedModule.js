// sharedModule.js
import { createStore } from 'vuex';

const sharedModule = {
  state: {
    // Define tus estados compartidos aquí
    exampleState: 'example',
  },
  mutations: {
    // Define tus mutaciones aquí
    setExampleState(state, newValue) {
      state.exampleState = newValue;
    },
  },
  actions: {
    // Define tus acciones aquí
    updateExampleState({ commit }, newValue) {
      commit('setExampleState', newValue);
    },
  },
  getters: {
    // Define tus getters aquí
    getExampleState: (state) => state.exampleState,
  },
};

export default createStore({
  modules: {
    shared: sharedModule,
  },
});

