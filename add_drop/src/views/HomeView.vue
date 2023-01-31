<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterView>
      <div class="">
        <div class="container" style="height: 40rem; margin-top: 20%">
          <div class="row gap-3" style="height: 10rem">
            <router-link
              to="/news"
              class="btn btn-danger col d-flex justify-content-center align-items-center"
            >
              <div>
                <a class="text-center">ประกาศข่าว </a>
              </div>
            </router-link>
            <router-link
              to="/std"
              class="btn btn-warning col d-flex justify-content-center align-items-center"
            >
              <div>
                <a class=""> แผนการเรียน </a>
              </div>
            </router-link>
            <router-link
              to="/adddrop"
              class="btn btn-success col d-flex justify-content-center align-items-center"
            >
              <div>
                <a class=""> เพิ่มถอน </a>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </RouterView>
  </div>
</template>
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
