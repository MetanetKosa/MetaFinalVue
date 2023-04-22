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
                


              <div class="col-lg-7 mb-5 mb-lg-0">
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>회원 정보 관리</h5>
                </div>
                <div class="col-sm-3 text-end">
                  <button class="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#personalDetails" aria-expanded="false" aria-controls="personalDetails">Update</button>
                </div>
              </div>
              <p class="text-sm text-muted"><i class="fa fa-id-card fa-fw me-2"></i>John Doe<br><i class="fa fa-birthday-cake fa-fw me-2"></i>06/22/1980<br><i class="fa fa-envelope-open fa-fw me-2"></i>john.doe@directory.com  <span class="mx-2"> | </span>  <i class="fa fa-phone fa-fw me-2"></i>+42055544466</p>
              <div class="collapse" id="personalDetails">
                <form action="#">
                  <div class="row pt-4">
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="name">이름</label>
                      <input class="form-control" type="text" name="name" id="name" value="">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="phone">전화번호</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="+42055544466">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="email">이메일</label>
                      <input class="form-control" type="email" name="email" id="email" value="john.doe@directory.com">
                    </div>
                  </div>
                  <button class="btn btn-outline-primary mb-4" type="submit">변경사항 저장</button>
                </form>
              </div>
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>계정삭제</h5>
                </div>
                <div class="col-sm-3 text-end">
                  <button class="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#address" aria-expanded="false" aria-controls="address">Change</button>
                </div>
              </div>
              <div class="d-flex text-sm text-muted"> <i class="fa fa-address-book fa-fw flex-shrink-0 me-2"></i>
                <div class="mt-n1">삭제 된 계정은 복원 할 수 없습니다!! 귀하의 계정은 시스템에서 영구적으로 삭제됩니다. 다시 한 번 생각해주세요</div>
              </div>
              <div class="collapse" id="address">
                <form action="#">
                  <div class="row pt-4">
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="street">Street</label>
                      <input class="form-control" type="text" name="street" id="street" value="123 Main St.">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="apt">Apt. (optional)</label>
                      <input class="form-control" type="text" name="apt" id="apt" value="Apt #7">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="city">City</label>
                      <input class="form-control" type="text" name="city" id="city" value="San Francisco">
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="state">State</label>
                      <select class="selectpicker form-control" name="state" id="state" data-style="btn-selectpicker">
                        <option value="state_0">Alabama    </option>
                        <option value="state_1">Alaska    </option>
                        <option value="state_2">Arizona    </option>
                        <option value="state_3">Arkansas    </option>
                        <option value="state_4" selected>California    </option>
                        
                        <option value="state_47">West Virginia    </option>
                        <option value="state_48">Wisconsin    </option>
                        <option value="state_49">Wyoming    </option>
                      </select>
                    </div>
                    <div class="mb-4 col-md-6">
                      <label class="form-label" for="zip">보안 상의 이유로 현재 비밀번호가 필요합니다</label>
                      <input class="form-control" type="text" name="zip" id="zip" value="902 10">
                    </div>
                  </div>
                  <button class="btn btn-outline-primary">회원 탈퇴</button>
                </form>
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

    const id = sessionStorage.getItem("memId");
    const memName = reactive('');
    const memPhone = reactive('');
    const memEmail = reactive('');



    const checkAuth = () =>{
                        console.log("결과확인----======---- id "+ id);  
                        axios.get(`/auth/members/${id}`).then((response) => {
                            memName.value = response.data.memName;
                            memPhone.value = response.data.memName;
                            memEmail.value = response.data.memEmail;
                            console.log("============="+ (response.data.memPw));
                            console.log("============="+ (response.data.memName));
                            console.log("============="+ (response.data.memPhone));
                            console.log("============="+ (response.data.memEmail));
                           
                        });
                    }
                    checkAuth();

                    console.log("=====유r값확인====="+memName.value);
                    console.log("=====유r값확인====="+memPhone.value);
                    console.log("=====유r값확인====="+memEmail.value);


    return {
        id,
        memName,
        memPhone,
        memEmail
    };
  }
}

</script>

<style>

</style>