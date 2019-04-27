import Vue from "vue";
import Vuex from "vuex";

import authentication from "./store-modules/authentication/authentication";
import projects from "./store-modules/project/projects";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication: authentication,
    projectStore: projects
  }
});
