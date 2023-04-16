<template>
    <body>
  
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block">
              <div class="row gallery mb-3 ms-n1 me-n1">

                <!-- 이미지 URL -->
                <div class="col-lg-12 col-6 px-1 mb-2"><img class="img-fluid" v-bind:src="detailProduct.imgUrl"></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1512917774080-9991f1c4c750.jpg" data-fancybox="gallery" title="Outside"><img class="img-fluid" src="/../../../../html/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img class="img-fluid" src="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" data-fancybox="gallery" title="Rear entrance"><img class="img-fluid" src="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" alt="..."></a></div>
                <!-- <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1484154218962-a197022b5858.jpg" data-fancybox="gallery" title="Kitchen"><img class="img-fluid" src="img/photo/photo-1484154218962-a197022b5858.jpg" alt="..."></a></div> -->
                <!-- <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1522771739844-6a9f6d5f14af.jpg" data-fancybox="gallery" title="Bedroom"><img class="img-fluid" src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..."></a></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1488805990569-3c9e1d76d51c.jpg" data-fancybox="gallery" title="Bedroom"><img class="img-fluid" src="img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..."></a></div> -->
              </div>
            </div>   

            
          </div>

          <!-- 상품 상세 -->
          <div class="col-lg-5">
            <div class="p-4 shadow ms-lg-4 rounded sticky-top" style="top: 200px;">
              <p  class="text-primary">New 프로모션 진행중</p>
              <br>
              <p class><span class="text h1">{{detailProduct.productName}}</span></p>
              <br>
              <p  class="text-muted">모델명 | {{detailProduct.productModel}}</p>
              <p  class="text-muted"> 기능  | {{detailProduct.productFunction}}</p>
              <hr class="my-4">
              <form class="form" id="booking-form" method="get" action="#" autocomplete="off">
                <div class="mb-4">
                  <label class="form-label" for="orderType">렌탈/구매 *</label>
                  <select class="form-control" name="orderType" id="orderType">
                    <option value="1">렌탈</option>
                    <option value="2">구매</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="contractLength">약정기간 *</label>
                  <select class="form-control" name="contractLength" id="contractLength">
                    <option value="1">3년</option>
                    <option value="2">6년</option>
                  </select>
                </div>
                <hr class="my-4">
                <div class="mb-4" style="text-align: right;" id="purchasePrice">
                  <label class="form-label h5">구매금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3">{{ detailProduct.productPrice.toLocaleString() }}원</strong>
                </div>
                <div class="mb-4" style="text-align: right;" id="rentalPrice">
                  <label class="form-label h5" name="orderPrice">렌탈금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3"> 월 {{ detailProduct.productRentalPrice.toLocaleString() }}원</strong>
                </div>
                <!-- <div class="mb-4" style="text-align: right;" name="rentalPrice">
                  <label class="form-label h5">구매금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3">{{ detailProduct.productPrice.toLocaleString() }}원</strong>
                </div>
                <div class="mb-4" style="text-align: right;">
                  <label class="form-label h5" name="orderPrice">렌탈금액</label> &nbsp;&nbsp;
                  <strong class="text-primary h3"> 월 {{ detailProduct.productRentalPrice.toLocaleString() }}원</strong>
                </div> -->
                <div class="d-grid mb-4">
                  <button class="btn btn-primary" type="submit">주문하기</button>
                </div>
              </form>
