import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'incoming',
      component: Home,
    },
    {
      path: '/outgoing',
      name: 'outgoing',
      component: () => import('./views/Outgoing.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/newMessage.vue'),
    },
  ],
});
