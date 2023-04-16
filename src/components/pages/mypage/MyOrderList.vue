<template>
<body>
    <div class="container py-5">
      <div class="row">
            <div class="col-lg-3 me-lg-auto">
                <div class="card border-0 mb-6 mb-lg-0">
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
            <div class="col-lg-9 ps-lg-5 mt-5">
        <div class> 
          <div class="text-block">
            <h1>주문내역</h1>
            <div class="p-4 shadow ms-lg-4 rounded" style="background-color:gainsboro;">
              <div class="d-flex p-3 row text-block" v-for="(order, index) in state.myOrders" :key="index">
                <div class="col-2">
                  <img class="img-fluid" src="/../../../../html/img/photo/sample1.PNG">
                </div>
                <div class="col-10">
                  <h6>{{ order.orderNo }}</h6>
                  <h6>{{ order.productNo }}</h6>
                </div>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
</body>

</template>

<script>
import axios from "axios";
import {reactive} from "vue";

export default {

  setup(){
    const state = reactive({
      myOrders: []
    })

    let  memNo = 1;
         // memNo 임의 설정 1
    axios.get(`/mypage/myorder/${memNo}`).then(({data}) =>{
      state.myOrders = data;
      console.log(" 데이터값 " + data);
    }).catch((error) => {
        console.error("API 요청 실패", error);
    });
    return {state};
  }
}
</script>

<style>

</style>