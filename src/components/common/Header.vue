<template>
    <header class="header">
          <!-- Navbar-->
          <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
              <div class="container">
                  <div class="d-flex align-items-center"><router-link class="navbar-brand py-1" :to="{name: 'Home'}"><img src="img/logo.svg" alt="Directory logo"></router-link>
                      <ul class="navbar-nav ms-auto">
                          <li class="header-menu nav-item dropdown"><a class="nav-link" id="homeDropdownMenuLink" href="/../public/html/index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              제품&nbsp;<i class="fas fa-angle-down"></i></a>
                              <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                  <h6 class="dropdown-header fw-normal">정수기</h6>
                                  <a class="dropdown-item" href="/../public/html/index.html">냉/온 정수기</a>
                                  <a class="dropdown-item" href="/../public/index-2.html">얼음/탄산 정수기</a>
                                  <a class="dropdown-item" href="index-3.html">스탠드 정수기<span class="badge badge-info-light ms-1 mt-n1">New</span></a>
                              </div>
                          </li>
                          <li class="header-menu nav-item"><a class="nav-link" href="/detail">Detail</a>
                          </li>
                          <li class="header-menu nav-item dropdown">
                              <a class="nav-link" id="docsDropdownMenuLink" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">고객지원&nbsp;<i class="fas fa-angle-down"></i></a>
                              <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                  <a class="dropdown-item" href="/../public/html/index.html">사용설명서 찾기</a>
                                  <a class="dropdown-item" href="/../public/index-2.html">A/S 신청</a>
                                  <a class="dropdown-item" href="index-3.html">1:1 문의</a>
                              </div>
                          </li>
                          <li class="header-menu nav-item dropdown">
                              <a class="nav-link" id="docsDropdownMenuLink" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">테스트&nbsp;<i class="fas fa-angle-down"></i></a>
                              <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                  <router-link class="dropdown-item" :to="{name: 'AdminRegister'}">관리자 등록 페이지</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'AdminList'}">관리자 목록 페이지</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'AdminProductDetail'}">관리자 상세 페이지</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'AdminMember'}">관리자 회원관리 페이지</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'Rental1'}">rental1</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'Rental2'}">rental2</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'Rental3'}">rental3</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'Detail'}">상품상세페이지</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'MyProduct'}">마이페이지 첫화면</router-link>
                                  <router-link class="dropdown-item" :to="{name: 'MyPage'}">마이페이지</router-link>
                              </div>
                          </li>
                          <li class="nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block"></li>
                      </ul>
                  </div>
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list"></i></button>
                  <!-- Navbar Collapse -->
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav ms-auto">
                          <li class="mx-5 nav-item" id="headerSearch">
                              <form class="form-inline d-none d-sm-flex" action="#" id="search">
                                  <div class="input-label-absolute input-label-absolute-left input-expand ms-lg-2 ms-xl-3">
                                      <label class="label-absolute" for="search_search"><i class="bi bi-search"></i><span class="sr-only"></span></label>
                                      <input class="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="search_search" placeholder="Search" aria-label="Search" type="search">
                                  </div>
                              </form>
                              <form class="form-inline mt-4 mb-2 d-sm-none" action="#" id="searchcollapsed">
                                  <div class="input-label-absolute input-label-absolute-left w-100">
                                      <label class="label-absolute" for="searchcollapsed_search"><i class="bi bi-search"></i><span class="sr-only">What are you looking for?</span></label>
                                      <input class="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="searchcollapsed_search" placeholder="Search" aria-label="Search" type="search">
                                  </div>
                              </form>
                          </li>
                          <li class="nav-item"><router-link class="nav-link" :to="{name: 'Signup'}">Sign up</router-link></li>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown" href="index.html" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="personIcon"><i class="fas fa-user-alt fa-lg"></i></a>
                              <div class="dropdown-menu" aria-labelledby="homeDropdownMenuLink">
                                  <a class="dropdown-item" href="/mypage">사용중인 제품</a>
                                  <a class="dropdown-item" href="/../public/index-2.html">주문내역</a>
                                  <router-link class="dropdown-item" :to="{name: 'Login'}">로그인</router-link>
                              </div>
                          </li>
                          <li class="nav-item"><a class="nav-link dropdown" href="/" id="mybell"><i class="fas fa-bell fa-lg"></i></a></li>
                          <li class="nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block" id="headerEmpty"></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <!-- /Navbar -->
      </header>
  </template>
  
  <script>
  
  export default {
      name: 'Header'
  }
  </script>
  
  <style>
  
  </style>