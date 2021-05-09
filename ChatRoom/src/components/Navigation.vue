<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container fluid="lg">
      <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>
      <b-collapse
        id="navbar-toggle-collapse"
        class="justify-content-around"
        is-nav
      >
        <div class="login d-flex" v-if="status">
          <b-nav-item @click="toUserBoard">{{ name }}</b-nav-item>
          <b-nav-item to="/" @click="logout">登出</b-nav-item>
        </div>
        <div class="not-login d-flex" v-if="!status">
          <b-nav-item to="/login">登入</b-nav-item>
          <b-nav-item to="/registration">註冊</b-nav-item>
        </div>
      </b-collapse>
    </b-container>
    {{ this.$store.state.status }}
  </b-navbar>
</template>