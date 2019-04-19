import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome";
import Home from "./views/Home";
import authenticated from "./guards/authenticatedGuard";

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
