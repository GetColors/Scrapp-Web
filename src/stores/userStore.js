import authService from "../services/authentication/authService";
import jwt_token from "jwt-decode";

const userStore = {
  state: {
    token: undefined
  },
  mutations: {
    login: (state, payload) => {
      state.token = payload;
    },
    logout: state => {
      state.token = undefined;
    }
  },
  actions: {
    logout(context) {
      context.commit("logout");
    },
    login(context) {
      return new Promise((resolve, reject) => {
        authService().then(
          token => {
            context.commit("login", token);
            resolve(true);
          },
          error => {
            reject(error);
          }
        );
      });
    }
  },
  getters: {
    isLogged: state => {
      return !(tokenDoesNotExists(state.token) || tokenIsExpired(state.token));
    }
  }
};

const tokenIsExpired = token => {
  const payload = jwt_token(token);
  console.log(payload);
};

const tokenDoesNotExists = token => {
  if (token) {
    return false;
  }
  return true;
};

export default userStore;
