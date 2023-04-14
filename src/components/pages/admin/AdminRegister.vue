<template>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">

        <!-- Main Sidebar Container -->
        <Sidebar />

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
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
            </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
            <div class="container-fluid">
                <div class="card card-default">
                     <div class="card-header">
                        <h3 class="card-title">제품 등록</h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                             <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                             </button>
                        </div>
                    </div>
                    <div class="card-body">
                    <form  @submit.prevent ="onSave" role="form" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">제조사</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.product_company">
                                    </div>  
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">크기</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.product_size">
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
                            <!-- <div class="form-group row">
                            <label class="col-sm-2 col-form-label">기능</label>
                                <div class="col-sm-10">
                                <select class="form-control select2"  style="width: 100%;">
                                    <option>냉온정수기</option>
                                    <option>냉정수기</option>
                                    <option>온정수기</option>
                                    <option>정수전용</option>
                                    <option>얼음</option>
                                    <option>탄산</option>
                                </select>
                                </div>
                            </div>  -->
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">상세설명서</label>
                                    <div class="col-sm-10">
                                     <input type="text" class="form-control" v-model= "state.form.product_detail">
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
                                    <label class="col-sm-2 col-form-label">제품명</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control"  v-model= "state.form.product_name">
                                    </div>                 
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">출시년월</label>
                                    <div class="col-sm-10">
                                         <div class="input-group date" id="reservationdate" data-target-input="nearest">
                                            <input type="text" class="form-control"  >
                                    <!-- <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/> -->
                                    <!-- <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div> -->
                                         </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">정수방식</label>
                                    <div class="col-sm-10">
                                        <select class="form-control select2" v-model= "state.form.product_method" style="width: 100%;">
                                            <option value="직수형">직수형</option>
                                            <option value="탱크형">탱크형</option>
                                        </select>
                                    </div>
                                </div> 
                                <div class="form-group row">
                                     <label class="col-sm-2 col-form-label">사용설명서</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.product_guide">
                                    </div>                 
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">대표이미지경로</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model= "state.form.img_url">
                                    </div>                  
                                </div>              
                            </div>
                             <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleInputFile">제품 이미지</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>
                                </div>
                             </div> 
                            <div class="col-md-12">
                                <div class="form-group">
                                 <label for="exampleInputFile">제품 사용 설명서</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                         </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>
                        </div>          
                        <!-- <div class="col-md-12">
                            <div class="card card-outline card-info">
                            <div class="card-body">
                                <textarea id="summernote">
                                </textarea>
                                </div>
                            </div>
                        </div>      -->
                    <!-- <button class="btn btn-primary" onclick="stepper.previous()">Previous</button>
                    <button  @click="submit()" class="btn btn-primary">Submit</button> -->
                     
                        <div class="card-header">
                            <h3 class="card-title">상품 정보</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                 </button>
                                 <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                             </div>
                        </div>
                        <div class="card-body p-0">
                                <!-- <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                        <th>번호</th>
                                        <th>모델명</th>
                                        <th>기능명</th>
                                        <th>월 렌탈료(3년 약정기준)</th>
                                        <th>구매가(3년 약정기준)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>175</td>
                                        <td>
                                            <input type="text" class="form-control" placeholder="김철수">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" placeholder="김철수">
                                        </td>
                                        <td>
                                             <input type="text" class="form-control" placeholder="김철수">
                                        </td>
                                        <td>
                                             <input type="text" class="form-control" placeholder="김철수">
                                        </td>
                                        </tr>
                                    </tbody>
                                </table> -->
                                <table class="table table-striped projects">
                                 <thead>
                                     <tr>
                                        <th style="width: 5%">
                                            번호
                                        </th>
                                        <th style="width: 20%">
                                            모델명
                                        </th>
                                        <th style="width: 20%">
                                            기능명
                                        </th>
                                        <th>
                                            월 렌탈료(3년 약정기준)
                                        </th>
                                        <th style="width: 10%" class="text-center">
                                            구매가(3년 약정기준)
                                        </th>
                                        <th style="width: 20%" class="text-center">
                                            <button class="btn btn-info btn-sm" @click="add_tr('table_body')">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                                추가
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody ref="table_body">
                                    <tr>
                                        <td>
                                        1
                                        </td>
                                        <td>                          
                                            <a>
                                                <input type="text" class="form-control">
                                            </a>
                                         </td>
                                        <td>
                                            <ul class="list-inline">
                                            <a>
                                                <input type="text" class="form-control">
                                            </a>
                                            </ul>
                                        </td>
                                         <td class="project_progress">
                                             <input type="text" class="form-control">
                                         </td>
                                         <td class="project-state">
                                            <input type="text" class="form-control">
                                        </td>
                                         <td class="project-actions text-right">
                                            <a class="btn btn-primary btn-sm" href="#">
                                                <i class="fas fa-folder">
                                                </i>
                                                등록
                                            </a>
                                            <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                                수정
                                            </a>
                                            <a class="btn btn-danger btn-sm" href="#">
                                                <i class="fas fa-trash">
                                                </i>
                                                삭제
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                                <!-- <div class="col-md-6">
                                    <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">모델명</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control">
                                        </div>  
                                    </div> -->
                                <!-- <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">월 렌탈료(3년 약정 기준)</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control">
                                    </div>  
                                </div> -->
                                <!-- <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">기능명</label>
                                        <div class="col-sm-10">
                                            <select class="form-control select2"  style="width: 100%;">
                                                <option value="빌트인">빌트인</option>
                                                <option value="데스크탑">데스크탑</option>
                                                <option value="스탠드">스탠드</option>
                                            </select>
                                        </div>
                                </div>                              -->
                                <!-- <div class="form-group row">
                                     <label class="col-sm-2 col-form-label">구매가(3년 약정 기준)</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" >
                                    </div>  
                                </div> --> 
                            </div>
                        </div>
                    </form>
                    <!-- /.row -->
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
        </div>
    </body>
<!-- ./wrapper -->
</template>

<script>
import { ref, computed } from 'vue';
import axios from "axios";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {reactive} from "vue";
import {useRouter} from 'vue-router';

export default {
    components: {
    Sidebar
  },

    setup(){
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
      },
    })
    const submit = () => {
      const args = JSON.parse(JSON.stringify(state.form));
      axios.post("/product/productInsert", args).then(() => {
        console.log("등록되었습니다");
      })
    }

    const add_tr = (table_id) => {
    console.log(table_body.value);
    // let table_body = this.$refs.table_id.value;
    // console.log(table_body);
    // let first_tr   = table_body.firstElementChild;
    // console.log(first_tr);
    // let tr_clone   = first_tr.cloneNode(true);
    // console.log(tr_clone);

    // table_body.append(tr_clone);
    // clean_first_tr(table_body.firstElementChild);
    }
    

    return {
        state, 
        submit,
        add_tr
        }
  
    }
}
</script>

<style>
</style>