<!-- 
              <p class="text-muted text-sm text-center">Some additional text can be also placed here.</p>
              <hr class="my-4">
              <div class="text-center">
                <p> <a class="text-secondary text-sm" href="#"> <i class="fa fa-heart"></i> Bookmark This Listing</a></p>
                <p class="text-muted text-sm">79 people bookmarked this place </p>
              </div>
               -->
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 bg-gray-100"> 
        <div class="container">
          <!-- 상세 탭 -->
          <div class="vip_tabBar">
              <div class="tabType anchor vip">
                <ul>
                  <li class="on">
                    <a href="#vip_detail_wrap">
                      상세설명
                      ::after
                    </a>
                  </li>
                  <li class>
                    <a href="#vip_buyInfo_wrap" onclick="$('#vip_buyInfo_wrap .moreArea').first().addClass('more');">
                      구매정보
                      ::after
                    </a>
                  </li>
                  <li class>
                    <a href="#vip_review_wrap">
                      리뷰
                      <em id="tab_rvscnt_area">리뷰개수</em>
                      ::after
                    </a>
                  </li>
                  <li class>
                    <a href="#vip_inquiry_wrap" onclick="$('#vip_inquiry_wrap .moreArea').first().addClass('more');">
                      문의
                      <em id="tab_cscnt_area">문의개수</em>
                      ::after
                    </a>
                  </li>
                </ul>

              </div>
            </div>



            <!-- 상품 상세정보 -->
            <div class="text-block">
              <p class="text-primary"><i class="fa-map-marker-alt fa me-1"></i> Brooklyn, New York</p>
              <h1>정수기 이름</h1>
              <p class="text-muted text-uppercase mb-4">Entire Apartment </p>
              <ul class="list-inline text-sm mb-4">
                <li class="list-inline-item me-3"><i class="fa fa-users me-1 text-secondary"></i> 4 guests</li>
                <li class="list-inline-item me-3"><i class="fa fa-door-open me-1 text-secondary"></i> 1 bedroom</li>
                <li class="list-inline-item me-3"><i class="fa fa-bed me-1 text-secondary"></i> 3 beds</li>
                <li class="list-inline-item me-3"><i class="fa fa-bath me-1 text-secondary"></i> 1 bath</li>
              </ul>
              <p class="text-muted fw-light">Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan. </p>
              <h6 class="mb-3">The space</h6>
              <p class="text-muted fw-light">Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested. </p>
              <p class="text-muted fw-light">Also in the apartment:</p>
              <ul class="text-muted fw-light"> 
                <li>TV with Netflix and DirectTVNow</li>
                <li>Free WiFi</li>
                <li>Gourmet Coffee/Tea making supplies</li>
                <li>Fresh Sheets and Towels</li>
                <li>Toaster, microwave, pots and pans and basic cooking needs like salt, pepper, sugar, and olive oil.</li>
                <li>Air Conditioning to keep you cool all summer!</li>
              </ul>
              <p class="text-muted fw-light">The apartment is surprisingly quiet for being in the heart of a vibrant, bustling neighborhood.</p>
              <h6 class="mb-3">Interaction with guests</h6>
              <p class="text-muted fw-light">We live in the two floors above the garden apartment so we are usually available to answer questions. The garden apartment is separate from our living space. We are happy to provide advice on local attractions, restaurants and transportation around the city. If there's anything you need please don't hesitate to ask!</p>
            </div>
            <div class="text-block">
              <h4 class="mb-4">Amenities</h4>
              <div class="row"> 
                <div class="col-md-6">
                  <ul class="list-unstyled text-muted">
                    <li class="mb-2"> <i class="fa fa-wifi text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Wifi</span></li>
                    <li class="mb-2"> <i class="fa fa-tv text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Cable TV</span></li>
                    <li class="mb-2"> <i class="fa fa-snowflake text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Air conditioning</span></li>
                    <li class="mb-2"> <i class="fa fa-thermometer-three-quarters text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Heating</span></li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled text-muted">
                    <li class="mb-2"> <i class="fa fa-bath text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Toiletteries</span></li>
                    <li class="mb-2"> <i class="fa fa-utensils text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Equipped Kitchen</span></li>
                    <li class="mb-2"> <i class="fa fa-laptop text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Desk for work</span></li>
                    <li class="mb-2"> <i class="fa fa-tshirt text-secondary w-1rem me-3 text-center"></i><span class="text-sm">Washing machine</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-block">
              <h4 class="mb-0">Amenities alternative</h4>
              <p class="subtitle text-sm text-primary mb-4">Alternative amenities display</p>
              <ul class="list-inline">
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Wifi</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Cable TV</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Air conditioning</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Heating</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Toiletteries</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Equipped Kitchen</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Desk for work</span></li>
                <li class="list-inline-item mb-2"><span class="badge rounded-pill bg-light p-3 text-muted fw-normal">Washing machine</span></li>
              </ul>
            </div>

            <!-- 스펙 -->
            <div class="text-block">
              <h2 data-bs-toggle="collapse" data-bs-target="#Details" aria-expanded="false" aria-controls="Details">+ Product Details</h2>
            

              <!-- ============== -->
              <!-- <section class="question-section"> -->
                
                <div class="collapse mt-4 Details" id="Details">
                  <h4 class="text-primary mb-4">상품 스펙</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <colgroup>
                      <col style="width: 16%;">
                      <col style="width: 30%;">
                      <col style="width: 20%;">
                      <col style="width: 34%;">
                    </colgroup>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명*</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">주요 기능*</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productFunction}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">색상</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productColor}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">크기 (가로x세로x높이)</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productSize}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">무게</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productWeight}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">직수 방식*</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productMethod}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">설치 형태*</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productType}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">출시 년월</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{ detailProduct.productRdate }}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조사</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productCompany}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조 국가</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">made in KOREA</td>
                    </tr>
                  </table>
                </div>
            </div>


            <!-- 가격 -->
            <div class="text-block">
              <h2 data-bs-toggle="collapse" data-bs-target="#Price" aria-expanded="false" aria-controls="Price">+ Price Details</h2>
             

              <!-- ============== -->
              <!-- <section class="question-section"> -->
                
                <div class="collapse mt-4 Price" id="Price">
                  <h4 class="text-primary mb-4">가격 혜택</h4>
                  <table border="1" style="border-collapse: collapse; width: 100%;">
                    <colgroup>
                      <col style="width: 16%;">
                      <col style="width: 30%;">
                      <col style="width: 20%;">
                      <col style="width: 34%;">
                    </colgroup>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">모델명</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productModel}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">주요 기능</td>
                      <td h5 class="mt-2 mb-1" style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productFunction}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">색상</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productColor}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">크기 (가로x세로x높이)</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productSize}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">무게</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productWeight}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">직수 방식</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productMethod}}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">설치 형태</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productType}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">출시 년월</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{ detailProduct.productRdate }}</td>
                    </tr>
                    <tr>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조사</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">{{detailProduct.productCompany}}</td>
                      <td class="mt-2 mb-1 text-muted text-sm" style="text-align: center; border: 1px solid black; padding: 10px;">제조 국가</td>
                      <td style="text-align: center; border: 1px solid black; padding: 10px;">made in KOREA</td>
                    </tr>
                  </table>
                </div>
              <!-- </section> -->
              
            </div>

            
  
            <!-- 리뷰 -->
            <div class="text-block">
              <h2 data-bs-toggle="collapse" data-bs-target="#Reviews" aria-expanded="false" aria-controls="Reviews">+ Reviews (<i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }})</h2>
               
              <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{reviewTotal}}</span></strong> &nbsp;개의 리뷰가 있습니다</p>
