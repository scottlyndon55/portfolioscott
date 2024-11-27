import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutMe from "../components/AboutMe.vue";
import MySkills from "../components/MySkills.vue";
import MyServices from "../components/MyServices.vue";
import ContactMe from "../components/ContactMe.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutMe },
  { path: "/skills", component: MySkills },
  { path: "/services", component: MyServices },
  { path: "/contact", component: ContactMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
