<template>
      <body class="hold-transition sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">
       
            <!-- Main Sidebar Container -->
             <Sidebar />
            <AdminProductList :products="state.products"/>  
        </div>
    </body>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Sidebar from '@/components/pages/admin/Sidebar.vue';
import {useRouter} from 'vue-router';
import AdminProductList from '@/components/AdminProductList.vue';
export default {
  components: {
    Sidebar,
    AdminProductList
  },
   setup(){
    const state = reactive({
      products: []
    })

    axios.get("/product/products").then(({data}) =>{
      state.products = data;
      console.log(data);
    });
    return {state}
  }
}
</script>

<style>

</style>