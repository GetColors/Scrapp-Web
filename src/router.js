import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Register from "./components/authentication/Register";
import authenticated from "./guards/authenticatedGuard";
import Login from "./components/authentication/Login";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Welcome,
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authenticated()) {
      next("/");
    }
    next();
  }

  if (to.matched.some(recorde => recorde.meta.guest)) {
    if (authenticated()) {
      next("/home");
    }
    next();
  }
});

export default router;
