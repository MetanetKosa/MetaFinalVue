

<template>
    <body>
    <div class="container">
    <div class="container-fluid pt-5 pb-3 border-bottom px-lg-5">
      <div class="row">
        <section class="py-6 bg-gray-100"> 
       <div class="container">
         <div class="text-center pb-lg-4">
           <p class="subtitle text-secondary">Best Items 5</p>
           <h2 class="mb-5">베스트 상품</h2>
         </div>
       </div>
       <div class="container">
         <!-- Slider main container-->
         <div class="swiper-container swiper-container-mx-negative items-slider px-lg-5 pt-3">
           <!-- Additional required wrapper-->
           <div class="swiper-wrapper pb-5">
             <!-- Slides-->
             <div class="swiper-slide h-auto px-2" :value="bestProduct.productNo" :key="bestProduct.productNo" v-for="bestProduct in bestProducts">
               <!-- venue item-->
               <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                 <div class="card h-100 border-0 shadow">
                   <!-- <div class="card-img-top overflow-hidden dark-overlay bg-cover" style="background-image: url({{ bestProduct.imgUrl }}); min-height: 200px;"><a class="tile-link" href="detail.html"></a> -->
                    <div class="card-img-top overflow-hidden bg-cover"><img class="img-fluid" v-bind:src="bestProduct.imgUrl" > 
                    <!-- <div class="card-img-overlay-bottom z-index-20">
                       <h4 class="text-white text-shadow">Blue Hill</h4>
                       <p class="mb-2 text-xs"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                    </i>
                       </p>
                     </div> 
                     <div class="card-img-overlay-top d-flex justify-content-between align-items-center">
                       <div class="badge badge-transparent badge-pill px-3 py-2">Restaurants</div><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                         <svg class="svg-icon text-white">
                           <use xlink:href="#heart-1"> </use>
                         </svg></a>
                     </div> -->
                   </div>
                   <div class="card-body">
                     <p class="text-sm text-muted text-uppercase mb-1">{{ bestProduct.productName }}</p>
                     <p class="text-sm mb-0">구매&nbsp;&nbsp;&nbsp;{{ bestProduct.productPrice.toLocaleString() }}원</p>
                     <p class="text-sm mb-0">렌탈&nbsp;&nbsp;월&nbsp;&nbsp;{{ bestProduct.productRentalPrice.toLocaleString() }}원</p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="swiper-slide h-auto px-2">
               <!-- venue item-->
               <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
                 <div class="card h-100 border-0 shadow">
                   <div class="card-img-top overflow-hidden dark-overlay bg-cover" style="background-image: url(/../html/img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg); min-height: 200px;"><a class="tile-link" href="detail.html"></a>
                     <div class="card-img-overlay-bottom z-index-20">
                       <h4 class="text-white text-shadow">Plutorque</h4>
                       <p class="mb-2 text-xs"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                       </p>
                     </div>
                     <div class="card-img-overlay-top d-flex justify-content-between align-items-center">
                       <div class="badge badge-transparent badge-pill px-3 py-2">Restaurant</div><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                         <svg class="svg-icon text-white">
                           <use xlink:href="#heart-1"> </use>
                         </svg></a>
                     </div>
                   </div>
                   <div class="card-body">
                     <p class="text-sm text-muted mb-3"> Proident irure eiusmod velit veniam consectetur id minim irure et nostrud mollit magna velit. Commodo amet proident aliq...</p>
                     <p class="text-sm text-muted text-uppercase mb-1">By <a href="#" class="text-dark">Matt Damon</a></p>
                     <p class="text-sm mb-0"><a class="me-1" href="#">Restaurant,</a><a class="me-1" href="#">Fusion</a>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="swiper-slide h-auto px-2">
               <!-- venue item-->
               <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
                 <div class="card h-100 border-0 shadow">
                   <div class="card-img-top overflow-hidden dark-overlay bg-cover" style="background-image: url(/../html/img/photo/restaurant-1504087697492-238a6bf49ce8.jpg); min-height: 200px;"><a class="tile-link" href="detail.html"></a>
                     <div class="card-img-overlay-bottom z-index-20">
                       <h4 class="text-white text-shadow">Prosure</h4>
                       <p class="mb-2 text-xs"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                       </p>
                     </div>
                     <div class="card-img-overlay-top d-flex justify-content-between align-items-center">
                       <div class="badge badge-transparent badge-pill px-3 py-2">Restaurant</div><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                         <svg class="svg-icon text-white">
                           <use xlink:href="#heart-1"> </use>
                         </svg></a>
                     </div>
                   </div>
                   <div class="card-body">
                     <p class="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                     <p class="text-sm text-muted text-uppercase mb-1">By <a href="#" class="text-dark">Matt Damon</a></p>
                     <p class="text-sm mb-0"><a class="me-1" href="#">Nisi,</a><a class="me-1" href="#">Ex,</a><a class="me-1" href="#">Eiusmod</a>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="swiper-slide h-auto px-2">
               <!-- venue item-->
               <div class="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
                 <div class="card h-100 border-0 shadow">
                   <div class="card-img-top overflow-hidden dark-overlay bg-cover" style="background-image: url(/../html/img/photo/restaurant-1505275350441-83dcda8eeef5.jpg); min-height: 200px;"><a class="tile-link" href="detail.html"></a>
                     <div class="card-img-overlay-bottom z-index-20">
                       <h4 class="text-white text-shadow">Take That</h4>
                       <p class="mb-2 text-xs"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-gray-300">                    </i>
                       </p>
                     </div>
                     <div class="card-img-overlay-top d-flex justify-content-between align-items-center">
                       <div class="badge badge-transparent badge-pill px-3 py-2">Café</div><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                         <svg class="svg-icon text-white">
                           <use xlink:href="#heart-1"> </use>
                         </svg></a>
                     </div>
                   </div>
                   <div class="card-body">
                     <p class="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                     <p class="text-sm text-muted text-uppercase mb-1">By <a href="#" class="text-dark">Matt Damon</a></p>
                     <p class="text-sm mb-0"><a class="me-1" href="#">Nisi,</a><a class="me-1" href="#">Ex,</a><a class="me-1" href="#">Eiusmod</a>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <!-- If we need pagination-->
           <div class="swiper-pagination"></div>
         </div>
         <div class="text-center mt-5"><a class="btn btn-outline-primary" href="category-2.html">See all places</a></div>
       </div>
     </section>
      </div>
    </div>
    <div class="container-fluid py-5 px-lg-5">
      <div class="row">
        <!-- 왼쪽 사이드 바 필터 -->
        <div class="col-lg-3 pt-3">
          <form class="pe-xl-3" action="#" autocomplete="off">
            <div class="mb-4">
              <label class="form-label" for="form_dates">Dates</label>
              <div class="datepicker-container datepicker-container-left">
                <input class="form-control" type="text" name="bookingDate" id="form_dates" placeholder="Choose your dates">
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label" for="form_guests">기능</label>
              <select class="selectpicker form-control" name="guests" id="form_guests" data-style="btn-selectpicker" title=" ">
                <option value="guests_0">냉정수기</option>
                <option value="guests_1">냉온정수기</option>
                <option value="guests_2">얼음</option>
                <option value="guests_3">탄산</option>
                <option value="guests_4">정수전용</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label" for="form_type">설치 타입</label>
              <select class="selectpicker form-control" name="type" id="form_type" multiple data-style="btn-selectpicker" title="">
                <option value="type_0">데스크탑</option>
                <option value="type_1">언더싱크</option>
                <option value="type_2">스탠드</option>
              </select>
            </div>

            <!-- ========================================== -->
            <!-- more filter 버튼 눌렀을때 나오는 -->
            <div class="pb-4">
              <div class="collapse" id="moreFilters">
                <div class="filter-block">
                  <h6 class="mb-3">Location</h6>
                  <div class="mb-4">
                    <label class="form-label" for="form_neighbourhood">Neighbourhood</label>
                    <select class="selectpicker form-control" name="neighbourhood" id="form_neighbourhood" multiple data-style="btn-selectpicker" data-live-search="true" data-selected-text-format="count &gt; 1" title="">
                      <option value="neighbourhood_0">Battery Park City    </option>
                      <option value="neighbourhood_1">Bowery    </option>
                      <option value="neighbourhood_2">Carnegie Hill    </option>
                      <option value="neighbourhood_3">Central Park    </option>
                      <option value="neighbourhood_4">Chelsea    </option>
                      <option value="neighbourhood_5">Chinatown    </option>
                      <option value="neighbourhood_6">Civic Center    </option>
                      <option value="neighbourhood_7">East Harlem    </option>
                      <option value="neighbourhood_8">Financial District    </option>
                      <option value="neighbourhood_9">Flatiron    </option>
                      <option value="neighbourhood_10">Garment District    </option>
                      <option value="neighbourhood_11">Gramercy Park    </option>
                      <option value="neighbourhood_12">Greenwich Village    </option>
                      <option value="neighbourhood_13">East Village    </option>
                      <option value="neighbourhood_14">West Village    </option>
                      <option value="neighbourhood_15">Hamilton Heights    </option>
                      <option value="neighbourhood_16">Harlem    </option>
                      <option value="neighbourhood_17">Hell's Kitchen / Clinton    </option>
                      <option value="neighbourhood_18">Inwood    </option>
                      <option value="neighbourhood_19">Kips Bay    </option>
                      <option value="neighbourhood_20">Lenox Hill    </option>
                      <option value="neighbourhood_21">Little Italy    </option>
                      <option value="neighbourhood_22">Lower Eastside    </option>
                      <option value="neighbourhood_23">Madison Square    </option>
                      <option value="neighbourhood_24">Manhattan Valley    </option>
                      <option value="neighbourhood_25">Meatpacking District    </option>
                      <option value="neighbourhood_26">Midtown    </option>
                      <option value="neighbourhood_27">Morningside Heights    </option>
                      <option value="neighbourhood_28">Murray Hill    </option>
                      <option value="neighbourhood_29">NoHo    </option>
                      <option value="neighbourhood_30">NoLita    </option>
                      <option value="neighbourhood_31">Roosevelt Island    </option>
                      <option value="neighbourhood_32">SoHo    </option>
                      <option value="neighbourhood_33">Stuyvesant Town (Stuyvesant Square)    </option>
                      <option value="neighbourhood_34">Sutton Place    </option>
                      <option value="neighbourhood_35">Times Square    </option>
                      <option value="neighbourhood_36">Tribeca    </option>
                      <option value="neighbourhood_37">Turtle Bay    </option>
                      <option value="neighbourhood_38">Upper Eastside    </option>
                      <option value="neighbourhood_39">Upper Westside    </option>
                      <option value="neighbourhood_40">Washington Heights    </option>
                      <option value="neighbourhood_41">Yorkville    </option>
                    </select>
                  </div>
                  <div class="mb-0">
                    <label class="form-label">Neighbourhood Tag</label>
                    <ul class="list-inline mt-xl-1 mb-0">
                      <li class="list-inline-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="type_0" name="type[]">
                          <label class="form-check-label" for="type_0">Hipster                                            </label>
                        </div>
                      </li>
                      <li class="list-inline-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="type_1" name="type[]">
                          <label class="form-check-label" for="type_1">Business                                            </label>
                        </div>
                      </li>
                      <li class="list-inline-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="type_2" name="type[]">
                          <label class="form-check-label" for="type_2">Family                                            </label>
                        </div>
                      </li>
                      <li class="list-inline-item">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="type_3" name="type[]">
                          <label class="form-check-label" for="type_3">Green                                            </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="filter-block">
                  <h6 class="mb-3">Rooms and beds</h6>
                  <div class="mb-2">
                    <label class="form-label">Beds</label>
                    <div class="d-flex align-items-center">
                      <div class="btn btn-items btn-items-decrease">-</div>
                      <input class="form-control input-items input-items-greaterthan" type="text" value="1+" disabled>
                      <div class="btn btn-items btn-items-increase">+</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label class="form-label">Bedrooms</label>
                    <div class="d-flex align-items-center">
                      <div class="btn btn-items btn-items-decrease">-</div>
                      <input class="form-control input-items input-items-greaterthan" type="text" value="1+" disabled>
                      <div class="btn btn-items btn-items-increase">+</div>
                    </div>
                  </div>
                  <div class="mb-0">
                    <label class="form-label">Bathrooms</label>
                    <div class="d-flex align-items-center">
                      <div class="btn btn-items btn-items-decrease">-</div>
                      <input class="form-control input-items input-items-greaterthan" type="text" value="1+" disabled>
                      <div class="btn btn-items btn-items-increase">+</div>
                    </div>
                  </div>
                </div>
                <div class="filter-block"> 
                  <h6 class="mb-3">Trip type</h6>
                  <div class="mb-0">
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input" id="forfamilies" type="checkbox" name="forfamilies" aria-describedby="forfamiliesHelp">
                      <label class="form-check-label" for="forfamilies"> <span class="text-sm">For Families</span></label>
                    </div><small class="text-muted form-text" id="forfamiliesHelp">Explore entire homes with 5-star reviews from families and essentials like a kitchen and TV</small>
                  </div>
                  <div class="mb-0">
                    <div class="form-check form-switch mb-2">
                      <input class="form-check-input" id="forwork" type="checkbox" name="forwork" aria-describedby="forworkHelp">
                      <label class="form-check-label" for="forwork"> <span class="text-sm">For work</span></label>
                    </div><small class="text-muted form-text" id="forworkHelp">Explore top-rated homes with essentials like a workspace, wifi, and self check-in                                        </small>
                  </div>
                </div>
                <div class="filter-block"> 
                  <h6 class="mb-3">Amenities</h6>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_0" name="amenities[]">
                        <label class="form-check-label" for="amenities_0">Kitchen                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_1" name="amenities[]">
                        <label class="form-check-label" for="amenities_1">Shampoo                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_2" name="amenities[]">
                        <label class="form-check-label" for="amenities_2">Heating                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_3" name="amenities[]">
                        <label class="form-check-label" for="amenities_3">Air conditioning                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_4" name="amenities[]">
                        <label class="form-check-label" for="amenities_4">Washer                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_5" name="amenities[]">
                        <label class="form-check-label" for="amenities_5">Dryer                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_6" name="amenities[]">
                        <label class="form-check-label" for="amenities_6">Wifi                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_7" name="amenities[]">
                        <label class="form-check-label" for="amenities_7">Breakfast                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_8" name="amenities[]">
                        <label class="form-check-label" for="amenities_8">Indoor fireplace                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_9" name="amenities[]">
                        <label class="form-check-label" for="amenities_9">Buzzer/wireless intercom                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_10" name="amenities[]">
                        <label class="form-check-label" for="amenities_10">Doorman                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_11" name="amenities[]">
                        <label class="form-check-label" for="amenities_11">Hangers                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_12" name="amenities[]">
                        <label class="form-check-label" for="amenities_12">Iron                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_13" name="amenities[]">
                        <label class="form-check-label" for="amenities_13">Hair dryer                               </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="amenities_14" name="amenities[]">
                        <label class="form-check-label" for="amenities_14">Laptop friendly workspace                               </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="filter-block"> 
                  <h6 class="mb-3">Facilities</h6>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="facilities_0" name="facilities[]">
                        <label class="form-check-label" for="facilities_0">Free parking on premises             </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="facilities_1" name="facilities[]">
                        <label class="form-check-label" for="facilities_1">Gym             </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="facilities_2" name="facilities[]">
                        <label class="form-check-label" for="facilities_2">Hot tub             </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="facilities_3" name="facilities[]">
                        <label class="form-check-label" for="facilities_3">Pool             </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- ========================================== -->

              <!-- more filter 버튼 -->
              <div class="mb-4">
                <button class="btn btn-link btn-collapse ps-0 text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#moreFilters" aria-expanded="false" aria-controls="moreFilters" data-expanded-text="Less filters" data-collapsed-text="More filters">More filters</button>
              </div>
              <div class="mb-4">
                <button class="btn btn-primary" type="submit"><i class="fas fa-filter me-1"></i>Filter</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-9">
          <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
            <div class="me-3">
              <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">[ {{searchKeyword}} ]</span></strong> &nbsp;키워드로 검색한 결과입니다.</p>
              <p class="mb-3 mb-md-0"><strong><span class="h5 text-primary">{{productTotal}}</span></strong> &nbsp;results found</p>
            </div>
            <div>
              <label class="form-label me-2" for="form_sort">Sort by</label>
              <select class="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker" title="">
                <option value="sortBy_0">Most popular   </option>
                <option value="sortBy_1">Recommended   </option>
                <option value="sortBy_2">Newest   </option>
                <option value="sortBy_3">Oldest   </option>
                <option value="sortBy_4">Closest   </option>
              </select>
            </div> 
          </div>


          <div class="row">
            <!-- 상품 리스트 -->
            <section class="product-section">
              <div class="product-list row">
                <div class="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92" :value="searchProduct.productNo" :key="searchProduct.productNo" v-for="searchProduct in searchProducts">
                  <div @click="moveToProductDetailPage(searchProduct.productNo)" class="card h-100 border-0 shadow">
                    <div class="card-img-top overflow-hidden"><img class="img-fluid" v-bind:src="searchProduct.imgUrl" >
                      <hr>
                      <div class="card-img-overlay-bottom z-index-20">
                      </div>
                      <!-- <div class="card-img-overlay-top text-end"><a class="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                          <svg class="svg-icon text-white">
                            <use xlink:href="#heart-1"> </use>
                          </svg></a>
                      </div> -->
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <div class="w-100">
                        <br>
                        <h3 class="mb-5" style="text-align: center;">{{ searchProduct.productName }}</h3>
                        <!-- <div class="d-flex card-subtitle mb-3">
                          <p class="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                          <p class="flex-shrink-1 mb-0 card-stars text-xs text-end"><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                          </p>
                        </div> -->
                        <p class="card-text text-muted">기능&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productFunction }}</span></p>
                        <p class="card-text text-muted">색상&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productColor }}</span></p>
                        <br>
                        <hr>
                        <p class="card-text text-muted" style="text-align: right;">구매가격&nbsp;&nbsp;&nbsp;&nbsp;<span class="h5 text-primary">{{ searchProduct.productPrice.toLocaleString() }}&nbsp;원</span></p>
                        <p class="card-text text-muted" style="text-align: right;">렌탈가격&nbsp;<span class="h5 text-primary">~월&nbsp;{{ searchProduct.productRentalPrice.toLocaleString() }}&nbsp;원</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          <!-- Pagination -->
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-template d-flex justify-content-center">
              <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-left"></i></a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-right"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
    </div>

   
    </body>

  </template>

