/* eslint no-undef: 0 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
//import the hello component
import Main from "./components/Main";

Vue.config.productionTip = false;

//tell vue to use the router
Vue.use(VueRouter);

//define your routes
const routes = [
  //route for the home route of the web page
  {
    path: "/",
    component: Main,
    meta: {
      title: "Rise",
      metaTags: [
        {
          name: "description",
          content: "The home page of our example app."
        },
        {
          property: "og:description",
          content: "The home page of our example app."
        }
      ]
    }
  }
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  //define the selector for the root component
  el: "#app",
  //pass the template to the root component
  template: "<App/>",
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount("#app"); //mount the router on the app
