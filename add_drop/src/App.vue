<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="m-0 navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
    <img src="./assets/MJU_LOGO.svg.png" alt="" width="150" height="150">
      <a class="navbar-brand" href="#"><router-link to="/"> เมนู </router-link></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><router-link to="/news"> ประกาศข่าว</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/std"> แผนการเรียน </router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/adddrop"> เพิ่มถอน </router-link></a
            >
          </li>
          
          <form class="d-flex" role="search" jus>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </ul>
      </div>
    </div>
  </nav>

  <div><RouterView /></div>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
