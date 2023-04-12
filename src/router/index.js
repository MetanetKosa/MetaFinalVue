import { createApp, createWebHistory } from 'vue';
import Home from '../pages/Home.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});

// app.use(routes);

// app.mount('#app');

export default router;