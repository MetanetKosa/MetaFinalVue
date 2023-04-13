import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
<<<<<<< HEAD
import Login from '../components/pages/member/Login.vue';
import Signup from '../components/pages/member/Signup.vue';
import Admin from '../components/pages/admin/Admin.vue';
=======
import Login from '../components/pages/Login.vue';
import AdminRegister from '../components/pages/admin/AdminRegister.vue';
>>>>>>> 219f64ef4bdb9e707e15d36d22d6f4efca4cd5fd


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
<<<<<<< HEAD
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
       
=======
        {
            path: '/adminregister',
            name: 'AdminRegister',
            component: AdminRegister
        }
>>>>>>> 219f64ef4bdb9e707e15d36d22d6f4efca4cd5fd
    ]
});

// app.use(routes);

// app.mount('#app');

export default router;