<!--                        <h3 class="mb-4">리뷰 평점 <i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }}</h3> -->
              <br>
              <button class="btn btn-outline-primary" type="button">리뷰 남기기</button>
              <!-- 리뷰 작성 ============== -->
              <!-- <div>
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview">Leave a review</button>
                <div class="collapse mt-4" id="leaveReview">
                  <h5 class="mb-4">Leave a review</h5>
                  <form class="form" id="contact-form" method="get" action="#">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="name">Your name *</label>
                          <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="rating">Your rating *</label>
                          <select class="form-select focus-shadow-0" name="rating" id="rating">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="email">Your email *</label>
                      <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="review">Review text *</label>
                      <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Post review</button>
                  </form>
                </div>
              </div> -->

              <!-- ============== -->
              <!-- <section class="review-section"> -->
                <div class="collapse mt-4 review" id="Reviews" :value="review.reviewNo" :key="review.reviewNo" v-for="review in reviews">
                  <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" v-bind:src="review.reImageUrl"><span class="text-uppercase text-muted text-sm">{{review.reDate}}</span></div>

                  <div>
                    <h6 class="mt-2 mb-1">{{review.member.mem_name}}</h6>
                    <!-- <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i></div> -->
                    <div class="mb-2"><i v-for="n in review.reStar" :key="n" class="fa fa-xs fa-star text-primary"></i></div>
                    <p class="text-muted text-sm">{{ review.reContent }}</p>
                  </div>
                </div>
              <!-- </section> -->
              
              <!-- <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-2.jpg" alt="Luke Skywalker"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
                </div>
              </div> -->
