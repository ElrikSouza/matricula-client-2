import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../auth/login/index.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../auth/signup/index.vue"),
  },
  {
    path: "/enrollment",
    name: "Enrollment",
    component: () => import("../enrollment/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
