import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    component: () => import('../views/Inquiry.vue'),
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/Members.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
