import Vue from "vue";
import Vuex from "vuex";

import userStore from "./stores/userStore";
import projectStore from "./stores/projectStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userStore,
    projectStore
  }
});
