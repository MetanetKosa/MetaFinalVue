<template>
    <section class="py-5 mt-6">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 me-lg-auto" style="text-align:left">
                <MypageSidebar></MypageSidebar>
            </div>
            <div class="col-lg-9 ps-lg-5 mt-5">
                <div class> 
                  <div class="text-block" style="text-align:left">
                    <h1 class="hero-heading mb-0">정세은님,</h1>
                    <h1 class="hero-heading mb-0">안녕하세요!</h1>
                    <p class="mt-2 text-muted">내게 맞는 제품관리 서비스와 활동 내역을 확인하세요.</p>
                    <h4 class="mt-5 mb-3 ml-3">사용중인 제품</h4>
                    <div class="p-4 shadow ms-lg-4 rounded" style="background-color:#F2F4F5; min-height:250px; 
                                                                    display: flex; align-items: center;">
                      <!-- 사용중인 제품이 없을 경우 -->
                      <div style="text-align:center; margin:auto;" v-if="myProducts == null">
                        <i class="fas fa-exclamation-circle fa-4x mb-4" style="color:gray;"></i>
                        <h6>사용중인 제품이 없습니다.</h6>
                      </div>
                      <div class="row">
                        <!-- place item-->
                            <div class="col-sm-6 col-lg-4 mb-30px hover-animate" v-for="(product, index) in state.myProducts" :key="index" data-marker-id="59c0c8e33b1527bfe2abaf92">
                                <div class="card h-100 border-0 shadow">
                                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="../../../../public/html/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Modern, Well-Appointed Room"/><a class="tile-link" @click="moveToMyOrder(product.orderNo)"></a>
                                        <div class="card-img-overlay-bottom z-index-20">
                                        </div>
                                        <div class="card-img-overlay-top text-end"></div>
                                    </div>
                                    <div class="card-body d-flex">
                                        <div class="w-100">
                                            <!-- <h6 class="card-title"><a class="text-decoration-none text-dark" href="detail-rooms.html">{{product.productName}}</a></h6>
                                            <h6 class="flex-grow-1 mb-0 text-muted text-sm">{{product.productModel}}</h6> -->
                                            <h6 >{{product.productName}}</h6>
                                            <h6 class="text-muted text-sm">{{product.productModel}}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import { useRoute, useRouter } from 'vue-router';
import MypageSidebar from "./MypageSidebar.vue";

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            myProducts: [],
        });
        const moveToMyOrder = (orderNo) => {
            console.log("orderNo : " + orderNo);
            router.push({
                name: "MyProduct",
                params: {
                    orderNo: orderNo
                }
            });
        };
        // axios.get("/mypage/myproduct/" + route.params.memNo).then(({data}) =>{ /.
        let memNo = 4;
        // memNo 임의 설정 1
        axios.get(`/mypage/myorder/myproducts/${memNo}`).then(({ data }) => {
            state.myProducts = data;
            console.log(" 사용중인 제품 데이터 : " + data);
        }).catch((error) => {
            console.error("API 요청 실패", error);
        });
        return { state, moveToMyOrder };
    },
    components: { MypageSidebar }
}

</script>

<style>

</style>