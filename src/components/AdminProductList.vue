<template>
      <!-- <body class="hold-transition sidebar-mini">
        <div class="wrapper">
         <Sidebar /> -->

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
                                <a class="btn btn-info btn-sm" href="#">
                                    <i class="fas fa-pencil-alt">
                                    </i>
                                    Edit
                                </a>
                                <a class="btn btn-danger btn-sm" href="#">
                                    <i class="fas fa-trash">
                                    </i>
                                    Delete
                                </a>
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
import {useRouter} from 'vue-router';
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
                name:'/admindetail',
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