<template>
  <div class="paginator-component">
    <div class="d-flex align-items-center">
      <button @click="prev" :disabled="page <= 1" class="btns">
        <img
          class="prev"
          width="28"
          src="@/assets/imgs/next-white.png"
          alt="Prev"
        />
      </button>
      <div class="number-page text-center">
        <small>{{ props.page }}</small>
      </div>
      <button @click="next" class="btns">
        <img width="28" src="@/assets/imgs/next-white.png" alt="Next" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const props = defineProps(["page"]);
const emit = defineEmits(["next", "prev"]);

function next() {
  console.log(props.page);
  emit("next");
}
function prev() {
  emit("prev");
}
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
