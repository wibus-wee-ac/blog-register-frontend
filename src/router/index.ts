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
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
