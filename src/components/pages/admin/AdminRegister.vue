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
                                        <input type="text" class="form-control" v-model= "state.form.productName">
                                    </div>  
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">기능</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "state.form.productFunction">
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
                                         <input type="text" class="form-control" v-model= "state.form.productRentalPrice">
                                    </div>  
                                </div>        
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">모델명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control"  v-model= "state.form. productModel" >
                                    </div>  
                                </div>
                                <div class="form-group row">
                                 <label class="col-sm-2 col-form-label">설치형태</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "state.form.productType" style="width: 100%;">
                                            <option value="빌트인">빌트인</option>
                                            <option value="데스크탑">데스크탑</option>
                                            <option value="스탠드">스탠드</option>
                                         </select>
                                    </div>
                                 </div> 
                                 <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">구매가</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.productPrice">
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
                                                <input type="text" class="form-control" v-model= "state.form.productCompany">
                                            </div>  
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">정수방식</label>
                                            <div class="col-sm-10">
                                                <select class="form-control select2" v-model= "state.form.productMethod">
                                                    <option value="직수형">직수형</option>
                                                    <option value="탱크형">탱크형</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">무게</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.productWeight">
                                            </div>  
                                        </div>             
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">출시년월</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.productRdate">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">색상</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.productColor">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">크기</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" v-model= "state.form.productSize">
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
                                            <label for="mainImageInput" ref="mainInput" class="btn btn-default col fileinput-button" >
                                                대표 이미지 등록
                                            </label>
                                            <input id="mainImageInput" type="file" class="sr-only" @change="handleMainChange" >
                                            <label for="addImageInput" class="btn btn-default col fileinput-button" multiple>
                                                <span>추가 이미지 등록</span>
                                            </label>
                                            <input id="addImageInput" type="file" class="sr-only" @change="handleAddChange" multiple>
                                            <label for="detailImageInput" class="btn btn-default col fileinput-button">
                                                <span>상세 이미지 등록</span>
                                            </label>
                                            <input id="detailImageInput" type="file" class="sr-only" @change="handleDetailChange">
                                        </div>                                       
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center">
                                        <div class="fileupload-process w-100">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-white" >
                                    <ul class="mailbox-attachments d-flex align-items-stretch clearfix">
                                         <li   v-for="(image, index) in state.images" :key="index">
                                            <span class="mailbox-attachment-icon">
            
                                                <img :src="image.url" />
                                            </span>
                                            <div class="mailbox-attachment-info">
                                                <a href="#" class="mailbox-attachment-name" >
                                                    {{image.name}}
                                                </a>
                                                <span class="mailbox-attachment-size clearfix mt-1">                                           
                                                    <a href="#" class="btn btn-default btn-sm float-right" @click="deleteImage(index)">
                                                        <i class="fas fa-times"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </li>                                    
                                     </ul>
                                </div>
                            </div>                    
                        <div class="card-header">
                            <h3 class="card-title">사용설명서</h3>
                        </div>
                        <div class="card-body">                                
                            <div class="form-group">
                                <div class="btn btn-default btn-file">
                                    <i class="fas fa-paperclip"></i> 설명서 등록
                                    <input type="file" @change="handleFileChange" accept="application/pdf">
                                </div >                          
                                    <p class="help-block">{{ state.form.productGuide }}</p>                                      
                                    <a href="#" class="btn btn-default btn-sm float-right" v-if="state.form.productGuide" @click="deleteGuide(state.form.detailUrl)">
                                        <i class="fas fa-times"></i>
                                    </a>
                            </div>
                        </div>
                        
                        <div class="card-header">
                            <h3 class="card-title">상세 정보</h3>
                        </div>
                        <div class="card-body">                                
                            <div class="form-group">
                                <textarea class="form-control" id="inputExperience" placeholder="상세정보 입력하세요" v-model= "state.form.productDetail"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary" :to="{name: 'AdminRegister'}">취소</button>
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
import axios from "axios";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {reactive,ref} from "vue";
import {useRouter} from 'vue-router';
import {onMounted } from 'vue';

