import store from "../store";

const authenticated = () => {
  return store.getters.isLoggedIn;
};

export default authenticated;
