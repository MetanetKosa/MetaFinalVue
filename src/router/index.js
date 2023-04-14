import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Login from '@/components/pages/member/Login.vue';
import Signup from '@/components/pages/member/Signup.vue';
import AdminRegister from '@/components/pages/admin/AdminRegister.vue';
import AdminList from '@/components/pages/admin/AdminList.vue';
import AdminDetail from '@/components/pages/admin/AdminDetail.vue';
import AdminMember from '@/components/pages/admin/AdminMember.vue';
import Rental1 from '@/components/pages/order/Rental1.vue';
import Rental2 from '@/components/pages/order/Rental2.vue';
import Rental3 from '@/components/pages/order/Rental3.vue';
import Detail from '@/components/pages/product/Detail.vue';
import List from '@/components/pages/product/List.vue';
import MyProduct from '@/components/pages/mypage/MyProduct.vue';
import MyPage from '@/components/pages/mypage/MyPage.vue';


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
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/adminregister',
            name: 'AdminRegister',
            component: AdminRegister
        },
        {
            path: '/adminlist',
            name: 'AdminList',
            component: AdminList
        },
        {
            path: '/admindetail',
            name: 'AdminDetail',
            component: AdminDetail
        },
        {
            path: '/adminmember',
            name: 'AdminMember',
            component: AdminMember
        },
        {
            path: '/rental1',
            name: 'Rental1',
            component: Rental1
        },
        {
            path: '/rental2',
            name: 'Rental2',
            component: Rental2
        },
        {
            path: '/rental3',
            name: 'Rental3',
            component: Rental3
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/myproduct',
            name: 'MyProduct',
            component: MyProduct
        },
        {
            path: '/mypage',
            name: 'MyPage',
            component: MyPage
        },

    ]
});

// app.use(routes);

// app.mount('#app');

export default router;