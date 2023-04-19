<template>
  <body>
    <div class="container-fluid px-3">
        <div class="row min-vh-100">
            <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
                <div class="w-100 py-5 px-md-5 px-xxl-6 position-relative">
                    <div class="mb-5"><img class="img-fluid mb-3" src="img/logo-square.svg" alt="..." style="max-width: 4rem;">
                        <h2>로그인</h2>
                    </div>
                    <form @submit.prevent="login" class="form-validate">
                        <div class="mb-4">
                            <label class="form-label" for="id"> 아이디</label>
                            <input class="form-control" v-model="id" name="id" id="id" type="text" placeholder="아이디를 입력해주세요" autocomplete="off" required data-msg="Please enter your email">
                        </div>
                        <div class="mb-4">
                            <div class="row">
                                <div class="col">
                                    <label class="form-label" for="pw"> 비밀번호</label>
                                </div>
                                <div class="col-auto"><a class="form-text small text-primary" href="#">Forgot password?</a></div>
                            </div>
                            <input class="form-control" v-model="pw" name="pw" id="pw" placeholder="비밀번호를 입력해주세요" type="password" required data-msg="Please enter your password">
                        </div>
                        <div class="mb-4">
                            <div class="form-check">
                                <input class="form-check-input" id="loginRemember" type="checkbox">
                                <label class="form-check-label text-muted" for="loginRemember"> <span class="text-sm">Remember me for 30 days</span></label>
                            </div>
                        </div>
                        <!-- Submit-->
                        <div class="d-grid">
                            <button class="btn btn-lg btn-primary">로그인</button>
                        </div>
                        <hr class="my-3 hr-text letter-spacing-2" data-content="OR">
                        <div class="d-grid gap-2">
                            <button class="btn btn btn-outline-primary btn-social"><i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Facebook</span></button>
                            <button class="btn btn btn-outline-muted btn-social"><i class="fa-2x fa-google fab btn-social-icon"> </i>Connect <span class="d-none d-sm-inline">with Google</span></button>
                        </div>
                        <hr class="my-4">
                        <p class="text-center"><small class="text-muted text-center">Don't have an account yet? <a href="signup.html">Sign Up                </a></small></p>
                    </form><a class="close-absolute me-md-5 me-xl-6 pt-5" href="index.html">
                    <svg class="svg-icon w-3rem h-3rem">
                        <use xlink:href="#close-1"> </use>
                    </svg></a>
                </div>
            </div>
            <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
                <!-- Image-->
                <!-- <div class="bg-cover h-100 me-n3" style="background-image: url(img/photo/photo-1497436072909-60f360e1d4b1.jpg);"> -->
                <div class="bg-cover h-100 me-n3" style="background-image: url(img/photo/sample2.png)"></div>
            </div>
        </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';  
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import Swal from "sweetalert2";

export default {
    setup(){
        const router = useRouter();
        // const Swal = require('sweetalert2');
        // const token = ref('');
        const id = ref('');
        const pw = ref('');
        const token = ref('');
        const Swal = require('sweetalert2');

        
        const login = async () =>{
            console.log("login id "+id.value);
            console.log("login pw "+pw.value);

            const data = {
                memId :id.value,
                memPw :pw.value
            }
            const args = JSON.parse(JSON.stringify(data));
            const res = await axios.post('/auth/login',args)
                .then((response) =>{
                    console.log("token 생성 성공" + response.headers.token)
                    sessionStorage.setItem("token", response.headers.token);
                    sessionStorage.setItem("id", id.value);
                     const memberData = async() =>{
                        const res =  axios.post('/auth/members',id);
                        console.log("모든 회원 데이터 " + memberData);
                    }
                    
                        Swal.fire({
                            title: 'Success!',
                            text: '로그인을 성공하였습니다.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                                }).then(() =>{
                                    location.reload();
                                    window.location.href = '/'
                                     // SweetAlert(Swal)의 OK 버튼을 클릭하면 메인 페이지로 이동합니다.
                                     //router.push('/');
                                });
                                token.value = result.headers.token;
                                console.log('아니 여기서 아이디 입력이 제대로 안 되었는데 왜 안 가져오는 거??');
                        if(token.value == ''){
                           Swal.fire({
                            icon: 'error',
                                title: 'Error!',
                                html: '아이디 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요',
                            })
                        }
                        
                })
                .catch((error) => {
                    console.log(error);
                })      
        }

        return{
            id,
            pw,
            login
        }
  }
}
</script>

<style>

</style>