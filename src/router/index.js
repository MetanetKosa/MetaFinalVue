import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import Login from '../components/pages/member/Login.vue';
import Signup from '../components/pages/member/Signup.vue';
import Admin from '../components/pages/admin/Admin.vue';


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
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        }
       
    ]
});

// app.use(routes);

// app.mount('#app');

export default router;