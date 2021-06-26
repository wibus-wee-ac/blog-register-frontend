import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    components: () => import('../views/Home.vue'),
  },
  {
    path: '/user',
    name: 'user',
    components: () => import('../views/User.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    components: () => import('../views/Admin.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
