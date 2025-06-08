import { createRouter, createWebHashHistory } from 'vue-router';
import Hi from './components/Hi.vue';
// import Portfolio from './components/PortfolioPage.vue';
import ContactPage from './components/ContactPage.vue';

const routes = [
    { path: '/', name: 'Hi', component: Hi },
    // { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/contact', name: 'Contact', component: ContactPage },
  ];

const router = createRouter({
    history: createWebHashHistory(), // Uses browser history mode
    routes,
});

export default router;