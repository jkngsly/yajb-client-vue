import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@views/Dashboard.vue";
import SearchJobs from "@views/SearchJobs.vue";
import MyJobs from "@views/MyJobs.vue";
import Login from "@views/auth/Login.vue";
import Register from "@views/auth/Register.vue";
import Create from "@views/jobs/Create.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { transition: "fade" },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { transition: "fade" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { transition: "fade" },
  },
  {
    path: "/jobs/search",
    name: "Search Jobs",
    component: SearchJobs,
    meta: { transition: "fade" },
  },
  {
    path: "/jobs",
    name: "My Jobs",
    component: MyJobs,
    meta: { transition: "fade" },
  },
  {
    path: "/jobs/create",
    name: "Create Job",
    component: Create,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const excluded = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  /*
  if (store.getters.loginState) {
    if (to.path === "/login") next("/");
    else next();
  } else {
    if (to.path === "/login") next();
    else next("/login");
  }*/
  next();
});

export default router;
