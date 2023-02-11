<template>
  <div class="paginator-component">
    <div class="d-flex align-items-center">
      <button :disabled="page <= 1" class="btns">
        <img
          class="prev"
          width="28"
          src="@/assets/imgs/next-white.png"
          alt="Prev"
        />
      </button>
      <div class="number-page text-center">
        <small>{{ page }}</small>
      </div>
      <button class="btns">
        <img width="28" src="@/assets/imgs/next-white.png" alt="Next" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const page = parseInt(route.query.page) || 1;
</script>
<style lang="scss" scoped>
.paginator-component {
  .number-page {
    background: #fcfcfc;
    width: 28px;
    height: 28px;
    color: #000;
    border-radius: 4px;
    small {
      font-weight: 700;
    }
  }
  .prev {
    transform: rotate(-180deg);
  }
  .btns {
    background: transparent;
    outline: none !important;
    box-shadow: none !important;
    &:disabled {
      border: none;
      opacity: 0.5;
    }
  }
}
</style>
