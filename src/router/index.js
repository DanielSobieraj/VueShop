import Vue from "vue";
import Router from "vue-router";

import home from "../components/home";
import login from "../components/login";
import register from "../components/register";
import addProduct from "../components/addProduct";
import editProduct from "../components/editProduct";
import deleteProduct from "../components/deleteProduct";

import crud from "../components/crud";
import search from "../components/search";

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
    },
    {
      path: "/crud",
      name: "crud",
      component: crud
    },
    {
      path: "/addproduct",
      name: "addProduct",
      component: addProduct
    },
    {
      path: "/editproduct",
      name: "editProduct",
      component: editProduct
    },
    {
      path: "/deleteProduct",
      name: "deleteProduct",
      component: deleteProduct
    },
    {
      path: "/search",
      name: "search",
      component: search
    }
  ]
});


export default router;
