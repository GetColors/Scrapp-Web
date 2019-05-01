import Vue from "vue";
import Vuex from "vuex";

import authentication from "./store-modules/authentication/authentication";
import projects from "./store-modules/project/projects";
import errors from "./store-modules/errors/errors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication: authentication,
    projectStore: projects,
    errorStore: errors
  }
});