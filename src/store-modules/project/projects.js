import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const projects = {
  state: {
    projects: []
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default projects;