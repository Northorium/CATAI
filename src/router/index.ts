import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Correct relative path

const routes = [
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
