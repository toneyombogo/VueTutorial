import Vue from "vue";
import Router from "vue-router";
import AboutUs from "./components/AboutUs.vue";
import ContactUs from "./components/ContactUs.vue";
Vue.use(Router);

let routes = new Router({
  routes: [
    {
      path: "/about-us",
      component: AboutUs
    },
    {
      path: "/contact-us",
      component: ContactUs,
      children: []
    }
  ],
  mode: "history"
});

export default routes;
