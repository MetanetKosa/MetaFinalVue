<template>
  <body class="bg-secondary">
	
  <main class="page-wrapper">

    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
      <!-- Breadcrumb-->
      <nav class="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page"><a href="/post/postGet">공고 등록</a></li>
        </ol>
      </nav>
      <!-- Page content-->
      <form role = "form" method = "post" @submit.prevent="onSave">
      <div class="row justify-content-center pb-sm-2">
        <div class="col-lg-11 col-xl-10">
          <!-- Page title-->
          <div class="text-center pb-4 mb-3">
            <h1 class="h2 mb-4">공고등록</h1>
            <p class="mb-4">공고를 등록할 수 있습니다.</p>
          </div>
          <!-- Step 1: Basic Info-->
          <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 class="h4 mb-4">
              <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>공고 등록
            </h2>
            <div class="row">
              <div class="col-sm-6 mb-4">
                <label class="form-label" for="pr-fn">제목<span
                  class='text-danger'>*</span></label> 
                  <input
                  class="form-control form-control-lg" type="text" 
                  placeholder=""
                  v-model="postTitle"
                  id = 'postTitle' name='postTitle'  required>
              </div>
              <div class="col-sm-6 mb-4">
                <label class="form-label" for="pr-sn">직종<span
                  class='text-danger'>*</span></label> <input
                  class="form-control form-control-lg" type="text" 
                  placeholder=""
                  id = 'postJob' name='postJob'
                  v-model="postJob" required>
              </div>
              <div class="col-sm-6 mb-4">
                <label class="form-label" >연봉/급여<span
                  class='text-danger'>*</span></label> 
                  <input
                  class="form-control form-control-lg" 
                  placeholder="" 
                  v-model="postJob"
                  id = 'postSal' name='postSal' required>
              </div>
              <div class="col-sm-6 mb-4">
                <label class="form-label" for="pr-phone">지원자 연령</label> <input
                  class="form-control form-control-lg" type="text" 
                  placeholder=""
                  v-model="postAge"
                  id = 'postAge' name='postAge'>
              </div>
              <div class="col-sm-6 mb-4">
                <label class="form-label" for="pr-birth-date">접수 시작일<span
                  class='text-danger'>*</span></label>
                <div class="input-group input-group-lg">
                  <input class="form-control date-picker rounded pe-5"
                    type="text" placeholder=""
                    data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}" 
                    id = 'postSdate' name ='postSdate'>
                  <i
                    class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <label class="form-label" for="pr-birth-date">접수 마감일<span
                  class='text-danger'>*</span></label>
                <div class="input-group input-group-lg">
                  <input class="form-control date-picker rounded pe-5"
                    type="text" placeholder=""
                    data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}" 
                    id = "postFdate" name ='postFdate'>
                  <i
                    class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-2">
                <label class="form-label" for="pr-country">경력<span
                  class='text-danger'>*</span></label> <select
                  class="form-select form-select-lg" 
                  id='postCareer' name='postCareer' v-model = "postCareer" required>
                  <option value="" disabled selected></option>
                  <option value="신입">신입</option>
                  <option value="경력">경력</option>
                </select>
              </div>
              <div class="col-sm-6 mb-2">
                <label class="form-label" for="pr-city">고용형태<span
                  class='text-danger'>*</span></label> <select
                  class="form-select form-select-lg" id='postEmptype'
                  name='postEmptype'  v-model = "postEmptype" required>
                  <option value="" disabled selected></option>
                  <option value="정규직">정규직</option>
                  <option value="계약직">계약직</option>
                  <option value="인턴">인턴</option>
                  <option value="파견직">파견직</option>
                </select>
              </div>

              <div class="col-sm-6 mb-2">
                <label class="form-label" for="pr-city">학력조건<span
                  class='text-danger'>*</span></label> <select
                  class="form-select form-select-lg" 
                  id='postEdu' name='postEdu' v-model = "postEdu" required>
                  <option value="" disabled selected></option>
                  <option value="고졸">고졸</option>
                  <option value="초대졸">초대졸</option>
                  <option value="대졸">대졸</option>
                  <option value="대학원">대학원</option>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="form-label" for="pr-address">근무지</label> <input
                  class="form-control form-control-lg" type="text"
                  id='postAdd'  name='postAdd' v-model = "postAdd" placeholder=""/>
              </div>
              <div class="col-12 mb-4">
                <label class="form-label" for="pr-address">지원방법</label> 
                <textarea class="form-control form-control-lg" style= "height:100px" id='postHow' name='postHow' v-model = "postHow" placeholder=""  ></textarea>
              </div>
            </div>

            <div class="border-top pt-4">
              <label class="form-label fw-bold py-2 mb-1" for="pr-position">홈페이지URL</label>
              <input class="form-control form-control-lg mb-4" type="text"  v-model = "postUrl"
                id='postUrl'  name='postUrl' placeholder="URL을 입력해주세요"
                required>

            </div>
            <div style = "align: right">
            <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto"
           type="submit" >등록<i
          class="fi-chevron-right fs-sm ms-2"></i></button>
          </div>
          </div>
        </div>
      </div>
  
      </form>
    </div>

  </main>


  <a class="btn-scroll-top" href="#top" data-scroll><span
    class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i
    class="btn-scroll-top-icon fi-chevron-up"> </i></a>

</body>

</template>

<script>
import axios from 'axios';
import { reactive,ref } from 'vue';
export default {

  setup(){
    const post = ref({
        postTitle: "",
        postJob:"",
        postCareer:"",
        postEmptype:"",
        postAdd:"",
        postSal:"",
        postEdu:"",
        postAge:"",
        postHow:"",
        postUrl:""
    })

    const onSave = async () => {
      // let res;
      // const axios = require('axios');
      
      const data = {
          postTitle: postTitle.value,
          postJob:postJob.value,
          postCareer:postCareer.value,
          postEmptype:postEmptype.value,
          postAdd:postAdd.value,
          postSal:postSal.value,
          postEdu:postEdu.value,
          postAge:postAge.value,
          postHow:postHow.value,
          postUrl:postUrl.value
        };

        //await axios.post(`localhost:8082/postInsert`,data);
              
      } 

      return {
        onSave,
      };
  
  }
}
</script>

<style>
/* @import "./assets/resources/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";
@import "./assets/resources/vendor/simplebar/dist/simplebar.min.js";
@import "./assets/resources/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js";
@import "./assets/resources/vendor/flatpickr/dist/flatpickr.min.js";
@import "./assets/resources/js/theme.min.js"; */
</style>

<!-- console.log("postTitle 값 확인: " +postTitle.value);
console.log("postJob 값 확인: " +postJob.value);
console.log("postCareer 값 확인: " +postCareer.value);
console.log("postEmptype 값 확인: " +postEmptype.value);
console.log("postSal 값 확인: " +postSal.value);
console.log("postEdu 값 확인: " +postEdu.value);
console.log("postAge 값 확인: " +postAge.value);
console.log("postHow 값 확인: " +postHow.value);
console.log("postUrl 값 확인: " +postUrl.value); -->

<!-- // axios.post('http://localhost:8082/postInsert',data);
//       const args = JSON.parse(JSON.stringify(state.form));
//       axios.post("/postInsert", args).then(() => {
//        alert('공고가 등록되었습니다.');
//         router.push({path: "/postList"})
//       }) -->
