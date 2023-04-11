<template>
<body class="bg-secondary">

<main class="page-wrapper">

    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumb-->
        <nav class="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Post
                    resume</li>
            </ol>
        </nav>
        <!-- Page content-->
        <form role = "form" method = "post" action="/post/postModify">
        <div class="row justify-content-center pb-sm-2">
            <div class="col-lg-11 col-xl-10">
                <!-- Page title-->
                <div class="text-center pb-4 mb-3">
                    <h1 class="h2 mb-4">공고수정</h1>
                    <p class="mb-4">공고를 수정할 수 있습니다.</p>
                </div>
                <!-- Step 1: Basic Info-->
                <div class="bg-light rounded-3 p-4 p-md-5 mb-3">
                    <h2 class="h4 mb-4">
                        <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>공고 수정
                    </h2>
                    <div class="row">
                        <div class="col-sm-6 mb-4">
                            <label class="form-label" for="pr-fn">제목<span
                                class='text-danger'>*</span></label> 
                                <input
                                class="form-control form-control-lg" type="text" 
                                placeholder=""
                                value="웹 프론트엔드드 개발 (React)"
                                id = 'postTitle' name='postTitle' required>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <label class="form-label" for="pr-sn">직종<span
                                class='text-danger'>*</span></label> <input value='개발'
                                class="form-control form-control-lg" type="text" 
                                placeholder=""
                                id = 'postJob' name='postJob' required>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <label class="form-label" >연봉/급여<span
                                class='text-danger'>*</span></label> 
                                <input value='4500만원'
                                class="form-control form-control-lg" 
                                placeholder="" 
                                id = 'postSal' name='postSal' required>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <label class="form-label" for="pr-phone">지원자 연령</label> <input
                                class="form-control form-control-lg" type="text" 
                                value='35세'


                                placeholder=""
                                id = 'postAge' name='postAge'>
                        </div>

                        
                        <div class="col-sm-6 mb-4">
                            <label class="form-label" for="pr-birth-date">접수 시작일<span
                                class='text-danger'>*</span></label>
                            <div class="input-group input-group-lg">
                                <input class="form-control date-picker rounded pe-5"
                                    type="text" placeholder=""
                                    data-datepicker-options="{&quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y&quot;, &quot;dateFormat&quot;: &quot;Y-m-d&quot;}" 
                                    id = 'postSdate' name ='postSdate'
                                    value = '2023-03-03'>
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
                                    id = "postFdate" name = 'postFdate'
                                    value='2023-03-29'>
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
                                id='postCareer' name='postCareer' required>
                                <option value="" selected>경력</option>
                                <option value="신입">신입</option>
                                <option value="경력">경력 </option>
                            </select>
                        </div>
                        <div class="col-sm-6 mb-2">
                            <label class="form-label" for="pr-city">고용형태<span
                                class='text-danger'>*</span></label> <select
                                class="form-select form-select-lg" id='postEmptype'
                                 name='postEmptype' required>
                                <option value="" selected>정규직</option>
                                <option value="정규직">정규직</option>
                                <option value="계약직">계약직</option>
                                <option value="인턴">인턴직</option>
                                <option value="파견직">파견직</option>
                            </select>
                        </div>

                        <div class="col-sm-6 mb-2">
                            <label class="form-label" for="pr-city">학력조건<span
                                class='text-danger'>*</span></label> <select
                                class="form-select form-select-lg" 
                                id='postEdu' name='postEdu' required>
                                <option value="" disabled selected>고졸</option>
                                <option value="고졸">고졸</option>
                                <option value="초대졸">초대졸</option>
                                <option value="대졸">대졸</option>
                                <option value="대학원">대학원</option>
                            </select>
                        </div>
                        <div class="col-12 mb-4">
                            <label class="form-label" for="pr-address">근무지</label> <input
                                class="form-control form-control-lg" type="text"
                                id='postAdd'  name='postAdd' placeholder=""
                                pattern="MM/dd" value="서울 종로구"/>
                                <c:out value="${post.postAdd}"/>
                        </div>
                        <div class="col-12 mb-4">
                            <label class="form-label" for="pr-address">지원방법</label> 
                            <textarea class="form-control form-control-lg" style= "height:100px" id='postHow' name='postHow' placeholder='<c:out value="${post.postHow}"/>' >온라인 지원</textarea>
                        </div>
                    </div>

                    <div class="border-top pt-4">
                        <label class="form-label fw-bold py-2 mb-1" for="pr-position">홈페이지URL</label>
                        <input class="form-control form-control-lg mb-4" type="text"
                            id='postUrl'  name='postUrl' placeholder="URL을 입력해주세요"
                            value='www.metajobs.com'
                            required>

                    </div>
                    <div >
                    <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto"
                 type = "submit" 
                 >수정</button>
                 <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto"
                 type = "submit" data-oper='delete' onclick="location.href='/post/postDelete?postNo=${post.postNo }'"
                 >삭제</button>
                 </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation-->
        <!-- <%-- <div
            class="d-flex flex-column flex-sm-row bg-light rounded-3 p-4 px-md-5">
             <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto"
                 type = "submit" 
                 >수정</button>
                <button class="btn btn-primary btn-lg rounded-pill ms-sm-auto"
                 type = "submit" data-oper='delete' onclick="location.href='/post/postDelete?postNo=${post.postNo }'"
                 >삭제</button>
        </div> --%> -->
         <input type='hidden' name='postNo' id= 'postNo' value='<c:out value="${post.postNo }"/>'>
        
        </form>
    </div>

</main>

<!-- Back to top button-->
<a class="btn-scroll-top" href="#top" data-scroll><span
    class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i
    class="btn-scroll-top-icon fi-chevron-up"> </i></a>
<!-- Vendor scrits: js libraries and plugins-->
<!-- <script src="${path}/resources/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="${path}/resources/vendor/simplebar/dist/simplebar.min.js"></script>
<script src="${path}/resources/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
        <script src="${path}/resources/vendor/flatpickr/dist/flatpickr.min.js"></script> -->

<!-- Main theme script-->
<!-- <script src="${path}/resources/js/theme.min.js"></script> -->

</body>


</template>

<script>
export default {

}
</script>

<style>

</style>