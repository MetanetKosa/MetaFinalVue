<template>
        <div class="content-wrapper">
            <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>구매 목록</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">구매 목록</li>
                        </ol>
                    </div>
                </div>
            </div>
                    </section>

            <!-- Main content -->
            <section class="content">

            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                <h3 class="card-title">제품 목록</h3>
                    <div class="card-tools">
                        <router-link class="btn btn-block btn-secondary" :to="{name: 'AdminRegister'}">제품등록</router-link>
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
                            <th style="width: 20%" >
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
                                <a >
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
                                <button type="button" class="btn btn-default"  @click="updateProduct(product.product_no)" >
                                    수정
                                </button>
                                <button type="button" class="btn btn-danger" @click.stop="deleteProduct(product.product_no)" >
                                    삭제
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                 <div class="card-footer">
                    <nav aria-label="Contacts Page Navigation">
                        <ul class="pagination justify-content-center m-0">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">6</a></li>
                        <li class="page-item"><a class="page-link" href="#">7</a></li>
                        <li class="page-item"><a class="page-link" href="#">8</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </section>
        </div>
        <aside class="control-sidebar control-sidebar-dark">
        </aside>
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
      emits: ['delete-product','update-product'],
    setup(props,  {emit}){
         const deleteProduct = (productNo) => {
            emit('delete-product', productNo);
            }

            const updateProduct = (productNo) => {
            emit('update-product', productNo);
            }

            return{
                deleteProduct,
                updateProduct,
            }
    }
}
   
</script>

<style>

</style>