import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Login from '@/components/pages/member/Login.vue';
import Signup from '@/components/pages/member/Signup.vue';
import AdminRegister from '@/components/pages/admin/AdminRegister.vue';
import AdminList from '@/components/pages/admin/AdminList.vue';
import AdminMember from '@/components/pages/admin/AdminMember.vue';
import RentalPay from '@/components/pages/order/RentalPay.vue';
import BuyPay from '@/components/pages/order/BuyPay.vue';
import RentalResult from '@/components/pages/order/RentalResult.vue';
import BuyResult from '@/components/pages/order/BuyResult.vue';
import Detail from '@/components/pages/product/Detail.vue';
import List from '@/components/pages/product/List.vue';
import SearchList from '@/components/pages/product/SearchList.vue';
import AdminOrder from '@/components/pages/admin/AdminOrderList.vue';
import MyProduct from '@/components/pages/mypage/MyProduct.vue';
import MyPage from '@/components/pages/mypage/MyPage.vue';
import MyOrderList from '@/components/pages/mypage/MyOrderList.vue';
import MyPayList from '@/components/pages/mypage/MyPayList.vue';


const router = createRouter({
    history: createWebHistory(),
    mode: history,
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
            path: '/adminorder',
            name: 'AdminOrder',
            component: AdminOrder
        },
        {
            path: '/adminlist',
            name: 'AdminList',
            component: AdminList
        },
        {
            path: '/adminmember',
            name: 'AdminMember',
            component: AdminMember
        },
        {
            path: '/RentalPay',
            name: 'RentalPay',
            component: RentalPay
        },
        {
            path: '/BuyPay',
            name: 'BuyPay',
            component: BuyPay
        },

        {
            path: '/RentalResult',
            name: 'RentalResult',
            component: RentalResult
        },
        {
            path: '/BuyResult',
            name: 'BuyResult',
            component: BuyResult
        },
        {
            path: '/product/detail/:pno',
            name: 'ProductDetail',
            component: Detail
        },
        {
            path: '/productlist',
            name: 'ProductList',
            component: List
        },
        {
            path: '/search/:searchKeyword',
            name: 'SearchList',
            component: SearchList
        },
        {
            path: '/myproduct/:orderNo',
            name: 'MyProduct',
            component: MyProduct
        },
        {
            path: '/mypage/myproduct',
            name: 'MyPage',
            component: MyPage
        },
        {
            path: '/myorder',
            name: 'MyOrderList',
            component: MyOrderList
        },
        {
            path: '/mylist',
            name: 'MyPayList',
            component: MyPayList
        },

    ]
});

// app.use(routes);

// app.mount('#app');

export default router;