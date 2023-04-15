<template>
      <!-- <body class="hold-transition sidebar-mini">
        <div class="wrapper">
         <Sidebar /> -->
 <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <form action="enhanced-results.html">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label>기능명</label>
                                    <select class="select2" multiple="multiple" data-placeholder="Any" style="width: 100%;">
                                        <option>냉온정수기</option>
                                        <option>냉정수기</option>
                                        <option>냉온절수기 + 얼음</option> 
                                        <option>냉정절수기 + 얼음</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label>Sort Order:</label>
                                    <select class="select2" style="width: 100%;">
                                        <option selected>ASC</option>
                                        <option>DESC</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label>Order By:</label>
                                    <select class="select2" style="width: 100%;">
                                        <option selected>Title</option>
                                        <option>Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group input-group-lg">
                                <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here" value="Lorem ipsum">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-lg btn-default">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
  </div>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>제품 목록</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">제품 목록</li>
                    </ol>
                </div>
                </div>
            </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">

            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                <h3 class="card-title">제품 목록</h3>

                <div class="card-tools">
                </div>
                </div>
                <div class="card-body p-0">
                <table class="table table-striped projects">
                    <thead>
                        <tr>
                            <th style="width: 5%">
                                번호
                            </th>
                            <th style="width: 20%">
                                상품명
                            </th>
                            <th style="width: 30%">
                                설치형태/정수방식
                            </th>
                            <th>
                                구매/렌탈
                            </th>
                            <th style="width: 8%" class="text-center">
                                등록일
                            </th>
                            <th style="width: 20%">
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(product) in products" :key="product.product_no">
                        <tr>
                            <td>
                               {{product.product_no}}
                            </td>
                            <td>
                                <li class="list-inline-item">
                                        <img alt="Avatar" class="table-avatar" src="../../public/html/dist/img/avatar.png">
                                    </li>
                                <a @click="moveToPage(product.product_no)">
                                    {{product.product_name}}
                                </a>
                            </td>
                            <td>
                                <ul class="list-inline">
                                    <a>
                                    {{product.product_type}}
                                    </a>
                                    <a>
                                    / {{product.product_method}}
                                    </a>
                                </ul>
                            </td>
                            <td class="project_progress">
                                <a>1/1</a>
                              
                            </td>
                            <td class="project-state">
                                <span>{{product.regDate}}</span>
                            </td>
                            <td class="project-actions text-right">
                                <!-- <a class="btn btn-primary btn-sm" href="#">
                                    <i class="fas fa-folder">
                                    </i>
                                    View
                                </a> -->
                                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-lg" >
                                    수정
                                </button>
                                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-lg" >
                                    삭제
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
        <!-- </div>
    </body> -->
</template>

<script>
import {useRoute, useRouter} from 'vue-router';

export default {
    props: {
        products: Object,
        default: () => {
            return {product_no:'',
                    product_name:'',
                   regDate:'',
                   product_type:'',
                   product_method:''};
        }
    },
    setup(props){
         const router = useRouter();

        const moveToPage = (productNo) => {
            console.log(productNo);
            router.push({
                name:'AdminProductDetail',
                params:{
                    id: productNo
                }
            })
           
        }
        return {
        moveToPage,
        }
    }
}
   
</script>

<style>

</style>