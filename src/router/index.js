import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import Login from '../components/pages/Login.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});

// app.use(routes);

// app.mount('#app');

export default router;