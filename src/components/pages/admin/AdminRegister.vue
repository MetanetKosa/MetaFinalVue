<template>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">

        <Sidebar />

        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>제품 등록</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">제품 등록</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>

            <section class="content">
            <div class="container-fluid">
                <div class="card card-default">
                     <div class="card-header">
                        <h3 class="card-title">제품 정보</h3>
                    </div>
                    <div class="card-body">
                    <form  @submit.prevent ="onSave" role="form" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">제품명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.product_company">
                                    </div>  
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">기능</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "state.form.product_function">
                                            <option>냉온정수기</option>
                                            <option>냉정수기</option>
                                            <option>냉온정수기+얼음</option>
                                            <option>냉정수기+얼음</option>
                                            <option>정수전용</option>
                                        </select>
                                    </div>
                               </div> 
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">월 렌탈료</label>
                                    <div class="col-sm-10">
                                         <input type="text" class="form-control" v-model= "state.form.product_rentalPrice">
                                    </div>  
                                </div>        
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">모델명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control"  v-model= "state.form. product_model" >
                                    </div>  
                                </div>
                                <div class="form-group row">
                                 <label class="col-sm-2 col-form-label">설치형태</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "state.form.product_type" style="width: 100%;">
                                            <option value="빌트인">빌트인</option>
                                            <option value="데스크탑">데스크탑</option>
                                            <option value="스탠드">스탠드</option>
                                         </select>
                                    </div>
                                 </div> 
                                 <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">구매가</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.product_price">
                                    </div>
                                </div>                            
                            </div>
                            <div class="card-header">
                                <h3 class="card-title">스펙</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">제조사</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.product_company">
                                            </div>  
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">정수방식</label>
                                            <div class="col-sm-10">
                                                <select class="form-control select2" v-model= "state.form.product_method">
                                                    <option value="직수형">직수형</option>
                                                    <option value="탱크형">탱크형</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">무게</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.product_weight">
                                            </div>  
                                        </div>             
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">출시년월</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">색상</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.product_color">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">크기</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.product_size">
                                            </div>  
                                        </div>                                            
                                    </div>
                                </div>
                            </div>
                             <div class="card-header">
                                <h3 class="card-title">제품 이미지</h3>
                            </div>
                            <div class="card-body">
                                <div id="actions" class="row">
                                    <div class="col-lg-6">
                                        <div class="btn-group w-100">
                                        <span class="btn btn-default col fileinput-button">
                                            <span>대표 이미지 등록</span>
                                        </span>
                                        <span class="btn btn-default col fileinput-button">
                                            <span>추가 이미지 등록</span>
                                        </span>
                                         <span class="btn btn-default col fileinput-button">
                                            <span>상세 이미지 등록</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center">
                                        <div class="fileupload-process w-100">
                                            <a>대표이미지1, 추가이미지3, 상세이미지1</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="table table-striped files" id="previews">
                                <div id="template" class="row mt-2">
                                    <div class="col-auto">
                                        <span class="preview"><img src="data:," alt="" data-dz-thumbnail /></span>
                                    </div>
                                    <div class="col d-flex align-items-center">
                                        <p class="mb-0">
                                        <span class="lead" data-dz-name></span>
                                        (<span data-dz-size></span>)
                                        </p>
                                        <strong class="error text-danger" data-dz-errormessage></strong>
                                    </div>
                                    <div class="col-auto d-flex align-items-center">
                                        <div class="btn-group">
                                            <button data-dz-remove class="btn btn-warning cancel">
                                            <i class="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                 </div>
                            </div>
                     
                        <div class="card-header">
                            <h3 class="card-title">사용설명서</h3>
                        </div>
                        <div class="card-body">                                
                            <div class="form-group">
                                <div class="btn btn-default btn-file">
                                    <i class="fas fa-paperclip"></i> 설명서 등록
                                    <input type="file" @change="handleFileChange">
                                </div>
                                 <p class="help-block">{{file.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary" onclick="stepper.previous()">취소</button>
                        <button  @click="submit()" class="btn btn-primary">등록</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
        </div>
    </body>
</template>

<script>
import { ref, onMounted } from 'vue'
import Dropzone from 'dropzone'
import axios from "axios";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {reactive} from "vue";
import {useRouter} from 'vue-router';

export default {
     name: 'MyDropzone',
    components: {
    Sidebar
  },

    setup(){
        const dropzone = ref(null)

    onMounted(() => {
      Dropzone.autoDiscover = false

      const previewNode = document.querySelector('#template')
      previewNode.id = ''
      const previewTemplate = previewNode.parentNode.innerHTML
      previewNode.parentNode.removeChild(previewNode)

      dropzone.value = new Dropzone(document.body, {
        url: '/target-url',
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 20,
        previewTemplate: previewTemplate,
        autoQueue: false,
        previewsContainer: '#previews',
        clickable: '.fileinput-button'
      })

    //   dropzone.value.on('addedfile', (file) => {
    //     file.previewElement.querySelector('.start').onclick = function () {
    //       dropzone.value.enqueueFile(file)
    //     }
    //   })
    })
      const router = useRouter();
      const state = reactive({
      products: [],
      form: {

        product_name: "",
        product_size: "",
        product_weight: "",
        product_detail: "",
        product_guide: "",
        product_type: "",
        product_method: "",
       product_company: "",
        img_url:"",
        product_sales:"",
        product_function:"",
        product_model:"",
        product_rentalPrice: "",
        product_price : "",
        product_color :""
      },
    })
    const submit = () => {
      const args = JSON.parse(JSON.stringify(state.form));
      axios.post("/product/productInsert", args).then(() => {
        console.log("등록되었습니다");
        router.push({path: "/adminlist"});
      })
    }

    reactive({ 
        files:[],
    })

    const handleFileChange=(e) => {
    const formData = new FormData();
    for(const file of e.target.files){
        formData.append("files", file);
        console.log(file);
    }
     axios.post("/upload/file", formData,{
        //파일 업로드는 multipart/form-data 타입 사용 
             headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(() => {
        console.log("등록되었습니다");
        })
        .catch(error => {
            console.log(error);
            console.log("실패입니다");
        });
 }
  
    
    return {
        state, 
        submit,
        handleFileChange,
        dropzone
        }
  
    }
}
</script>

<style>
</style>