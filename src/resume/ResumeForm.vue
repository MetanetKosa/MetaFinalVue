<template>
<div class="container mt-5 mb-md-4 py-5">
      <div class="row justify-content-center pb-sm-2 " >
        <div class="col-lg-11 col-xl-10">
          <div class="text-center pb-4 mb-3">
            <h1 class="h2 mb-4">이력서 등록</h1>
          </div>
          <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 class="h4 mb-4">
                <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>이력서
            </h2>
            <form  @submit.prevent ="onSave" role="form" >
              <div class="row">
                <div class="col-12 mb-4" >
                    <input  class="form-control form-control-lg" 
                    type="text"
                    v-model= "state.form.resume_title"
										placeholder="
                                    이력서 제목을 입력하세요(100자까지 가능)*">
                </div>
                  <div class="order-sm-1">
                    <h4 class="h5">기본정보</h4>
                    <ul class="list-unstyled text-nav">
                     <li><span class='text-muted'>생년월일:980705</span></li>
                      <li><span class='text-muted'>휴대폰번호:010-1234-5678</span></li>
                      <li><span class='text-muted'>주소:서울</span></li>
                      <li><span class='text-muted'>이메일:aaa@naver.com</span></li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <select  class="form-select form-select-lg" id="pr-country"
											v-model= "state.form.resume_gender"
                       required>
					    <option value="" disabled selected>성별*</option>
						<option value="여">여</option>
						<option value="남">남</option>
					</select>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <select  class="form-select form-select-lg" id="pr-city"
											v-model= "state.form.resume_career"
                      
                       required>
											<option value="" disabled selected>경력여부*</option>
											<option value="신입">신입</option>
											<option value="경력">경력</option>
										</select>
                  </div>
                </div>
              <div class="col-12 mb-4">
									<label class="form-label fw-bold pb-1 mb-2">보유기술 및 능력</label> 
                  <input class="form-control form-control-lg" type="text"
										id="pr-address" v-model= "state.form.resume_technology"
                    
										placeholder="보유기술 입력(ex.문서작성능력, java 등)">
							</div>
              <div class="col-12 mb-4">
									<label class="form-label fw-bold pb-1 mb-2">자기소개서</label>
									<textarea  class="form-control form-control-lg" id="pr-address"
										v-model= "state.form.resume_cv" cols="30" rows="10" 
                    placeholder="내용을 입력하세요 "
										style="height: 272px; resize: none;"></textarea>
							</div>
              <div class="d-md-flex align-items-center mb-4 pb-md-2">
									<h2 class="h4 mb-md-0">                      </h2>
									<div class="ms-md-auto">
										<div class="dropdown d-lg-none"></div>
										<ul
											class="list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0">
											<li class="border-end mb-0"><button @click="submit()"
													id="delete"
													class="btn-primary btn-lg rounded-pill ms-sm-auto"
													data-oper='delete'>
													<span class="align-middle" >제출</span>
												</button></li>
											<li class="border-end mb-0"><button type="button"
													class="btn-primary btn-lg rounded-pill ms-sm-auto"
													data-oper="modify">
													<span class="align-middle">취소</span>
												</button></li>
										</ul>
									</div>
								</div>
            </form>
          </div>
        </div>
      </div>
</div>
</template>


<script>
import axios from "axios";
import {reactive} from "vue";
import {useRouter} from 'vue-router';

export default {
  setup(){
  const router = useRouter();
  const state = reactive({
      resumes: [],
      form: {
        resume_title: "",
        resume_gender: "",
        resume_technology: "",
        resume_cv: "",
        resume_career: "",
      }
    })
 
    const submit = () => {
      const args = JSON.parse(JSON.stringify(state.form));
      args.resumes = JSON.stringify(state.resumes);
      axios.post("/users/1/resumes", args).then(() => {
        router.push({path: "/resume"});
      })
    }
 
    return {state, submit}
  }
}
</script>

<style>
 body{
    background-color: #f5f4f8;
}

</style>