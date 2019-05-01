import loginUserService from "../../services/authentication/loginService";
import registerUserService from "../../services/authentication/registerService";

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
            localStorage.setItem("token", response.data.data.token);
            commit("IS_LOGGED", true);
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        registerUserService(credentials)
          .then(response => {
            localStorage.setItem("token", response.data.token);
            resolve(true);
          })
          .catch(error => {
            reject(error);
            console.log(error.response.data.error.message)
          });
      });
    }
  },
  getters: {
    isLogged: state => {
      if ( localStorage.getItem('token')) {
        return true;
      }
      return false;
    }
  }
};

export default authentication;
