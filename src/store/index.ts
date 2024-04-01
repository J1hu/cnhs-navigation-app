// store/index.ts
import { createStore } from 'vuex';

export default createStore({
  state: {
    currentRoute: ""
  },
  mutations: {
    setCurrentRoute(state, route) {
      state.currentRoute = route;
    }
  },
  actions: {
    // Define actions if you need to perform asynchronous operations
  },
  modules: {
    // You can organize your store into modules if needed
  }
});
