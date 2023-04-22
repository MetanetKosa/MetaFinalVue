//   <template>
         <!-- <div class="content-wrapper" style="min-height: 942px; margin-top:130px"> -->
              <!-- <section class="content-header">
             <div class="container-fluid"> -->
                 <!-- <div class="row mb-2"> -->
                  <!-- <div class="container-fluid">
//                     <form action="enhanced-results.html">
//                         <div class="row">
//                             <div class="col-md-10 offset-md-1">                               
//                                 <div class="form-group">
//                                     <div class="input-group input-group-lg">
//                                         <input type="search" class="form-control form-control-lg" placeholder="제품 검색">
//                                         <div class="input-group-append">
//                                             <button type="submit" class="btn btn-lg btn-default">
//                                                 <i class="fa fa-search"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                      </div> -->
                         <!-- <div class="col-sm-6">
                            <h1>제품 목록</h1>
                         </div>
                         <div class="col-sm-6">
                             <ol class="breadcrumb float-sm-right">
                             <li class="breadcrumb-item"><a href="#">Home</a></li>
                             <li class="breadcrumb-item active">제품 목록</li>
                             </ol>
                         </div>
                         </div>
                     </div>
                     </section> -->

             <!-- Main content -->
<!-- //             <section class="content"> -->

<!-- //              Default box 
//             <div class="card">
//                 <div class="card-header">
//                 <h3 class="card-title"></h3>
//                     <div class="d-flex justify-content-between">
//                         <div class="card-tools">
//                             <div class="input-group input-group-sm" style="width: 150px;">
//                                 <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

//                                 <div class="input-group-append">
//                                 <button type="submit" class="btn btn-default">
//                                     <i class="fas fa-search"></i>
//                                 </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <router-link class="btn btn-secondary" :to="{name: 'AdminRegister'}">제품등록</router-link>
//                     </div>
//                 </div>
//                 <div class="card-body p-0">
//                 <table class="table table-striped projects">
//                     <thead>
//                         <tr>
//                             <th style="width: 5%" class="text-center">
//                                 번호
//                             </th>
//                             <th style="width: 20%" class="text-center">
//                                 상품명
//                             </th>
//                             <th style="width: 30%" class="text-center">
//                                 설치형태/정수방식
//                             </th>
//                             <th class="text-center">
//                                 판매량
//                             </th>
//                             <th style="width: 8%" class="text-center">
//                                 등록일
//                             </th>
//                             <th style="width: 20%" >
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody v-for="(product) in products" :key="product.productNo">
//                         <tr>
//                             <td>
//                                {{product.productNo}}
//                             </td>
//                             <td>
//                                 <li class="list-inline-item" >                          
                                       
//                                        <div class="product-image-thumb"> 
                                         
//                                          <img :src="imgSrc(product.imgUrl)" />
                                        
//                                      </div>                                    
//                                 </li>
//                                 <a >
//                                     {{product.productName}}
//                                 </a>
//                             </td>
//                             <td class="text-center">
//                                 <ul class="list-inline">
//                                     <a>
//                                     {{product.productType}}
//                                     </a>
//                                     <a>
//                                     / {{product.productMethod}}
//                                     </a>
//                                 </ul>
//                             </td>
//                             <td class="text-center">
//                                 <a>{{product.productSales}}</a>                             
//                             </td>
//                             <td class="project-state">
//                                 <span>{{new Date(product.regDate).toLocaleDateString()}}</span>
//                             </td>
//                             <td class="project-actions text-right">
//                                  <button type="button" class="btn btn-default"  @click="updateProduct(product)" > 
//                                     <button type="button" class="btn btn-default"  @click="updateProduct(product)" >
//                                     수정
//                                 </button>
//                                 <button type="button" class="btn btn-danger" @click.stop="deleteProduct(product.productNo)" >
//                                     삭제
//                                 </button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 </div>
//                  <div class="card-footer">
//                     <nav aria-label="Contacts Page Navigation">
//                         <ul class="pagination justify-content-center m-0">
//                         <li class="page-item active"><a class="page-link" href="#">1</a></li>
//                         <li class="page-item"><a class="page-link" href="#">2</a></li>
//                         <li class="page-item"><a class="page-link" href="#">3</a></li>
//                         <li class="page-item"><a class="page-link" href="#">4</a></li>
//                         <li class="page-item"><a class="page-link" href="#">5</a></li>
//                         <li class="page-item"><a class="page-link" href="#">6</a></li>
//                         <li class="page-item"><a class="page-link" href="#">7</a></li>
//                         <li class="page-item"><a class="page-link" href="#">8</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//             </section>
//         </div>
//         <aside class="control-sidebar control-sidebar-dark">
//         </aside>
// </template>

// <script>
// import { reactive} from 'vue';
// import axios from "axios";
// import {useRoute, useRouter} from 'vue-router';

// export default {
//     props: {
//         products: Object,
//         default: () => {
//             return {
//                 imgUrl:'',
//                 productNo:'',
//                     productName:'',
//                    regDate:'',
//                    productType:'',
//                    productMethod:''};
//         }
//     },

//       emits: ['delete-product','update-product'],
//     setup(props,  {emit}){
           
//         const router = useRouter();

//         const state = reactive({
//             images: [],
//         });


//          const deleteProduct = (productNo) => {
//             emit('delete-product', productNo);
//          }

//         // const updateProduct = (product) => {   
//         //     console.log(product);        
//         //     router.push({
//         //         name: 'AdminUpdate',
//         //         params: {
//         //             id: product.productNo
//         //         },
//         //         props: {
//         //             products: product
//         //         }
//         //     })
//         // }

//         const updateProduct =async (product) => {   
//              try {
                   
//                     let path = product.productGuide.replaceAll("\\", "/");
//                     await axios.get(`/upload/download?fileName=${path}` ,{     
//                     responseType: 'blob', // 바이너리 데이터를 응답으로 받기 위해 blob 타입으로 설정           
//                     }).then(response => {
//                         const url = window.URL.createObjectURL(new Blob([response.data]));
//                         const link = document.createElement('a');
//                         link.href = url;

//                         // Content-Disposition 헤더에서 파일 이름을 추출하여 다운로드 파일 이름으로 설정
//                         const contentDispositionHeader = response.headers['content-disposition'];
//                         const fileName = decodeURIComponent(contentDispositionHeader.split(';')[1].trim().split('=')[1].replace(/"/g, ''));

//                         link.setAttribute('download', fileName);
//                         document.body.appendChild(link);
//                         link.click();
//                         document.body.removeChild(link);
//                     });
//                     } catch (error) {
//                         console.error(error);
//                     }
//                             }


//         const imgSrc = (url) => {
//         if (url) {
//             let path = url.replaceAll("\\", "/");
//             return `http://localhost:8082/upload/display?fileName=${path}`;
//         }
//         return "";
//         };
      
//       return{
//         imgSrc,
//                 state,
//                 deleteProduct,
//                 updateProduct,
//             }
//     }
// }
   
// </script>

// <style>

// </style> -->