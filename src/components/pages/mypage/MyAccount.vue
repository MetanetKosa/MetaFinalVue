<template>
    <section class="py-5 mt-6">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 me-lg-auto" style="text-align:left">
                <div class="mb-6 mb-lg-0">
                    <div class="card-body pl-lg-5 p-md-0">
                        <div class="list-group list-group-flush rounded-0 text-sm my-5">
                            <h6>제품관리</h6>
                            <a class="mypage-menu list-group list-group-item-action" href="knowlssedge-base-topic.html">
                                내 정수기 관리하기
                            </a>
                            <a class="mypage-menu list-group list-group-item-action" href="knowlssedge-base-topic.html">
                                AS 신청 내역
                            </a>
                            <a class="mypage-menu list-group list-group-item-action" href="knowlssedge-base-topic.html">
                                나의 포인트
                            </a>
                            <a class="mypage-menu list-group list-group-item-action" href="/useProduct">
                                사용중인 제품(임시)
                            </a>
                        </div>
                        <div class="list-group list-group-flush rounded-0 text-sm my-5">

                                <h6>결제관리</h6>
                            <a class="mypage-menu list-group list-group-item-action text-muted" href="knowlssedge-base-topic.html">
                               납부 내역</a>
                            <a class="mypage-menu list-group-list list-group-item-action text-muted" href="knowledge-base-topic.html">
                               납부 방법 변경</a>
                        </div>
                        <div class="list-group list-group-flush rounded-0 text-sm my-5">

                                <h6>쇼핑관리</h6>
                            <a class="mypage-menu list-group list-group-item-action text-muted" href="knowlssedge-base-topic.html">
                               주문 내역</a>
                            <a class="mypage-menu list-group-list list-group-item-action text-muted" href="knowledge-base-topic.html">
                                주문취소/반납/해지 내역</a>
                        </div>
                        <div class="list-group list-group-flush rounded-0 text-sm my-5">

                                <h6>활동관리</h6>
                            <a class="mypage-menu list-group list-group-item-action text-muted" href="knowlssedge-base-topic.html">
                               나의 리뷰</a>
                            <a class="mypage-menu list-group-list list-group-item-action text-muted" href="knowledge-base-topic.html">
                               1:1 문의 내역</a>
                            <a class="mypage-menu list-group-list list-group-item-action text-muted" href="knowledge-base-topic.html">
                               제품 문의 내역</a>
                        </div>
                        <div class="list-group list-group-flush rounded-0 text-sm my-5">

                                <h6>정보관리</h6>
                            <a class="mypage-menu list-group list-group-item-action text-muted" href="knowlssedge-base-topic.html">
                               회원 정보 관리</a>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 ps-lg-5" style="text-align:left">
                <h1 class="hero-heading mb-0">정세은님,</h1>
                <h1 class="hero-heading mb-0">안녕하세요!</h1>
                <div class="text-block">
                    <p class="mt-2 text-muted">내게 맞는 제품관리 서비스와 활동 내역을 확인하세요.</p>
                </div>
                <div class="text-block">
                    <h4 class="mb-5">사용중인 제품</h4>
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

                <div class="text-block">
                    <h4 class="mb-5">고객지원 서비스</h4>
                    <div class="row">
                        <!-- place item-->
                        <div class="col-sm-6 col-lg-4 mb-30px hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                            <div class="card h-100 border-0 shadow">
                                <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="../../../../public/html/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Modern, Well-Appointed Room"/><a class="tile-link" href="detail-rooms.html"></a>
                                    <div class="card-img-overlay-bottom z-index-20">
                                    </div>
                                    <div class="card-img-overlay-top text-end"></div>
                                </div>
                                <div class="card-body d-flex align-items-center">
                                    <div class="w-100">
                                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="detail-rooms.html">아이콘 정수기 2</a></h6>
                                        <div class="d-flex card-subtitle mb-3">
                                            <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                                            <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                                            </p>
                                        </div>
                                        <p class="card-text text-muted"><span class="h4 text-primary">$80</span> per night</p>
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

export default {

   setup(){
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      myProducts: [],
    });

    const confirm = () => {
        const id = sessionStorage.getItem('id');
        console.log("id값 확인 : "  + id);
        
    }
    confirm();

   
    // const moveToMyOrder = (orderNo) => {
    //   console.log("orderNo : " + orderNo);
    //   router.push({
    //     name: 'MyProduct',
    //     params: {
    //         orderNo: orderNo
    //     }
    //   });
    // };


    // axios.get("/mypage/myproduct/" + route.params.memNo).then(({data}) =>{ /.
    
    let  memNo = 1;
         // memNo 임의 설정 1
    // axios.get(`/mypage/myorder/myproducts/${memNo}`).then(({data}) =>{
    //   state.myProducts = data;
    //   console.log(" 사용중인 제품 데이터 : " + data);
    // }).catch((error) => {
    //     console.error("API 요청 실패", error);
    // });
    return {state};
  }
}

</script>

<style>

</style>