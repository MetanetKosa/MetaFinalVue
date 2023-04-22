<template>
  <body>
      <div class="container py-5">
        <div class="row">
              <div class="col-lg-3 me-lg-auto">
                <MypageSidebar></MypageSidebar>
              </div>
              <div class="col-lg-9 ps-lg-5 mt-5">
                <div class> 
                  <div class="text-block">
                    <h1 class>주문내역</h1>
                    <h6 class="mb-5 ml-3 text-muted">주문 내역입니다.</h6>
                    <div class="p-4 shadow ms-lg-4 rounded"  v-if="state.myOrders == null" style="background-color:#F2F4F5; min-height:450px; 
                                                                    display: flex; align-items: center;">
                      <div style="text-align:center; margin:auto;">
                        <i class="fas fa-exclamation-circle fa-4x mb-4" style="color:gray;"></i>
                        <h6>주문 내역이 존재하지 않습니다.</h6>
                      </div>
                    </div>
                    <div class="p-4 shadow ms-lg-4 rounded"  v-if="state.myOrders != null" style="background-color:#F2F4F5; min-height:250px; 
                                                                    align-items: center;">
                      <div class="d-flex p-3 row text-block" v-for="(order, index) in state.myOrders" :key="index" style="position: relative;">
                        <div class="col-3">
                          <img class="img-fluid" v-bind:src="state.products[index].imgUrl">
                        </div>
                        <div class="col-9" id="orderContent">
                          <h5 class="mt-3">{{ state.products[index].productName }}</h5>
                          <h6>{{ state.products[index].productModel }}</h6>
                          <h6>주문상태 : {{ order.orderState }}</h6>
                          <h6>결제수단 : {{ order.orderPay }}</h6>
                          <h6>주문일 : {{ new Date(order.orderDate).toLocaleDateString() }}</h6>
                          <!-- <h6>{{ order.orderNo }}</h6>
                          <h6>{{ order.productNo }}</h6> -->
                          <div v-if="state.products[index]">
                          </div>
                          <input type="hidden" v-model="productNo">
                          <div v-if="state.products[index]"> 
                          <div v-if="order.orderState === '주문 완료'">
                          <button class="btn btn-secondary btn-sm" id="orderCancelButton" @click="orderCancel(order.orderNo)">
                            주문취소
                          </button>
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
          <div v-if="showModal" class="modal">
                    <div class="modal-content">
                        <span class="close" @click="showModal = false">&times;</span>
                        <h3>정말 취소하시겠습니까?</h3>
                        <div style="text-align:center;"><button @click="showModal = false, cancelAlert">취소하기</button></div>
                    </div>
                  </div>
  </body>
  
  </template>
  
  <script>
  import axios from "axios";
  import {reactive} from "vue";
  import MypageSidebar from "./MypageSidebar.vue";
  import Swal from "sweetalert2";

  export default {
    data(){
      return{
        showModal: false,
        order: {
          productNo: ''
        }
    }
    },
  
    // orderNo에 따른 productNo, Product 정보를 가져오기 위함
    mounted(){
      axios.get(`/product/products/${this.order.productNo}`)
      .then(response => {
        console.log("받은 값 : " + response.data);
        this.state.products = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    },
    setup(){
      const state = reactive({
        myOrders: [],
        products: [],
      })
  
      // let  memNo = 4;
      const memNo = sessionStorage.getItem('memNo');
        console.log("sessionStorage에서 가져온 값 : " + memNo);
           // memNo 임의 설정 1
      axios.get(`/mypage/myorder/${memNo}`).then(({data}) =>{
        state.myOrders = data;
        console.log(" 데이터값 " + data);
      }).catch((error) => {
          console.error("API 요청 실패", error);
      });
  
      
  
      
    return {state};
  },
  methods: {
    async orderCancel(orderNo){
      try{
        const res = await axios.delete(`mypage/myorder/${orderNo}`);
        console.dir(res.status);
        this.deleteOrderResponseHandler(res);
      }catch(err){
        console.error(err);
      }
      },
      deleteOrderResponseHandler(res){
        if(res.status === 200){ // 응답이 정상이라면 Modal 나옴
            Swal.fire({
              icon: 'success',
                  title: '주문취소가 되었습니다.'
            }).then(()=> {
              window.location.href = '/myproduct'
            })
          console.log("주문 취소 성공하였어요.", res.data.error);
        }else{
          this.showModal = false;
          console.log("주문 취소 실패하였어요.", res.data.error);
        }
    // orderCancel(orderNo){
    //   axios.delete(`mypage/myorder/${orderNo}`)
    //   .then(response => {
    //     console.log(response.date);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
    // }
  },
  async cancelAlert(){
    Swal.fire({
            icon: 'success',
                title: '주문취소가 되었습니다.'
          }).then(()=> {
            window.location.href = '/myproduct'
          })
  }
  }
  // methods: {
  //   async orderCancel(orderNo){
  //     try{
  //       const res = await axios.delete(`mypage/myorder/${orderNo}`);
  //       console.dir(res.status);
  //       this.deleteOrderResponseHandler(res);
  //     }catch(err){
  //       console.error(err);
  //     }
  //     },
  //     deleteOrderResponseHandler(res){
  //       if(res.status === 200){ // 응답이 정상이라면 Modal 나옴
  //         this.showModal = true;
  //       }else{
  //         this.showModal = false;
  //         console.log("실패하였어요.", res.data.error);
  //       }
  //   // orderCancel(orderNo){
  //   //   axios.delete(`mypage/myorder/${orderNo}`)
  //   //   .then(response => {
  //   //     console.log(response.date);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   })
  //   // }
  // },
  // }
,
  components: { MypageSidebar }
}
  </script>
  
  <style>
  #orderCancelButton{
    position: absolute;
    top: 0%;
    right: 0%;
  }
  
  #orderContent{
    position: relative;
  }
  </style>