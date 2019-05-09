import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import "./registerServiceWorker";

const axiosInstance = axios.create({
  baseURL: "http://getcolors.cl:3000",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

Vue.use(axiosInstance);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
