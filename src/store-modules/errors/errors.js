const errors = {
  state: {
    generalErrors: {
      message: undefined
    }
  },

  mutations: {
    SET_ERROR: (state, message) => {
      state.generalErrors.message = message;
    },
    REMOVE_ERROR: (state) => {
      state.generalErrors = undefined;
    }
  },

  actions: {
    showError: ({commit}, body) => {
      commit('SET_ERROR', body);
    },
    closeError: ({commit}) => {
      commit('REMOVE_ERROR');
    }
  },

  getters: {
    error: (state) => {
     return state.generalErrors; 
    }
  }

};

export default errors;