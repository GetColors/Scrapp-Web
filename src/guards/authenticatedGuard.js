import store from "../store";

const authenticated = () => {
  return store.getters.isLogged;
};

export default authenticated;
