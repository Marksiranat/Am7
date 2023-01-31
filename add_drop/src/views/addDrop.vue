<script setup>
import { ref } from "vue";
import { useSubject } from "../stores/addDrop";
import { useBasket } from "../stores/basket";
const { subject } = useSubject();
const { basket, add, drop } = useBasket();

const disabled = ref(false);

function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
}
</script>
<template>
  <div class="container d-flex justify-content-end mt-5 mb-5">
    <div>
      <a data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
        <img
          :class="{ shake: disabled }"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTklEQVR4nO1ZO2gUURQ9REGjbiFRBIt0alBEmyQLWlkFjEIaQWT9JPZ+iPhBcHdVRC3EzwoWESGFImKVQouUIhpRGz+oQRwLFU0wgpiQ3R25cia8DDO7bz6789Q98GDue+fed8/MMu/eWaCBBmqKBQAKAMYAvAPQC3PRC2CUuRaY+wyuALBdIwvzkPXI87JK+MzJNIC9AIq0czAHOeZUZI5p2p9U0htOCkGwwzAxOUWE5AbmKnOvVeIeD6IqJo/kkK+S2263w2HFIcO5bQCmOX8WyT6JjEdOJ/wcTRKTCytCV8w51PfnlAkjwgQx+bhEJCkmH7cIXTHnER9O1kpEPcXUXEQ9xMQmogvAR48axm/4HUxRRpSYFjX8uajnxrWIZUExglagagJ9nPsQII5zA/s8RGQDxJnJP6gQtxi1Ev0eIMYP+nS6Ku5swFwiCfHrDa4H8L8RUw9kRxXidGvSUY4DuAYgFcA3RZ/xiF2pHYcQE2D/c0KsGM6BpIcFHiZ/sxjLORDhOguGAjzWgwDKStC7AJq41qZ81LB5vYprTeQ6axLjQIB9h1xn0CwsZ8CfAJo1grUAmKLPIL8zSfDNXL9D+yGHXN/mWjftMfpKjEkAizX2bWaOZebsiWfcYNaj8kEHuU9pX6B9iPYL2us4bM6BHJs+6r7tGvt2kSs+vjhN0kWNgM5pLndbcIb2EdqvaLdx2JwDOTZ9oDyxtMa+l8g9VYm0kaRRg4W8JXdDJdIc5be+wkAhK8mTamBuNcW3SN5noJD95N2EBnaRfM9AIffJ26kjZCmAEl+HiwwSshDAL+a2DJp4zMDdBgnZQs4jhOg1CgYJuRqmZ+nUaF3rLeQ9OXIQa0NqoS90XG2AkDVc/6rUctoYpHO/z/p6rr90PXp5RQqeK3fQKWdkTn2Nig8YQ2yJ6YV+rktOgbGdzsM+6/N5MAlnRCkgO1zCLKVNKLh+upP0dQ65eT57DZMjOQVGC79sTFXoxbcCmOAmJdffdEsAPFFK9RHOqR+sS1yb4FvJCynmUGROofCAG/VU4EjpvQlAq0/J084h12600rdS+d7DHCSX0DjOIANIDgPMQXIJjbVV2sx6jTJziYRjSkWcxPgG4GhUEQ008L/jN+Cf0+BkONl5AAAAAElFTkSuQmCC"
      /></a>
    </div>
  </div>
  <div class="contianer">
    <div class="row text-center mt-2">
      <div class="col">ชื่อวิชา</div>
      <div class="col">รหัสวิชา</div>
      <div class="col">ห้องเรียน</div>
      <div class="col"></div>
    </div>
    <div class="row text-center mt-2" v-for="n in subject.length">
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].name }}</div>
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].cd }}</div>
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].room }}</div>
      <div class="col">
        <button
          class="btn btn-success"
          @click="
            add(subject[n - 1].name, subject[n - 1].cd, subject[n - 1].room);
            warnDisabled();
          "
        >
          +
        </button>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">รายวิชาที่เลือก</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="contianer">
            <div class="row text-center mt-2">
              <div class="col">ชื่อวิชา</div>
              <div class="col">รหัสวิชา</div>
              <div class="col">ห้องเรียน</div>
              <div class="col"></div>
            </div>
            <div class="row text-center mt-2" v-for="n in basket.length">
              <div class="col" v-if="basket && basket[n - 1]">
                {{ basket[n - 1].name }}
              </div>
              <div class="col" v-if="basket && basket[n - 1]">
                {{ basket[n - 1].code }}
              </div>
              <div class="col" v-if="basket && basket[n - 1]">
                {{ basket[n - 1].room }}
              </div>
              <div class="col">
                <button class="btn btn-danger" @click="drop(n - 1)">-</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-success"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            ยืนบัน
          </button>
          <button
            class="btn btn-danger"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
