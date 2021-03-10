import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/mygames',
    name: 'MyGames',
    component: () => import('../views/MyGames.vue'),
  },
  {
    path: '/code_py',
    name: 'Code_Py',
    component: () => import('../views/Code_Py.vue'),
  },
  {
    path: '/myfavoritefilms',
    name: 'MyFavoriteFilms',
    component: () => import('../views/MyFavoriteFilms.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
