import { createRouter, createWebHistory } from 'vue-router';
import Hi from './components/Hi.vue';
import ContactPage from './components/ContactPage.vue';

const routes = [
    { path: '/', name: 'Hi', component: Hi },
    { path: '/contact', name: 'Contact', component: ContactPage },
  ];

const router = createRouter({
    history: createWebHistory(), // Uses browser history mode
    routes,
});

export default router;