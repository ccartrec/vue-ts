import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'incoming',
        component: () => import('./views/Incoming.vue'),
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
