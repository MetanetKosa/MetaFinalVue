<template>
   <header class="navbar navbar-expand-lg navbar-light fixed-top" data-scroll-header style="background-color: white;">
            <div class="container">
                <router-link class="nav-link " :to="{name: 'Home'}" ><img class="d-block" src="img/logo/metajobs_logo.png" width="116" alt="Finder"></router-link>
                <!-- <a class="navbar-brand me-3 me-xl-4" href="${path}/"><img class="d-block" src="img/logo/logo-dark.svg" width="116" alt="Finder"></a> -->
                
                <!-- ************************************* 로그인 로그아웃 버튼 -->
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                
                
                <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
                    <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
                        <!-- Menu-->
                        
                        <li class="nav-item dropdown me-lg-2">
                            <a class="nav-link align-items-center pe-lg-4" href="${path}/post/postGet" >
                                <!-- <i class="fi-layers me-2"></i>공고 등록 -->
                                <router-link class="nav-link fi-layers me-2" :to="{name: 'PostInsert'}" >공고 등록</router-link>
                                <span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end" style="width: 1px; height: 30px;"></span>
                            </a>
                        </li>
                        <li class="nav-item dropdown me-lg-2">
                            <a class="nav-link  align-items-center pe-lg-4" href="${path}/post/postList" >
                                <!-- <i class="fi-layers me-2"></i>공고 목록 -->
                                <router-link class="nav-link fi-layers me-2" :to="{name: 'PostList'}" >공고 목록</router-link>
                                <span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end" style="width: 1px; height: 30px;"></span>
                            </a>
                        </li>
                        <li class="nav-item dropdown me-lg-2">
                            <a class="nav-link align-items-center pe-lg-4" href="${path}/review/reviewList" >
                                <!-- <i class="fi-layers me-2"></i> -->
                                <router-link class="nav-link fi-layers me-2 px-1" :to="{name: 'Review'}">면접 후기</router-link>
                                <span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end" style="width: 1px; height: 30px;"></span>
                            </a>
                        </li>

                        <li class="nav-item dropdown me-lg-2">
                            <a class="nav-link align-items-center pe-lg-4" href="${path}/resume/resumeList?mem_no=1" >
                                <!-- <i class="fi-layers me-2"></i> -->
                                <router-link class="nav-link fi-layers me-2" :to="{name: 'Resumes'}">나의 이력서</router-link>
                            </a>
                        </li>

                        <!-- <router-link class="nav-link fi-layers me-2" :to="{name: 'PostDetail'}" >공고 목록</router-link>
                        <router-link class="nav-link fi-layers me-2" :to="{name: 'PostModify'}" >공고 목록</router-link> -->
                        <!-- <li class="nav-item d-lg-none"><a class="nav-link" href="#signin-modal" data-bs-toggle="modal">Sign in</a></li> -->
                    
                        
                        
                    </ul>																						
                
                
                    <!-- <div class="login" v-if="${login == null}"></div> -->
                    <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#"><i class="fi-user me-2"></i><router-link class="nav-link" :to="{name: 'SignIn'}">Sign in</router-link></a>
                	<a class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" href="#"><i class="fi-plus me-2"></i><router-link class="nav-link" :to="{name: 'SignUp'}">Sign<span class='d-none d-sm-inline'> Up</span></router-link></a>

                    
                    <!-- <span>김가람&nbsp;님&nbsp;&nbsp;환영합니다&nbsp;:)&nbsp;</span> -->
                    <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#"><i class="fi-user me-2"></i><router-link class="nav-link" :to="{name: 'MyPage'}">My<span class='d-none d-sm-inline'> Page</span></router-link></a>
                	<a class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" @click="logOut" href="#"><i class="fi-minus me-2"></i><router-link class="nav-link" :to="{name: 'Home'}">Sign<span class='d-none d-sm-inline'> Out</span></router-link></a>

                <!-- 로그인하지 않은 상태 -->
                <c:if test = "${member == null}">
                <!-- <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a> -->
                	<!-- <a class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" href="#signup-modal" data-bs-toggle="modal"><i class="fi-plus me-2"></i>Sign<span class='d-none d-sm-inline'> Up</span></a> -->
                </c:if>
                
                <!-- 로그인 한 상태 -->
                <c:if test = "${member != null}">
               		<!-- <button id="login" a href="login.do" class="btn btn-primary btn-lg rounded-pill w-100" type="button">Sign out</button> -->
               		<!-- <span>${member.mem_name}&nbsp;님&nbsp;&nbsp;환영합니다&nbsp;:)&nbsp;</span> -->
               		<!-- <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" href="#modal-myPage" data-bs-toggle="modal"><i class="fi-user me-2"></i>마이 페이지</a> -->
                	<!-- <a href="/logout" class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3"><i class="fi-minus me-2"></i>Sign<span class='d-none d-sm-inline'> Out</span></a> -->
                </c:if>
                
               
                </div>
            </div>
        </header>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();

        const logOut = () => {
            axios.get("/api/users/logout");
            alert("로그아웃 완료");
            // router.push({
            //     name: "Home"
            // })
        }

        return {
            logOut,
        }
    }

}
</script>

<style>
.page-loading {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: all .4s .2s ease-in-out;
        transition: all .4s .2s ease-in-out;
        background-color: #fff;
        opacity: 0;
        visibility: hidden;
        z-index: 9999;
    }
    
    .page-loading.active {
        opacity: 1;
        visibility: visible;
    }
    
    .page-loading-inner {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: opacity .2s ease-in-out;
        transition: opacity .2s ease-in-out;
        opacity: 0;
    }
    
    .page-loading.active>.page-loading-inner {
        opacity: 1;
    }
    
    .page-loading-inner>span {
        display: block;
        font-size: 1rem;
        font-weight: normal;
        color: #666276;
        ;
    }
    
    .page-spinner {
        display: inline-block;
        width: 2.75rem;
        height: 2.75rem;
        margin-bottom: .75rem;
        vertical-align: text-bottom;
        border: .15em solid #bbb7c5;
        border-right-color: transparent;
        border-radius: 50%;
        -webkit-animation: spinner .75s linear infinite;
        animation: spinner .75s linear infinite;
    }
    
    @-webkit-keyframes spinner {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
    @keyframes spinner {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    
</style>