export default {

    components: {
    Sidebar
  },

    setup(){

 
      const router = useRouter();
      const state = reactive({
      products: [],
      form: {

        productName: "",
        productSize: "",
        productWeight: "",
        productDetail: "",
        productGuide: "",
        productType: "",
        productMethod: "",
       productCompany: "",
        imgUrl:"",
        productSales:"",
        productFunction:"",
        productModel:"",
        productRentalPrice: "",
        productPrice : "",
        productColor :"",
        productGuide:"",
        detailUrl:"",
        produtRdate:"",
       attachList: []
      },
       files:[],
       images:[],

    })

      

    const submit = () => {
      const args = JSON.parse(JSON.stringify(state.form));
      axios.post('/admin/product', args).then(() => {
        console.log("등록되었습니다");
        router.push({path: "/adminlist"});
      })
    }

    //이미지 업로드 처리
    const handleImageUpload = (event, fileType) => {
        const formData = new FormData();
          if (event.target.files) {
            if (fileType !== "files") {
            const file = event.target.files[0];
            formData.append("file", file);
            }
             else {
            const files = event.target.files;
                for (const file of files) {
                    formData.append("files", file);
                }
            }
          }
        axios.post(`/upload/${fileType}`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then((response) => {
            console.log("이미지가 등록되었습니다.");
            if(fileType == "files"){
                console.log(response);
                response.data.forEach((file) => {
                const { uuid, folderPath, fileName } = file;
                state.form.attachList.push({uuid,folderPath,fileName});
                showUploadedImages(file);
             });
            }
            else if(fileType=="file"){
                
                 if(state.form.imgUrl == response.data.fileName){
                   state.form.imgUrl = response.data.folderPath +"/" + response.data.uuid+"_" + response.data.fileName; 
                }
                if( state.form.detailUrl == response.data.fileName){
                    state.form.detailUrl = response.data.folderPath +"/" + response.data.uuid+"_" + response.data.fileName; 
                }
                showUploadedImage(response);
                }

                
            
        })
        .catch(error => {
            console.log(error);
            console.log("이미지 업로드에 실패하였습니다.");
        });
    };

        //대표이미지, 상세이미지 미리보기
        const  showUploadedImage = (response) => {
            const fileCallPath = response.data.folderPath+"/s_"+response.data.uuid+"_"+response.data.fileName;
            const file = {
                name: response.data.fileName,
                url: null,
                path:fileCallPath
            };
             axios.get('/upload/display', { 
                responseType: 'blob',
                params: {  fileName: fileCallPath } })
              .then(response => {
                const reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () =>{
                      file.url = reader.result;
                        state.images.push(file);
                };
            })
            .catch(error => {
                console.error(error);
            });
        }

        //추가파일 미리보기
         const  showUploadedImages = (response) => {
            const fileCallPath = response.folderPath+"/s_"+response.uuid+"_"+response.fileName;
              const file = {
                name: response.fileName,
                url: null,
                path:fileCallPath
            };
             axios.get('/upload/display', { 
                responseType: 'blob',
                params: {  fileName: fileCallPath } })
              .then(response => {
                const reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () =>{
                     file.url = reader.result;
                     console.log(file.url);
                        state.images.push(file);
                };
            })
            .catch(error => {
                console.error(error);
            });
        }

        //업로드한 이미지 삭제
         const deleteImage = (index) => {
            console.log(state.images[index].path);
            let fileName = state.images[index].path
            fileName = fileName.replaceAll("\\", "/");
            fileName = fileName.replaceAll("s_", "");
            console.log(fileName);
            axios.post(`/upload/removeFile?fileName=${fileName}`)
            state.images.splice(index, 1);
            state.images = [...state.images];
        }


        //업로드한 파일 삭제
         const deleteGuide = (guideValue) => {
            console.log(guideValue);
            let guide = guideValue.replaceAll("\\", "/");
            console.log(guide);
            axios.post(`/upload/removeFile?fileName=${guide}`);
            state.form.guide='';
        }

        // 설명서 처리
        const handleFileChange = (event) => {
        const file = event.target.files[0];
        state.form.productGuide = file.name;
        handleImageUpload(event, "guide");
        };

        // 대표 이미지 처리
        const handleMainChange = (event) => {
        const file = event.target.files[0];
        state.form.imgUrl = file.name;
        handleImageUpload(event, "file");
        };

        // 추가 이미지 처리
        const handleAddChange = (event) => {
        state.files = [...state.files, ...event.target.files];
         handleImageUpload(event, "files");
        };

        // 상세 이미지 처리
        const handleDetailChange = (event) => {
        const file = event.target.files[0];
        state.form.detailUrl = file.name;
         handleImageUpload(event, "file");
        };
        
       
    return {
        state, 
        submit,
        handleFileChange,
        handleMainChange,
        handleAddChange,
         handleDetailChange,
         deleteImage,
         deleteGuide
        }
  
    }
}

 
</script>

<style>
</style>