import loginUserService from "../../services/authentication/loginService";
import registerUserService from "../../services/authentication/registerService";

const authentication = {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    errors: {
      general: {
        message: undefined
      }
    }
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = "loading";
    },
    AUTH_SUCCESS(state, token) {
      state.status = "success";
      state.token = token;
    },
    LOGOUT(state) {
      state.status = "";
      state.token = "";
    },
    SET_GENERAL_ERROR: (state, message) => {
      state.errors.general.message = message;
      state.status = "error";
    },
    CLOSE_GENERAL_ERROR: state => {
      state.errors.general.message = undefined;
    }
  },
  actions: {
    logout: ({ commit }) => {
      commit("LOGOUT");
      localStorage.clear();
    },
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        loginUserService(credentials)
          .then(response => {
            const token = response.data.data.token;
            localStorage.setItem("token", token);
            commit("AUTH_SUCCESS", token);
            resolve(true);
          })
          .catch(error => {
            if (error.response.data.error.code === 2001) {
              const errorMessage = "Credenciales incorrectas.";
              commit("SET_GENERAL_ERROR", errorMessage);
            }
          });
      });
    },
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        registerUserService(credentials)
          .then(() => {
            resolve(true);
          })
          .catch(error => {
            if (error.response.data.error.code === 2000) {
              const errorMessage = "El correo ingresado ya está en uso.";
              commit("SET_GENERAL_ERROR", errorMessage);
            }
            reject();
          });
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    error: state => {
      return state.errors.general.message;
    }
  }
};

export default authentication;
