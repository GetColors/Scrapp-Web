import loginUserService from "../services/authentication/loginService";
import jwt_token from "jwt-decode";

const userStore = {
  state: {
    user: {
      email: undefined
    }
  },
  mutations: {
    loggedUser: (state, payload) => {
      state.user = {
        email: payload
      };
    }
  },
  actions: {
    logout(context) {
      localStorage.clear();
    },
    login(context, {email, password}) {
      return new Promise((resolve, reject) => {
        loginUserService()
          .then(token => {
            const payload = jwt_token(token);
            context.commit("loggedUser", payload.email);
            localStorage.setItem("token", token);
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
      const token = localStorage.getItem("token");
      return !(tokenDoesNotExists(token) || tokenIsExpired(token));
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