<!--               <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-3.jpg" alt="Princess Leia"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Princess Leia</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
                </div>
              </div>
              <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-4.jpg" alt="Jabba Hut"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Jabba Hut</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                  </div>
                  <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
                </div>
              </div>
               -->
            </div>

            <!-- 문의 -->
            <div class="text-block">
              <h2 data-bs-toggle="collapse" data-bs-target="#Questions" aria-expanded="false" aria-controls="Questions">+ Questions</h2>
               
            <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{inquiryTotal}}</span></strong> &nbsp;개의 문의가 있습니다</p>
<!--                        <h3 class="mb-4">리뷰 평점 <i class="fa fa-xs fa-star text-primary"></i>&nbsp;{{ avgStar }}</h3> -->

              <!-- 문의 작성 ============== -->
              <br>
              <div>
                <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveQuestion" aria-expanded="false" aria-controls="leaveQuestion">문의하기</button>
                <div class="collapse mt-4" id="leaveQuestion">
                  <h5 class="mb-4">문의하실 제목과 내용을 작성하신 후 [작성하기] 버튼을 클릭하세요 :)</h5>
                  <form class="form" id="contact-form" method="get" action="#">
                    <div class="mb-4">
                      <label class="form-label" for="questiontitle">문의 제목</label>
                      <input class="form-control" name="question" id="question" placeholder="Enter question title" required="required"/>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="questionContent">문의 내용</label>
                      <textarea class="form-control" rows="4" name="question" id="question" placeholder="Enter your question" required="required"></textarea>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="name">작성자 |</label>
                          &nbsp;&nbsp;&nbsp;<label>정소희</label>
                        </div>
                        <div class="mb-4">
                          <label class="form-label" for="email">이메일 |</label>
                          &nbsp;&nbsp;&nbsp;<span>ssohee98@naver.com</span>
                        </div>
                        <div class="mb-4">
                          <label class="form-label" for="phone">휴대폰 |</label>
                          &nbsp;&nbsp;&nbsp;<span>010-2685-2139</span>
                        </div>
                      </div>
                      <!-- <div class="col-sm-6">
                        <div class="mb-4">
                          <label class="form-label" for="rating">Your rating *</label>
                          <select class="form-select focus-shadow-0" name="rating" id="rating">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div> -->
                    </div>
                    
                    <button class="btn btn-primary" type="submit">문의 작성하기</button>
                  </form>
                </div>
              </div> 

              <!-- ============== -->
              <!-- <section class="question-section"> -->
                
                <div class="collapse mt-4 review" id="Questions" :value="inquiry.proqNo" :key="inquiry.proqNo" v-for="inquiry in inquirys">
                  <div class="row">
                    <div class="col-md-2">
                      <p class="text-muted text-sm">문의 상태</p>
                    </div>
                    <div class="col-md-5">
                      <p class="text-muted text-sm">문의 제목</p>
                    </div>
                    <div class="col-md-2">
                      <p class="text-muted text-sm">작성자</p>
                    </div>
                    <!-- <div class="col-md-4">
                      <p class="text-muted text-sm">{{ inquiry.proqContent }}</p>
                    </div> -->
                    <div class="col-md-3">
                      <p class="text-muted text-sm">문의 일시</p>
                      <!-- <p class="text-muted text-sm">{{ formattedDate(inquiry.proqDate) }}</p> -->
                    </div>
                  </div>
                  <!-- <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" v-bind:src="review.reImageUrl"><span class="text-uppercase text-muted text-sm">{{review.reDate}}</span></div> -->
                  <!-- <div>
                    <h6 class="mt-2 mb-1">{{inquiry.member.mem_name}}</h6><p class="text-muted text-sm">{{ inquiry.proqTitle }}</p>
                    <p class="text-muted text-sm">{{ inquiry.proqContent }}</p>
                    <p class="text-muted text-sm">{{ inquiry.proqDate }}</p>
                    <p class="text-muted text-sm">{{ inquiry.proqState }}</p>
                  </div> -->
                  
                  
                  <div class="row">
                    <div class="col-md-2">
                      <h5 class="mt-2 mb-1 text-primary">{{ inquiry.proqState }}</h5>
                    </div>
                    <div class="col-md-5">
                      <h5 class="mt-2 mb-1">{{ inquiry.proqTitle }}</h5>
                    </div>
                    <div class="col-md-2">
                      <h5 class="mt-2 mb-1">{{inquiry.member.mem_name}}</h5>
                    </div>
                    <!-- <div class="col-md-4">
                      <p class="text-muted text-sm">{{ inquiry.proqContent }}</p>
                    </div> -->
                    <div class="col-md-3">
                      <h5 class="mt-2 mb-1 text-muted text-sm">{{ inquiry.proqDate }}</h5>
                      <!-- <p class="text-muted text-sm">{{ formattedDate(inquiry.proqDate) }}</p> -->
                    </div>
                  </div>
                </div>
              <!-- </section> -->
              
              <!-- <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-2.jpg" alt="Luke Skywalker"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
                </div>
              </div> -->
