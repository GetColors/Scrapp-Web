const action = {
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
  };

export default  action;