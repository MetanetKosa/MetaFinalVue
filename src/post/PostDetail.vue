
<template>
  <body>
    <!-- Page loading spinner-->
    
    <main class="page-wrapper">
        <!-- Sign In Modal-->
        <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px;">
                <div class="modal-content">
                    <div class="modal-body px-0 py-2 py-sm-0">
                        <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                        <div class="row mx-0 align-items-center">
                            <div class="col-md-6 border-end-md p-4 p-sm-5">
                                <h2 class="h3 mb-4 mb-sm-5">Hey there!<br>Welcome back.</h2><img class="d-block mx-auto" src="${path}/resources/img/signin-modal/signin.svg" width="344" alt="Illustartion">
                                <div class="mt-4 mt-sm-5">Don't have an account <a href="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign up here</a></div>
                            </div>
                            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"><a class="btn btn-outline-info w-100 rounded-pill mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info w-100 rounded-pill mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                                <div class="d-flex align-items-center py-3 mb-3">
                                    <hr class="w-100">
                                    <div class="px-3">Or</div>
                                    <hr class="w-100">
                                </div>
                                <form class="needs-validation" novalidate>
                                    <div class="mb-4">
                                        <label class="form-label mb-2" for="signin-email">Email address</label>
                                        <input class="form-control" type="email" id="signin-email" placeholder="Enter your email" required>
                                    </div>
                                    <div class="mb-4">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <label class="form-label mb-0" for="signin-password">Password</label><a class="fs-sm" href="#">Forgot password?</a>
                                        </div>
                                        <div class="password-toggle">
                                            <input class="form-control" type="password" id="signin-password" placeholder="Enter password" required>
                                            <label class="password-toggle-btn" aria-label="Show/hide password">
                          <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                        </label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page content-->
        <!-- Page header-->
        <section class="bg-dark pt-5">
            <div class="container py-5">
                <h1 class="text-light pt-1 pt-md-3 mb-4">Find jobs</h1>
                <!-- Search form-->
                <form class="form-group form-group-light d-block rounded-lg-pill mb-4">
                    <div class="row align-items-center g-0 ms-n2">
                        <div class="col-lg-3 col-xl-4">
                            <div class="input-group input-group-lg border-end-lg border-light"><span class="input-group-text text-light rounded-pill opacity-50 ps-3"><i class="fi-search"></i></span>
                                <input class="form-control" type="text" placeholder="Search site...">
                            </div>
                        </div>
                        <hr class="hr-light d-lg-none my-2">
                        <div class="col-lg-5 d-sm-flex">
                            <div class="dropdown w-sm-50 border-end-sm border-light" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-list me-2"></i><span class="dropdown-toggle-label">Category</span></button>
                                <input type="hidden">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Accounting</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Marketing &amp; PR</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Medicine</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Internet technology</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">HoReCa</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Design, creativity</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Fitness &amp; sports</span></a></li>
                                </ul>
                            </div>
                            <hr class="hr-light d-sm-none my-2">
                            <div class="dropdown w-sm-50 border-end-lg border-light" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">Location</span></button>
                                <input type="hidden">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Dallas</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Chicago</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Houston</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Las Vegas</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Los Angeles</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">New York</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">San Francisco</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <hr class="hr-light d-lg-none my-2">
                        <div class="col-lg-4 col-xl-3 d-flex align-items-center">
                            <div class="dropdown w-50 w-lg-100" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-geo me-2"></i><span class="dropdown-toggle-label">Distance</span></button>
                                <input type="hidden">
                                <ul class="dropdown-menu dropdown-menu-dark my-3">
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">10 miles</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">20 miles</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">30 miles</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">40 miles</span></a></li>
                                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">50 miles</span></a></li>
                                </ul>
                            </div>
                            <button class="btn btn-primary btn-lg w-50 w-lg-auto rounded-pill" type="button">Find jobs</button>
                        </div>
                    </div>
                </form>
                <!-- Search params (dropdowns)-->
                <div class="d-sm-flex justify-content-between pt-2 pb-1 pb-md-3 pb-lg-4">
                    <div class="d-flex flex-column flex-sm-row flex-wrap">
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Publication date</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Most recent</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">5 days</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">15 days</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">1 week</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">1 month</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Job type</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Full-time</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Part-time</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Remote</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Temporary</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Contract</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Internship</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Company</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">IT Pro TV</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Zalo Tech Company</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Elastic Inc.</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Lift Web</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Xbox Company</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">Zapier</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown me-sm-3 mb-2 mb-sm-3" data-bs-toggle="select">
                            <button class="btn btn-translucent-light btn-sm dropdown-toggle fs-base fw-normal w-100 text-start" type="button" data-bs-toggle="dropdown"><span class="dropdown-toggle-label">Salary range</span></button>
                            <ul class="dropdown-menu my-1">
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$500 - $1,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$1,000 - $2,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$2,000 - $5,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$5,000 - $10,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$10,000 - $20,000</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">$20,000 - $50,000</span></a></li>
                            </ul>
                        </div>
                    </div><a class="d-inline-block text-light text-nowrap py-3" href="#">Advanced search</a>
                </div>
            </div>
        </section>
        <!-- Page content-->
        <section class="position-relative bg-white rounded-xxl-4 zindex-5" style="margin-top: -30px;">
            <div class="row justify-content-center pb-sm-2">
                <div class="container col-lg-8 col-xl-7">
                    <!-- Breadcrumb-->
                    <nav class="pb-4 my-2" aria-label="Breadcrumb">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="job-board-home-v1.html">공고목록</a></li>
                            <li class="breadcrumb-item"><a href="job-board-catalog.html">채용정보</a></li>
                            <li class="breadcrumb-item active" aria-current="page" ></li>
                        </ol>
                    </nav>
                    <div class="row">
                        <!-- Signle job content-->
                        <div class="col-lg-12 position-relative pe-lg-5 mb-5 mb-lg-0" style="z-index: 1025;">
                            <div class=" d-flex justify-content-between mb-2">
                                <h2 class="h3 mb-0">{{postDetailValue.postTitle}}</h2>
                              <!--   <div class="text-end"><span class="badge bg-faded-accent rounded-pill fs-sm mb-2">Featured</span>
                                    <div class="fs-sm text-muted">2 hours ago</div> -->
                                     <a class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" href="/post/Insert"><i class="fi-plus me-2"></i>지원하기</a>
                                </div>
                            </div>
                            <ul class="list-unstyled fs-sm mb-4">
                                <li class="mb-2"><a class="d-flex align-items-center text-decoration-none" href="job-board-employer-single.html">
                                <i class="fi-external-link me-2"></i><span class="text-decoration-underline">{{postDetailValue.postUrl }}</span></a></li>
                                <li class="d-flex align-items-center mb-2"><i class="fi-map-pin text-muted me-2"></i><span>{{postDetailValue.postAdd}} </span></li>
                                <li class="d-flex align-items-center mb-2"><i class="fi-cash fs-base text-muted me-2"></i><span>{{postDetailValue.postSal}}</span></li>
                                <li class="d-flex align-items-center mb-2"><i class="fi-phone text-muted me-2"></i><span class="me-2">{{postDetailValue.postEmptype}}</span><a href="#">Show phone</a></li>
                                <li class="d-flex align-items-center mb-2"><i class="fi-clock text-muted me-2"></i><span class="me-2">{{postDetailValue.postAge}}</span></li>
                            </ul>
                            <hr class="mb-4">
                            <h3 class="h6">상세요강:</h3>
                            <p>{{postDetailValue.postHow}}
                            </p>
                            <h3 class="h6 pt-2">포지션 및 자격요건:</h3>
                            <ul class="list-unstyled">
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>{{postDetailValue.postJob}} </li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>근무지는 입니다.  </li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>연봉은 {{postDetailValue.postSal}} 입니다.  </li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>시작일  <fmt:formatDate pattern="YYYY.MM.dd" value="${postDetailValue.postSdate}" /> 입니다.  </li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>마감일  <fmt:formatDate pattern="YYYY.MM.dd" value="${postDetailValue.postFdate}" /> 입니다.  </li>
                               
                            </ul>
                            <!-- <h3 class="h6 pt-2">유의사항:</h3>
                            <ul class="list-unstyled">
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>본 채용은 메타넷 그룹사에서 함께 진행하고 있으며 최종 합격 후 계열 법인으로 입사 결정될 수 있습니다.</li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>근무지는 최종 합격 후 해당 계열 법인 및 프로젝트 사이트에 따라 결정됩니다.(서울/수도권)</li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>입사 지원서 내용 중 허위 사항이 있는 경우 합격이 취소됩니다.</li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>전형 일정은 내부 사정에 따라 조정될 수 있으며, 조정 사항 발생 시 사전 안내 예정입니다.</li>
                                <li class="d-flex"><span class="text-primary fs-lg me-2">&#8226;</span>국가유공자 및 장애인 등 취업보호대상자는 관계 법령에 따라 우대합니다..</li>
                            </ul> -->
                            	
                            <hr class="my-4">
                            <div class="btn-group btn-group-lg">
                                <!-- <button class="ㄹ${post.postTitle}btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3" type="button" onclick="location.href='/post/postModify?postNo=${post.postNo }'"></button> -->
                                <router-link class="btn btn-primary rounded-pill rounded-end-0 ps-4 pe-3" :to="{name: 'PostModify'}" >수정</router-link>
                                <div class="position-relative border-start border-light zindex-5" style="margin-left: -1px;"></div>
                                <!-- <button class="btn btn-primary rounded-pill rounded-start-0 pe-3" type="button" ></button> -->
                                    <router-link class="btn btn-primary rounded-pill rounded-start-0 pe-3" :to="{name: 'PostList'}">목록</router-link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer-->
    
    <!-- Back to top button--><a class="btn-scroll-top" href="#top" data-scroll><span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i class="btn-scroll-top-icon fi-chevron-up">   </i></a>
    <!-- Vendor scrits: js libraries and plugins-->
    <!--<script src="${path}/resources/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="${path}/resources/vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="${path}/resources/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
    <script src="${path}/resources/vendor/tiny-slider/dist/min/tiny-slider.js"></script> -->
    <!-- Main theme script-->
    <!--<script src="js/theme.min.js"></script> -->
</body>

</template>

<script>
export default {
  props:{
    postDetailValue: Object,
  }
}
</script>

<style>

</style>