<script>

import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    //let productList = ref(null);
    const productTotal = ref(0);
    const route = useRoute();
    const router = useRouter();
    const bestProduct = ref('');
    const bestProducts = ref([]);
    const searchProduct = ref('');
    const searchProducts = ref([]);

    const searchKeyword = route.params.searchKeyword;
    console.log("searchKeyword : "+searchKeyword);

    const getSearchProductList = async() => {
      console.log("검색 상품 받아와??");
      const res = await axios.get('/product/search/' +searchKeyword);
      console.log(res.data);
      searchProducts.value = res.data;
      productTotal.value = searchProducts.value.length;
    }
    

    const getBestProductList = async() => {
      console.log("베스트 상품 받아와??");
      const res = await axios.get('/product/best');
      console.log(res.data);
      bestProducts.value = res.data;
    }

    onMounted(() => {
      getSearchProductList();
      getBestProductList();
    });

    const moveToProductDetailPage = (p) => {
      console.log("param : " + p);
      router.push({
        name: 'ProductDetail',
        params: {
          pno: p
        }
      });
    }

  return {
    //productList,
    productTotal,
    searchProduct,
    searchProducts,
    searchKeyword,
    route,
    router,
    bestProduct,
    bestProducts,
    moveToProductDetailPage,
  }

  }
}

</script>

<style>

</style>