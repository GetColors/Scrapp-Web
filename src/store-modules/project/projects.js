import fetchAllProjectsService from "../../services/project/fetchAllProjectsService";
import createProjectService from "../../services/project/createProjectService";

const projects = {
  state: {
    projects: []
  },
  mutations: {
    setProjects: (state, payload) => {
      state.projects = payload;
    },
    projectCreated: (state, payload) => {
      state.projects.push(payload);
    }
  },
  actions: {
    fetchAllProjects: context => {
      fetchAllProjectsService().then(response => {
        context.commit("setProjects", response);
      });
    },
    createProject: (context, project) => {
      createProjectService(project).then(response => {
        context.commit("projectCreated", response);
      });
    }
  },
  getters: {
    allProjects: state => {
      return state.projects;
    }
  }
};

export default projects;
