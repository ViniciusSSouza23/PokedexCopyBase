<template>
  <div class="pokemon-card-component-pokemon-view w-100 p-4">
    <div class="custom-header text-center w-100">
      <img
        width="250"
        class="img-fluid"
        :src="props?.item?.sprites?.front_default"
        :alt="props.item.name"
      />
      <h1 class="text-center mb-5">{{ props.item.name }}</h1>
    </div>
    <div class="custom-body">
      <h3 class="my-4 text-center text-lg-start">Stats:</h3>
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div
          v-for="(stats, index) in props.item.stats"
          :key="index"
          class="d-flex align-items-center justify-content-center justify-content-lg-start size me-lg-4 mb-3"
        >
          <p class="mb-0 pb-0 stat-name me-2">{{ stats.stat.name }}:</p>
          <p class="mb-0 pb-0 stat">{{ stats.base_stat }}</p>
        </div>
      </div>
      <hr />
      <h3 class="my-4 text-center text-lg-start">Types:</h3>

      <div class="d-flex align-items-center flex-wrap">
        <div
          v-for="(type, index) in props.item.types"
          :key="`types-${index}`"
          class="d-flex align-items-center ms-lg-5 justify-content-center justify-content-lg-start me-lg-5 mb-3 size"
        >
          <p class="mb-0 pb-0 stat-name me-2">Type:</p>
          <p class="mb-0 pb-0 stat">{{ type.type.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["item"]);
</script>
<style lang="scss" scoped>
.pokemon-card-component-pokemon-view {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border-radius: 16px;
  color: #000;

  .custom-header {
    border-bottom: 1px solid #000;
    h1 {
      font-family: "pokemon";
      color: #fcfcfc;
    }
  }
  .custom-body {
    .size {
      @media screen and (min-width: 992px) {
        width: 25%;
      }
      @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 50%;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .stat-name {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-transform: capitalize;
    }

    .stat {
      font-weight: 400;
      font-size: 17px;
      text-transform: capitalize;
    }
  }
}
</style>
