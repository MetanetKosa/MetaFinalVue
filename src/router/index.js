import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import Login from '../components/pages/member/Login.vue';
import AdminRegister from '../components/pages/admin/AdminRegister.vue';


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
        },
        {
            path: '/adminregister',
            name: 'AdminRegister',
            component: AdminRegister
        }
    ]
});

// app.use(routes);

// app.mount('#app');

export default router;