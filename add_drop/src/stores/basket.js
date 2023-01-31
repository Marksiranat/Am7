import { ref } from "vue";
import { defineStore } from "pinia";

export const useBasket = defineStore("Basket", () => {
  const basket = ref([]);

  const add = (nm,cd,rm) => {
    const sbj = {
        name:nm,
        code:cd,
        room:rm,
    };
    basket.value.push(sbj);

  };
  const drop = (n) => {
basket.value.splice(n,1)
  };
  return { basket , add , drop };
});
