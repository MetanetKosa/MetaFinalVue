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
            <h1>사용 중인 제품</h1>
            <div class="p-4 shadow ms-lg-4 rounded">
              <div class="d-flex p-3 row">
                <div class="col-2">
                  <img class="img-fluid" src="/../../../../html/img/photo/sample1.PNG">
                </div>
                <div class="col-10">
                  <h6>품번</h6>
                  <h6>품명</h6>
                </div>
              </div>
            </div>
            <div class="p-4 ms-lg-4 rounded d-flex">
              <button class="btn btn-primary mx-2 p-3"><i class="fas fa-wrench"></i>&nbsp;A/S 신청&nbsp;<i class="fas fa-angle-right"></i></button>
              <button class="btn btn-primary mx-2"><i class="fas fa-won-sign"></i>&nbsp;납부 방법 변경&nbsp;<i class="fas fa-angle-right"></i></button>
              <button class="btn btn-primary mx-2"><i class="fas fa-info"></i>&nbsp;제품 사용 신청서&nbsp;<i class="fas fa-angle-right"></i></button>
            </div>
          </div>
          <div class="text-block">
            <h4>계약정보</h4>
            <p class="subtitle text-sm text-primary mb-4 p-0 mt-0">렌탈요금제</p>
            <div class="row"> 
              <div class="col-md-1">
              </div>
              <div class="col-md-4">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><span class="text-sm">약정기간</span></li>
                  <li class="mb-2"><span class="text-sm">의무사용기간</span></li>
                  <li class="mb-2"><span class="text-sm">소유권 도래일</span></li>
                  <li class="mb-2"><span class="text-sm">설치주소</span></li>
                  <li class="mb-2"><span class="text-sm">설치처 연락처</span></li>
                  <li class="mb-2"><span class="text-sm">설치일</span></li>
                </ul>
              </div>
              <div class="col-md-7">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><span class="text-sm">2022.08.18 ~ 2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">2022.08.18 ~ 2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">서울시 송파구</span></li>
                  <li class="mb-2"><span class="text-sm">010-1234-1234</span></li>
                  <li class="mb-2"><span class="text-sm">2022.08.18</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-block">
            <h4 class="mb-4">납부정보</h4>
            <div class="row"> 
              <div class="col-md-1">
              </div>
              <div class="col-md-4">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><span class="text-sm">결제수단</span></li>
                  <li class="mb-2"><span class="text-sm">청구일자</span></li>
                  <li class="mb-2"><span class="text-sm">청구금액</span></li>
                </ul>
              </div>
              <div class="col-md-7">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2"><span class="text-sm">2022.08.18 ~ 2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">2022.08.18 ~ 2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">2028.08.18</span></li>
                  <li class="mb-2"><span class="text-sm">서울시 송파구</span></li>
                  <li class="mb-2"><span class="text-sm">010-1234-1234</span></li>
                  <li class="mb-2"><span class="text-sm">2022.08.18</span></li>
                </ul>
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
export default {

}
</script>

<style>

</style>