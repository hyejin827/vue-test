import Vue from "vue";
import Router from "vue-router";
import Home from "../views/HomeView.vue";

Vue.use(Router);

const About = () => {
  return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
};

const Users = () => {
  return import(/* webpackChunkName: "user" */ "../views/UsersView.vue");
};
const Users2 = () => {
  return import(/* webpackChunkName: "user2" */ "../views/UsersView2.vue");
};

const Dessert = () => {
  return import(/* webpackChunkName: "dessert" */ "../views/DessertView.vue");
};
const UserDetail = () => {
  return import(
    /* webpackChunkName: "user-detail" */ "../views/UserDetail.vue"
  );
};
const UserEdit = () => {
  return import(/* webpackChunkName: "user-edit" */ "../views/UserEdit.vue");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    // {
    //   path: "/users/:id",
    //   name: "users",
    //   component: Users,
    // },
    {
      path: "/users",
      name: "users",
      component: Users,
      children: [
        {
          path: ":id",
          name: "user-detail",
          component: UserDetail,
        },
        {
          path: ":id/edit",
          name: "user-edit",
          component: UserEdit,
        },
      ],
    },
    {
      path: "/users2",
      name: "users2",
      component: Users2,
    },
    {
      path: "/dessert",
      name: "dessert",
      component: Dessert,
    },
  ],
});
