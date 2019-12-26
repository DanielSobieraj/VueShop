import Vue from "vue";
import Router from "vue-router";
// import firebase from "firebase";

import home from "../components/home";
import login from "../components/login";
import register from "../components/register";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: home,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next('home');
  else next();
});*/

export default router;
