<template>
<div class="container mt-5 mb-md-4 py-5">
  <nav class="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">이력서</li>
    </ol>
  </nav>
  <div class="row justify-content-center pb-sm-2 " >
    <div class="col-lg-11 col-xl-10">
      <h1 class="h2 text-center pb-4 mb-3">My resume</h1>
      <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
        <div class="d-md-flex align-items-center mb-4 pb-md-2">
          <h2 class="h4 mb-md-0"><i class="fi-eye-on text-primary fs-5 mt-n1 me-2 pe-1"></i>{{resumes.resume_title }}</h2>
          <div class="ms-md-auto">
            <div class="dropdown d-lg-none">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fi-align-justify me-1"></i>Actions</button>
              <div class="dropdown-menu dropdown-menu-end my-1"><a class="dropdown-item" href="#">
                <i class="fi-trash me-2"></i>Delete</a>
              </div>
            </div>
            <ul class="list-unstyled d-none d-lg-flex flex-wrap fs-sm mb-0">
              <li class="border-end mb-0"><button type="button"  @click.stop="deleteResume(resumes.resume_no)" id="delete"  class="btn btn-sm text-primary d-none d-lg-block order-lg-3" data-oper='delete' ><i class="fi-trash me-1"></i><span class="align-middle">삭제</span></button></li>
              <li class="border-end mb-0"><button type="button"  @click="resumeUpdate(resumes.resume_no)" class="btn btn-sm text-primary d-none d-lg-block order-lg-3" data-oper="modify"><i class="fi-archive me-1"></i><span class="align-middle">수정</span></button></li>                                  
            </ul>
          </div>
        </div>
        <div class="card shadow-sm p-md-2 mx-n4 mx-md-0">
          <div class="card-body p-4">
           <div class="d-sm-flex justify-content-between align-items-start pb-4">
             <div class="order-sm-1">
               <h3 class="h4 mb-sm-4">김시은</h3>
               <h4 class="h5">기본정보</h4>
              <ul class="list-unstyled text-nav">
                <li><span class='text-muted'>생년월일:</span><fmt:formatDate pattern="YYYY/MM/dd" value ="${member.mem_birth}"/>980705</li>
                <li><span class='text-muted'>휴대폰번호:</span>010-1234-5678</li>
                <li><span class='text-muted'>주소:</span>서울</li>
                <li><span class='text-muted'>이메일:</span>aaa@naver.com</li>
                <li><span class='text-muted'>성별:</span> {{resumes.resume_gender}}</li>
                <li><span class='text-muted'>경력여부:</span> {{resumes.resume_career}}</li>
              </ul>
            </div>
          </div>
          <div class="border-top py-4">
            <h4 class="h5">기술</h4>
            <ul class="list-unstyled text-nav">
              <li><span class='text-muted'> {{resumes.resume_technology}}</span></li>
            </ul>
          </div>                          
          <div class="border-top py-4">
            <h4 class="h5">자기소개서</h4>
            <ul class="list-unstyled text-nav">
              <li><span class='text-muted'> {{resumes.resume_cv}}</span></li>
            </ul>
          </div>                          
         </div>
        </div>
      </div>
    </div>
     </div>
</div>
</template>


<script>
import {useRouter} from 'vue-router';

export default {
  props:{
    resumes: Object,
  },
  
  emits: ['delelte-resume','update-resume'],

  setup(props, {emit}){
    const router = useRouter();

    const deleteResume = (resumeNo) => {
      emit('delete-resume', resumeNo);
    }

     const updateResume = (resumeNo) => {
      emit('update-resume', resumeNo);
    }

    const resumeUpdate = (resumeNo) => {
       router.push({
                name:'ResumeModify',
                params:{
                    id: resumeNo
                }
            })
    }
    return {
      deleteResume,
      updateResume,
      resumeUpdate,
    }
  }
  
  }




</script>

<style>
 body{
    background-color: #f5f4f8;
}

</style>