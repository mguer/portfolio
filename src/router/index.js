import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/projet/:projetId",
    name: "Projet",
    component: () =>
      import(/* webpackChunkName: "projet" */ "../views/Projet.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
