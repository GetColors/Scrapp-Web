const mutations = {
    setProjects: (state, payload) => {
      state.projects = payload;
    },
    projectCreated: (state, payload) => {
      state.projects.push(payload);
    }
  };

  export default mutations;