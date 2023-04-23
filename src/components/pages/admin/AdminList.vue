<template>
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
             <Sidebar />
            <AdminProductList :products="state.products"
            @delete-product="deleteProduct"  @change-page="onChangePage"/>  
        </div>
    </body>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {useRouter, useRoute} from 'vue-router';
import AdminProductList from '@/components/AdminProductList.vue';
export default {
  components: {
    Sidebar,
    AdminProductList
  },
   setup(){
    const state = reactive({
       products: [],
    })
     const route = useRoute();
    const router = useRouter();

    const productNo = route.params.id;

   const getProducts = () => {
      axios
        .get(`/admin/products`)
        .then(({ data }) => {
          state.products = data
        })
        .catch((err) => console.error(err))
    }

    
    getProducts();

     const deleteProduct = async(productNo) => {
        console.log(productNo);
        try{
            await axios.delete(`/admin/product/${productNo}` );
            state.products = state.products.filter(product => product.productNo !== productNo);
           

        }catch(err){
            console.log(err);
        }
       }
        
    return {
      state,
      deleteProduct
      }
  }
}
</script>

<style>

</style>