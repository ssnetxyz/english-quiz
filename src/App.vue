<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Welcome<span>ようこそ</span></router-link>
      <router-link to="/schedule">Schedule<span>スケジュール</span></router-link>
      <router-link to="/join" class="join-link">Join<span>申込</span></router-link>
      <router-link to="/access">Location<span>アクセス</span></router-link>
      <a class="phone" href="tel://080-8843-2138">080-8843-2138<span>Contact・連絡</span></a>
      <!-- <router-link to="/tools">Tools<span>ツール</span></router-link> -->
      <!-- <router-link to="/quizzes">Bite-sized lessons<span>一口レッスン</span></router-link> -->      
    </div>    
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
