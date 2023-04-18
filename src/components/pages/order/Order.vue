<template>
    <body>
      <div class="progress rounded-0 sticky-top" style="height: 8px; top: 72px;">
        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <section class="py-5 my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="h2 my-3 text-bold"> 배송 정보 <span class="text-muted float-end">Step 1</span>      </h1>
              <button class="btn btn-link btn-collapse ps-0 h2 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#contractInformation" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="닫기" data-collapsed-text="카드">입력</button>

              <div class="text-block">
              
              </div>
              <!-- <div class="text-block">
                <label class="h5" for="form_guests">Guests</label>
                <p class="text-sm text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in.</p>
                <div class="row">
                  <div class="col-lg-6 mb-3">
                    <select class="selectpicker form-control" name="guests" id="form_guests" data-style="btn-selectpicker" title=" ">
                      <option value="guests_0">1</option>
                      <option value="guests_1">2</option>
                      <option value="guests_2" selected>3</option>
                      <option value="guests_3">4</option>
                      <option value="guests_4">5</option>
                    </select>
                  </div>
                </div>
              </div> -->
              <div class="col-lg-12 ms-auto collapse" id="contractInformation">
                <p></p>
                <label class="h5" for="form_guests">설치/배송주소</label>
                <p class="text-sm text-muted">배송지를 입력해주세요</p>
              
                <!-- Country-->
                <div class="mb-4">
                  <label class="form-label" for="form_country">수취인 이름</label>
                  <input class="form-control" name="name" id="form_street">
                </div>
                <!-- Street-->
                <div class="mb-4">
                  <label class="form-label" for="form_street">수취인 연락처</label>
                  <input class="form-control" name="name" id="form_street">
                </div>
                <!-- City + State-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_city">우편번호</label>
                      <input class="form-control" name="name" id="form_city">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_state">주소</label>
                      <input class="form-control" name="name" id="form_state">
                    </div>
                  </div>
                </div>
                <!-- ZIP Code-->
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label" for="form_zip">상세주소</label>
                      <input class="form-control" name="name" id="form_zip">
                    </div>
                  </div>
                </div>
                <div class="text-block">
                <h5>설치 희망일</h5>
                <ul class="list-unstyled">
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="purpose_0" name="purpose">
                      <label class="form-check-label" for="purpose_0">Personal travel      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="purpose_1" name="purpose">
                      <label class="form-check-label" for="purpose_1">Business travel      </label>
                    </div>
                  </li>
                </ul>
                <p class="text-sm text-muted mb-0">선택하신 설치 일시와 실제 설치 확정일시가 재고 상황 등으로 변동될 수 있습니다.</p>
                <p class="text-sm text-muted mb-0">주문완료 후 알림톡으로 실제 설치 확정일시를 안내 드립니다. 설치일시 조정이 필요하신 경우 고객센터(1588-5200)로 연락 부탁드립니다.</p>
                <p class="text-sm text-muted mb-0">방문하기 전에 담당 방문 기사가 고객님께 연락을 드립니다.</p>
                <p class="text-sm text-muted mb-0">방문 당일 기상악화나 교통 상황에 따라 방문날짜와 시간의 변동이 발생할 수 있습니다.</p>
              
              </div>
              <div class="text-block">
                <div class="d-flex">
                  <div>
                    <h5>배송메모</h5>
                    <p class="text-sm text-muted">배송메모를 입력해주세요</p>
                  </div>
                </div>
                <textarea class="form-control" name="hello" rows="4"></textarea>
              </div>
              </div>

              

              <!--step2-->
              <h1 class="h2 my-3 text-bold"> 결제 정보 <span class="text-muted float-end">Step 2</span>      </h1>
              <button class="btn btn-link btn-collapse ps-0 h2 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#payInformation" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="닫기" data-collapsed-text="카드">입력</button>
              <div class="col-lg-12 ms-auto collapse" id="payInformation">
            <div class="text-block">
              <div class="text-block mb-4">
              <form action="#">
                <div class="d-flex justify-content-between align-items-end mb-4">
                  <h5 class="mb-0">결제 수단 선택</h5>
                  <div class="text-muted"><i class="fab fa-cc-amex fa-2x me-2"> </i><i class="fab fa-cc-visa fa-2x me-2"> </i><i class="fab fa-cc-mastercard fa-2x"></i></div>
                </div>
               
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard" data-expanded-text="닫기" data-collapsed-text="카드">카드</button>
                <div class="row collapse" id="addNewCard">
                   
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="card-name">카드선택</label>
                    <select class="selectpicker form-control mb-3" name="payment" id="form_payment" data-style="btn-selectpicker">
                      <option value="">선택</option>
                      <option value="">BC카드</option>
                      <option value="">삼성카드</option>
                      <option value="">국민카드</option>
                      <option value="">롯데카드</option>
                      <option value="">비자(하나카드포함)</option>
                      <option value="">현대카드</option>
                      <option value="">신한카드</option>
                      <option value="">NH카드</option>
                    </select>
                  </div>
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="card-number">카드번호</label>
                    <input class="form-control" type="text" name="card-number" placeholder="Card number" id="card-number">
                  </div>
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="expiry-date">카드 유효기간</label>
                    <input class="form-control" type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date">
                  </div>
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="cvv">카드소유주</label>
                    <input class="form-control" type="text" name="cvv" placeholder="" id="cvv">
                  </div>
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="zip">생년월일</label>
                    <input class="form-control" type="text" name="zip" placeholder="" id="zip">
                  </div>

                  
                </div>
              </form>

              <form action="#">
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addBankCard" aria-expanded="false" aria-controls="addBankCard" data-expanded-text="닫기" data-collapsed-text="계좌">계좌</button>
                <div class="row collapse" id="addBankCard">
                   
                  <div class="mb-4 col-md-6">
                    <label class="form-label" for="card-name">은행명</label>
                    <select class="selectpicker form-control mb-3" name="payment" id="form_payment" data-style="btn-selectpicker">
                      <option value="">선택</option>
                      <option value="">산업은행</option>
                      <option value="">기업은행</option>
                      <option value="">국민은행</option>
                      <option value="">외환은행</option>
                      <option value="">수협중앙회</option>
                      <option value="">유안타증권</option>
                      <option value="">농협중앙회</option>
                      <option value="">지역농협(12)</option>
                      <option value="">현대증권</option>
                      <option value="">우리은행</option>
                      <option value="">제일은행</option>
                      <option value="">한국시티은행</option>
                      <option value="">대구은행</option>
                      <option value="">부산은행</option>
                      <option value="">광주은행</option>
                      <option value="">제주은행</option>
                      <option value="">전북은행</option>
                      <option value="">대우은행</option>
                      <option value="">경남은행</option>
                    </select>
                  </div>
                 
                  <div class="mb-4 col-md-12">
                    <label class="form-label" for="expiry-date">계좌번호</label>
                    <input class="form-control" type="text" name="expiry-date" placeholder="계좌번호를 입력해 주세요." id="expiry-date">
                  </div>
                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="cvv">계좌소유주</label>
                    <input class="form-control" type="text" name="cvv" placeholder="" id="cvv">
                  </div>
                  <div class="mb-4 col-md-4">
                    <label class="form-label" for="zip">생년월일</label>
                    <input class="form-control" type="text" name="zip" placeholder="" id="zip">
                  </div>
                </div>
              </form>

              <!-- <form action="#">
                <button class="btn btn-link btn-collapse ps-0 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#addKakao" aria-expanded="false" aria-controls="addKakao" data-expanded-text="닫기" data-collapsed-text="카카오페이">카카오페이</button>
                <div class="row collapse" id="addKakao">
       
                 
                  <div class="mb-4 col-md-12">
                    <label class="form-label" for="expiry-date">카카오페이</label>
                  </div>

                </div>
              </form> -->
              </div>

            <div class="text-block">
              <h5>Cancel policy</h5>
              <br>
              <p class="text-sm text-muted">계약자 명의의 납부 정보를 등록하셔야 합니다.</p>
              <p class="text-sm text-muted">계약자와 납부자가 상이한 경우, 계약자는 미납, 연체 등에 더욱 주의하셔야 합니다.</p>
              <br>
              <p class="text-sm text-muted">카카오페이/네이버페이로 제휴카드 등록 후 렌탈료 납부시에도 카드혜택은 동일하게 적용됩니다.</p>
              <p class="text-sm text-muted">(단, MetaWater 우리카드는 네이버페이 간편결제 등록시 제휴혜택이 제공되지 않습니다.</p>
            </div>
          </div>
          
          <div class="row form-block flex-column flex-sm-row">
                <!-- <div class="col text-center text-sm-start"><a class="btn btn-link text-muted" href="user-booking-1.html"> <i class="fa-chevron-left fa me-2"></i>이전</a>
                </div> -->
                <div class="col text-center text-sm-end"><a class="btn btn-primary px-3" href="user-booking-3.html"> 다음<i class="fa-chevron-right fa ms-2"></i></a></div>
          </div>
          </div>

            <div class="text-block">
              </div>
            </div>

            <div class="col-lg-5 ps-xl-5">
              <div class="card border-0 shadow">
                <div class="card-body p-4">
                  <div class="text pb-3">
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="col-lg-12 col-6 px-1 mb-2"><img class="img-fluid" v-bind:src="product.imgUrl"></div>
                        <h4><strong>{{product.productName}}</strong></h4><br>
                        <h4 class="text-sm">모델명 {{ product.productModel }}</h4>
                        <h4 class="text-sm"><strong>구매</strong> | {{ product.productFunction}} | {{ product.productColor }}</h4>
                      </div>
                      <div class="flex-shrink-0" href="detail-rooms.html"><img class="ms-3 rounded" src="img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100"></div>
                    </div>
                  </div>
                  <div class="text-block pt-3 pb-0">
                    <table class="w-100">
                      <tfoot>
                        <tr class="border-top">
                          <th class="pt-3"><h4>구매금액</h4></th>
                          <td class="fw-bold text-end pt-3 text-primary h4 pr-2">{{ product.productPrice.toLocaleString() }} 원</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div class="card-footer bg-primary-light py-4 border-0">
                  <div class="d-flex align-items-center">
                    <div>
                      <h6 class="text-primary">배송 전 [주문완료] 상태까지 취소가 가능합니다.</h6>
                      <p class="text-sm text-primary opacity-8 mb-0">You can cancel up to the [Order Complete] status before shipping.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          </div>
        </div>
      </section>
    </body>
</template>

<script>
import axios from 'axios';
import { ref, onMounted, mounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const product = ref({
      productName: '',
      productModel: '',
      productFunction: '',
      productPrice: 0,
      productRentalPrice: 0,
    });

    // const productNo = route.params.pno;
    const productNo = route.query.pno;
    console.log("productNo : " +productNo);

    const getProduct = async() => {
      console.log("해당 상품 받아와??");
      console.log("상품 번호: "+productNo);
      const res = await axios.get('/product/' +productNo);
      product.value = {...res.data};
      
      console.log(product.value);
    }

    onMounted(() => {
      getProduct();
    });

  return {
    route,
    router,
    product,
  }

  }

}
</script>

<style>

</style>