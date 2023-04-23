<template>orderDetail
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>주문관리</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">구매 목록</a></li>
                  <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">렌탈 목록</a></li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <!-- Post -->
                    <div class="post">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">주문유형</th>
                                    <th class="text-center">주문일시</th>
                                    <th class="text-center">주문상품</th>
                                    <th class="text-center">주문자</th>
                                    <th class="text-center">주문금액</th>
                                    <th class="text-center">주문관리</th>
                                </tr>
                            </thead>
                            <tbody>                                                      
                                <tr v-for ="(order,index) in orders" :key="index">                                                                         
                                        <td class="text-center">구매</td>
                                        <td class="text-center" >{{new Date(order.orderDate).toLocaleDateString()}}</td>
                                        <td class="text-center">{{order.product.productName}}</td>                    
                                        <td class="text-center">{{order.orderName}}</td>
                                        <td class="text-center">{{order.product.productPrice}}</td>
                                        <td class="text-center">
                                            <!-- <button type="button" class="btn btn-default" @click="showModal = true; orderDetail(order.orderNo)"> -->
                                                 <button type="button" class="btn btn-default" @click="orderDetail(order.orderNo)">
                                                상세
                                            </button>
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="timeline">
                    <div class="post" style="font-size: 16px; width: 100%;">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">주문일시</th>
                                    <th class="text-center">주문상품</th>
                                    <th class="text-center">주문자</th>
                                    <th class="text-center">계약기간</th>
                                     <th class="text-center">렌탈 관리</th>

                                </tr>
                            </thead>
                            <tbody>                                                                                                                            
                                <tr  v-for ="(rental,index) in rentals" :key="index">                                                      
                                    <th class="text-center">{{new Date(rental.orderDate).toLocaleDateString()}}</th>
                                    <td class="text-center">{{rental.product.productName}}</td>
                                    <td class="text-center">{{rental.orderName}}</td>                    
                                    <td class="text-center">{{rental.rentalTerm}}년</td>
                                     <td class="text-center">
                                        <button type="button" class="btn btn-default" @click="orderRentalDetail(rental.orderNo)">
                                                상세
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

        
    </section>
    <div v-if="showOrderlModal" class="modal" :id="order-modal">
          <div class="cancel-modal-content card border-primary mb-3" style="width:50%;">
              <span class="close" @click="showOrderlModal = false">&times;</span>
              <div class="card-header">
                <h3 class="card-title text-bold">주문 상세정보</h3>
              </div>
              <div class="card-body row align-items-center">
                 <p>주문번호 : {{order.orderNo}} </p>
                <h6>주문일시 : {{new Date(order.orderDate).toLocaleDateString()}} </h6>
                <table class="table table-bordered" >
                    <thead>
                        <tr>
                            <th class="text-center">주문상품</th>
                            <th class="text-center">구매가</th>
                            <th class="text-center">상태</th>
                            <th class="text-center">결제수단</th>          
                        </tr>
                    </thead>
                    <tbody>
                        <tr >                                          
                            <td class="text-center">{{order.product.productName}}</td>
                            <td class="text-center">{{order.product.productPrice}}</td>                    
                            <td class="text-center">
                                <select class="form-select" v-model="order.orderState" >
                                    <option value="주문완료">주문완료</option>
                                    <option value="배송 중">배송 중</option>
                                    <option value="배송 중">배송 완료</option>
                                    <option value="설치 완료">설치 완료</option>
                                    <option value="취소">취소</option>
                                    <option value="반납">반납</option>
                                </select>
                            </td>
                             <td class="text-center">{{order.orderPay}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class = "order-info">
                <h5><strong>주문 정보</strong></h5>
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th class="text-center">수취인</th>
                            <td class="text-center">{{order.orderName}}</td>  
                            <th class="text-center">수취인 연락처</th>
                            <td class="text-center">{{order.orderPhone}}</td>                                                                                                                                
                        </tr>
                        <tr>
                             <th class="text-center" >설치희망일</th>
                             <td class="text-center" colspan="3">{{new Date(order.deliveryDate).toLocaleDateString()}}</td>                                                                                                                            
                         </tr>
                        <tr>
                              <th class="text-center">설치희망시간</th>
                              <td class="text-center" colspan="3">{{order.deliveryTime}}</td>                                                                                                                            
                         </tr>
                          <tr>
                              <th class="text-center">설치주소</th>
                              <td class="text-center" colspan="3">{{order.orderAddress}}-{{order.orderAddDetail}}</td>                                                                                                                            
                         </tr>
                          <tr>
                              <th class="text-center">설치우편번호</th>
                              <td class="text-center" colspan="3">{{order.orderAddNumber}}</td>                                                                                                                            
                         </tr>
                        </thead>
                         <tbody>
                        </tbody>
                     </table>
                    </div>
                        <div class="modal-footer justify-content-between" >
                            <button type="button" class="btn btn-default" @click ="showOrderlModal = false">닫기</button>
                            <button type="button" class="btn btn-primary" @click="onSaveAndUpdateModal(order.orderNo)"   >저장</button>
                        </div>
                    </div>                              
                </div>
          </div>


     <!-- 렌탈 상세      -->
      <div v-if="showRentalModel" class="modal" id="rental-modal">
          <div class="cancel-modal-content card border-primary mb-3" style="width:55%;">
              <span class="close" @click="showRentalModel = false">&times;</span>
              <div class="card-header">
                <h3 class="card-title text-bold">주문 상세정보</h3>
              </div>
              <div class="card-body row align-items-center">
                 <p>주문번호 : {{rental.orderNo}} </p>
                <h6>주문일시 : {{new Date(rental.orderDate).toLocaleDateString()}} </h6>
                <table class="table table-bordered" >
                    <thead>
                        <tr>
                            <th class="text-center">주문상품</th>
                            <th class="text-center">월 렌탈료</th>
                            <th class="text-center">계약기간</th>
                            <th class="text-center">상태</th>
                            <th class="text-center">결제수단</th>          
                        </tr>
                    </thead>
                    <tbody>
                        <tr >                                          
                            <td class="text-center">{{rental.product.productName}}</td>
                            <td class="text-center">{{rental.product.productRentalPrice}}원</td>   
                            <td class="text-center">{{rental.rentalTerm}}년</td>                                              
                            <td class="text-center">
                                <select class="form-select" v-model="rental.orderState" >
                                    <option value="" disabled selected></option>
                                    <option value="주문완료">주문완료</option>
                                    <option value="배송 중">배송 중</option>
                                    <option value="배송 중">배송 완료</option>
                                    <option value="설치 완료">설치 완료</option>
                                    <option value="취소">취소</option>
                                    <option value="반납">반납</option>
                                </select>
                            </td>
                             <td class="text-center">{{rental.orderPay}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class = "order-info">
                <h5><strong>주문 정보</strong></h5>
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th class="text-center">수취인</th>
                            <td class="text-center">{{rental.orderName}}</td>  
                            <th class="text-center">수취인 연락처</th>
                            <td class="text-center">{{rental.orderPhone}}</td>                                                                                                                                
                        </tr>
                        <tr>
                             <th class="text-center" >설치희망일</th>
                             <td class="text-center" colspan="3">{{new Date(rental.deliveryDate).toLocaleDateString()}}</td>                                                                                                                            
                         </tr>
                        <tr>
                              <th class="text-center">설치희망시간</th>
                              <td class="text-center" colspan="3">{{rental.deliveryTime}}</td>                                                                                                                            
                         </tr>
                          <tr>
                              <th class="text-center">설치주소</th>
                              <td class="text-center" colspan="3">{{rental.orderAddress}}-{{rental.orderAddDetail}}</td>                                                                                                                            
                         </tr>
                          <tr>
                              <th class="text-center">설치우편번호</th>
                              <td class="text-center" colspan="3">{{rental.orderAddNumber}}</td>                                                                                                                            
                         </tr>
                        </thead>
                         <tbody>
                        </tbody>
                     </table>
                    </div>
                        <div class="modal-footer justify-content-between" >
                            <button type="button" class="btn btn-default" @click ="showRentalModel = false">닫기</button>
                            <button type="button" class="btn btn-primary" @click="onRentalUpdateModal(rental.orderNo)"   >저장</button>
                        </div>
                    </div>                              
                </div>
          </div>
    </div>
  
  <aside class="control-sidebar control-sidebar-dark">

  </aside>




</template>

<script>
import axios from "axios";
import {ref} from 'vue';

export default {

    props: {
    orders: Object,
    rentals: Object
    },

   setup() {
        const order = ref(null);
        const rental = ref(null);
        const showModal = ref(false);
        const originalOrder = ref(null);
        const showOrderlModal = ref(false);
        const showRentalModel = ref(false);
         const originalRental = ref(null);


        const orderDetail = (orderNo) => {
            axios.get(`/admin/orders/${orderNo}`).then(({ data }) => {
                order.value = { ...data };
                showOrderlModal.value = true;
            });
        };


        const orderRentalDetail = (renNo)  => {    
              axios.get(`/admin/orders/${renNo}`).then(({ data }) => {
                rental.value = { ...data };
                console.log(rental);
                 showRentalModel.value = true;
            });
        };

        const onSaveAndUpdateModal = async (orderNo) => {
            await onSave(orderNo);
            showOrderlModal.value = false;
            };

        const onRentalUpdateModal = async(renNo) => {
             await onRentalSave(renNo);
            showRentalModel.value = false;
        }

         const onSave = async(orderNo) =>{
             const orderState = order.value.orderState;      
                const res = await axios.patch(`/admin/orders/${orderNo}`,{
                    orderState,
            });
            originalOrder.value = {...res.data};
            
            }

             const onRentalSave = async(renNo) =>{
             const orderState = rental.value.orderState;      
                const res = await axios.patch(`/admin/orders/${renNo}`,{
                    orderState,
            });
            originalRental.value = {...res.data};
            
            }
   




        return {
            orderRentalDetail,
            onSaveAndUpdateModal,
            onSave,
            orderDetail,
            order,
            rental,
            showModal,
            showOrderlModal,
            showRentalModel,
            onRentalUpdateModal,
            originalRental
        }
    }
}


</script>

<style>

.order-info {
  margin-top: 2em; /* 주문 정보 위에 2em의 여백 추가 */
}
.cancel-modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 40px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 80%;
    position: relative; /* close 버튼과의 위치 조정을 위해 */
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    position: relative; /* close 버튼과의 위치 조정을 위해 */
  }









</style>