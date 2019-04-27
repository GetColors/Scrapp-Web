import loginUserService from "../../services/authentication/loginService";

const authentication = {
  state: {
    isLogged: false
  },
  mutations: {
    IS_LOGGED: (state, status) => {
      state.isLogged = status;
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.clear();
      commit("IS_LOGGED", false);
    },
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        loginUserService(credentials)
          .then(response => {
            localStorage.setItem("token", response.data.token);
            commit("IS_LOGGED", true);
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  getters: {
    isLogged: state => {
      return state.isLogged;
    }
  }
};

export default authentication;
