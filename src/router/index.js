import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta'
import Home from '../views/Home.vue';

Vue.use(Meta)
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
    path: '/myfavoritefilmsserials',
    name: 'MyFavoriteFilmsSerials',
    component: () => import('../views/MyFavoriteFilmsSerials.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