<!--               <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-3.jpg" alt="Princess Leia"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Princess Leia</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
                </div>
              </div>
              <div class="d-flex d-block d-sm-flex review">
                <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="img/avatar/avatar-4.jpg" alt="Jabba Hut"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div>
                  <h6 class="mt-2 mb-1">Jabba Hut</h6>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                  </div>
                  <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
                </div>
              </div>
               -->
            </div>

          <h5 class="mb-0">Similar places</h5>
          <p class="subtitle text-sm text-primary mb-4">You may also like         </p>
          <!-- Slider main container-->
          <div class="swiper-container swiper-container-mx-negative swiper-init pt-3" data-swiper="{&quot;slidesPerView&quot;:4,&quot;spaceBetween&quot;:20,&quot;loop&quot;:true,&quot;roundLengths&quot;:true,&quot;breakpoints&quot;:{&quot;1200&quot;:{&quot;slidesPerView&quot;:3},&quot;991&quot;:{&quot;slidesPerView&quot;:2},&quot;565&quot;:{&quot;slidesPerView&quot;:1}},&quot;pagination&quot;:{&quot;el&quot;:&quot;.swiper-pagination&quot;,&quot;clickable&quot;:true,&quot;dynamicBullets&quot;:true}}">
            <!-- Additional required wrapper-->
            <div class="swiper-wrapper pb-5">
              <!-- Slides-->
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay center"> <img class="img-fluid" src="/../../../../html/img/photo/sample1.PNG" alt="Modern, Well-Appointed Room"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-0.jpg" alt="Pamela"/>
                          <div>Pamela</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Modern, Well-Appointed Room</a></h6>
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
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="/../../../../html/img/photo/sample1.PNG" alt="Cute Quirky Garden apt, NYC adjacent"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-7.jpg" alt="John"/>
                          <div>John</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Cute Quirky Garden apt, NYC adjacent</a></h6>
                        <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                          </p>
                        </div>
                        <p class="card-text text-muted"><span class="h4 text-primary">$121</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="/../../../../html/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Modern Apt - Vibrant Neighborhood!"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-8.jpg" alt="Julie"/>
                          <div>Julie</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Modern Apt - Vibrant Neighborhood!</a></h6>
                        <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i><i class="fa fa-star text-gray-300">                                  </i>
                          </p>
                        </div>
                        <p class="card-text text-muted"><span class="h4 text-primary">$75</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="/../../../../html/img/photo/photo-1494526585095-c41746248156.jpg" alt="Sunny Private Studio-Apartment"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-9.jpg" alt="Barbora"/>
                          <div>Barbora</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Sunny Private Studio-Apartment</a></h6>
                        <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Shared room</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                          </p>
                        </div>
                        <p class="card-text text-muted"><span class="h4 text-primary">$93</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="/../../../../html/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="Mid-Century Modern Garden Paradise"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-10.jpg" alt="Jack"/>
                          <div>Jack</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Mid-Century Modern Garden Paradise</a></h6>
                        <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Entire house</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                          </p>
                        </div>
                        <p class="card-text text-muted"><span class="h4 text-primary">$115</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto px-2">
                <!-- place item-->
                <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
                  <div class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden gradient-overlay"> <img class="img-fluid" src="/../../../../html/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Brooklyn Life, Easy to Manhattan"/><a class="tile-link" href="detail-rooms.html"></a>
                      <div class="card-img-overlay-bottom z-index-20">
                        <div class="d-flex text-white text-sm align-items-center"><img class="avatar avatar-border-white flex-shrink-0 me-2" src="/../../../../html/img/avatar/avatar-11.jpg" alt="Stuart"/>
                          <div>Stuart</div>
                        </div>
                      </div>
                      <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a></div>
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <h6 class="card-title"><a class="text-decoration-none text-dark" href="/../../../../html/detail-rooms.html">Brooklyn Life, Easy to Manhattan</a></h6>
                        <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                                  </i>
                          </p>
                        </div>
                        <p class="card-text text-muted"><span class="h4 text-primary">$123</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- If we need pagination-->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- Footer-->
      <footer class="position-relative z-index-10 d-print-none">
        <!-- Main block - menus, subscribe form-->
        <div class="py-6 bg-gray-200 text-muted"> 
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="fw-bold text-uppercase text-dark mb-3">Directory</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <ul class="list-inline">
                  <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#" target="_blank" title="twitter"><i class="fab fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#" target="_blank" title="facebook"><i class="fab fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#" target="_blank" title="instagram"><i class="fab fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#" target="_blank" title="pinterest"><i class="fab fa-pinterest"></i></a></li>
                  <li class="list-inline-item"><a class="text-muted text-primary-hover" href="#" target="_blank" title="vimeo"><i class="fab fa-vimeo"></i></a></li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 class="text-uppercase text-dark mb-3">Rentals</h6>
                <ul class="list-unstyled">
                  <li><a class="text-muted" href="/../../../../html/index.html">Rooms</a></li>
                  <li><a class="text-muted" href="/../../../../html/category-rooms.html">Map on top</a></li>
                  <li><a class="text-muted" href="/../../../../html/category-2-rooms.html">Side map</a></li>
                  <li><a class="text-muted" href="/../../../../html/category-3-rooms.html">No map</a></li>
                  <li><a class="text-muted" href="/../../../../html/detail-rooms.html">Room detail</a></li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <h6 class="text-uppercase text-dark mb-3">Pages</h6>
                <ul class="list-unstyled">
                  <li><a class="text-muted" href="/../../../../html/compare.html">Comparison                                   </a></li>
                  <li><a class="text-muted" href="/../../../../html/team.html">Team                                   </a></li>
                  <li><a class="text-muted" href="/../../../../html/contact.html">Contact                                   </a></li>
                </ul>
              </div>
              <div class="col-lg-4">
                <h6 class="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
                <p class="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                <form action="#" id="newsletter-form">
                  <div class="input-group mb-3">
                    <input class="form-control bg-transparent border-dark border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address">
                    <button class="btn btn-outline-dark border-start-0" type="submit"> <i class="fa fa-paper-plane text-lg"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Copyright section of the footer-->
        <div class="py-4 fw-light bg-gray-800 text-gray-300">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-center text-md-start">
                <p class="text-sm mb-md-0">&copy; 2021, Your company.  All rights reserved.</p>
              </div>
              <div class="col-md-6">
                <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
                  <li class="list-inline-item"><img class="w-2rem" src="/../../../../html/img/visa.svg" alt="..."></li>
                  <li class="list-inline-item"><img class="w-2rem" src="/../../../../html/img/mastercard.svg" alt="..."></li>
                  <li class="list-inline-item"><img class="w-2rem" src="/../../../../html/img/paypal.svg" alt="..."></li>
                  <li class="list-inline-item"><img class="w-2rem" src="/../../../../html/img/western-union.svg" alt="..."></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </body>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted, mounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {


  //   methods: {
  //   formattedDate(proqDate) {
  //     return new Date(proqDate).toLocaleString('ko-KR', {
  //       timeZone: 'Asia/Seoul',
  //       hour12: false,
  //     })
  //   },
  // },

  //   filters: {
  //   formatDate(value) {
  //     const date = new Date(value);
  //     const year = date.getFullYear();
  //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //     const day = date.getDate().toString().padStart(2, '0');
  //     return `${year}/${month}/${day}`;
  //   },
  // },

  filters: {
    formatDate(proqDate) {
      return new Date(proqDate);
    },
  },

  // filters: {
  //   formatDate: function (value) {
  //       if (value) {
  //           return moment(value).format('YYYY/MM/DD')
  //       }
  //   },
  // },

  setup() {
    const route = useRoute();
    const router = useRouter();
    //const detailProduct = ref(null);
    //const detailProduct = ref([]);
    const review = ref('');
    const reviews = ref([]);
    const inquiry = ref('');
    const inquirys = ref([]);
    const reviewTotal = ref(0);
    const inquiryTotal = ref(0);
    const detailProduct = ref({
      productName: '',
      productModel: '',
      productFunction: '',
      productPrice: 0,
      productRentalPrice: 0,
    });
    const productNo = route.params.pno;
    console.log("detail page : "+productNo);

    const getProductDetail = async() => {
      console.log("해당 상품 받아와??");
      console.log("상품 번호: "+productNo);
      const res = await axios.get('/product/' +productNo);
      console.log(res.data);
      detailProduct.value = {...res.data};
      //  await axios
      //   .get('/product/products/' +productNo)
      //   .then((res)=>{
      //     console.log(res)
      //     console.log(res.data)
      //     detailProduct.value = res.data
      //   });
      
      console.log("11111");
      console.log(detailProduct.value);

      // setTimeout(() => {
      //   console.log(detailProduct.value.imgUrl);
      //   console.log(detailProduct.value.productName);
      // }, 0);
    }

    const getReviewList = async() => {
      console.log("리뷰 받아와??");
      const res = await axios.get('/product/' +productNo+ '/reviews');
      console.log(res.data);
      reviews.value = res.data;
      reviewTotal.value = reviews.value.length;
    }

    const avgStar = ref(0);

    const getReviewStar = async() => {
      const avg = await axios.get('/product/' +productNo+ '/reviewStar');
      console.log(avg.data);
      avgStar.value = avg.data;
    } 

    const getInquiryList = async() => {
      console.log("문의 받아와??");
      const res = await axios.get('/product/' +productNo+ '/proQna');
      console.log(res.data);
      inquirys.value = res.data;
      inquiryTotal.value = inquirys.value.length;
    }
    
    onMounted(() => {
      getProductDetail();
      getReviewList();
      getReviewStar();
      getInquiryList();
    });

    // const orderTypeSelect = document.getElementById('orderType');
    // const contractLengthDiv = document.querySelector('.mb-4[label="약정기간 *"]');

    // orderTypeSelect.addEventListener('change', function() {
    //   if (this.value === '2') { // 구매가 선택된 경우
    //     contractLengthDiv.style.display = 'none';
    //   } else {
    //     contractLengthDiv.style.display = ''; // 다른 경우 (렌탈이 선택된 경우)는 기본값으로 표시
    //   }
    // });

    // const orderTypeSelect = document.getElementById('orderType');
    // const contractLengthSelect = document.getElementById('contractLength');

    // const updateProductPrice = () => {e
    //   const rentalPriceLabel = document.querySelector('.h5[name="orderPrice"]');
    //   const purchasePriceLabel = document.querySelector('.h5[name="rentalPrice"]');

    //   const orderType = orderTypeSelect.value;
    //   const contractLength = contractLengthSelect.value;
    //   let productPrice;

    //   if (orderType === '1') { // 렌탈
    //     if (contractLength === '1') {
    //       productPrice = detailProduct.productRentalPrice;
    //     } else if (contractLength === '2') {
    //       productPrice = detailProduct.productRentalPrice + 4000;
    //     }
    //     if (rentalPriceLabel) {
    //       rentalPriceLabel.textContent = `월 ${productPrice}원`;
    //       rentalPriceLabel.style.display = 'block';
    //     }
    //     if (purchasePriceLabel) {
    //       purchasePriceLabel.style.display = 'none';
    //     }
    //   } else if (orderType === '2') { // 구매
    //     productPrice = detailProduct.productPrice;
    //     if (purchasePriceLabel) {
    //       purchasePriceLabel.textContent = `${productPrice}원`;
    //       purchasePriceLabel.style.display = 'block';
    //     }
    //     if (rentalPriceLabel) {
    //       rentalPriceLabel.style.display = 'none';
    //     }
    //   }
    // };

    // onMounted(() => {
    //   orderTypeSelect.addEventListener('change', updateProductPrice);
    //   contractLengthSelect.addEventListener('change', updateProductPrice);
    // });
    
  return {
    route,
    router,
    detailProduct,
    review,
    reviews,
    reviewTotal,
    avgStar,
    inquiry,
    inquirys,
    inquiryTotal,
  }

  }
}
  </script>
  
  <style>
  
  </style>