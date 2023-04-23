 <template>
   <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4"  style="position:fixed">
            <!-- Brand Logo -->
            <a href="../../../../public/html/index3.html" class="brand-link">
            <img  class="brand-image img-circle elevation-3">
            <span class="brand-text font-weight-light">Metawater</span>
            </a>

            <div class="sidebar">

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        회원 관리
                        <i class="right fas fa-angle-left"></i>
                    </p> 
                    </a>
                </li> -->
                <li class="nav-item">
                    <a data-widget="expandable-table"  class="nav-link">
                    <i class="nav-icon fas fa-copy"></i>
                    <router-link :to="{name: 'AdminList'}">
                        <p>   제품 관리</p> 
                    </router-link>
                    <!-- <i class="fas fa-angle-left right"></i> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link">
                    <i class="nav-icon fas fa-chart-pie"></i>
                    <router-link :to="{name: 'AdminRegister'}">
                        제품 등록
                    </router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                    <i class="nav-icon fas fa-chart-pie"></i>
                    <router-link :to="{name: 'AdminOrder'}">
                        주문 관리
                    </router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                   
                    <p>
                        

                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="../UI/general.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>General</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/icons.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Icons</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/buttons.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Buttons</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/sliders.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Sliders</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/modals.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Modals & Alerts</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/navbar.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Navbar & Tabs</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/timeline.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Timeline</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../UI/ribbons.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Ribbons</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <!-- <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-edit"></i>
                    <p>
                        리뷰/문의 관리
                        <i class="fas fa-angle-left right"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="../forms/general.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>General Elements</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../forms/advanced.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Advanced Elements</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../forms/editors.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Editors</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="../forms/validation.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Validation</p>
                        </a>
                    </li>
                    </ul>
                </li> -->
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
 </template>
 
 <script>
 export default {
    name: 'Sidebar'
 }
 </script>
 
 <style>
 
 </style>
 