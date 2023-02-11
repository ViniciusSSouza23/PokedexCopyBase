<template>
  <div class="pokemon-small-card-component w-100">
    <router-link :to="{ name: 'pokemon', params: { id: props.item.id } }">
      <div class="custom-card position-relative w-100">
        <div class="custom-header position-relative">
          <img
            width="150"
            class="img-fluid img-position"
            :src="props.item.sprites.front_shiny"
            alt=""
          />
        </div>
        <div class="custom-body">
          <h6 class="text-dark px-4 py-3">{{ props.item.name }}</h6>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps(["item"]);
</script>
<style lang="scss" scoped>
.pokemon-small-card-component {
  .custom-card {
    .custom-header {
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

      height: 0;
      padding-bottom: 60%;
      border-radius: 16px 16px 0px 0px;
      .img-position {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .custom-body {
      background: #dadada;
      height: 0;
      padding-bottom: 20%;
      border-radius: 0px 0px 16px 16px;
      h6 {
        text-transform: capitalize;
        font-family: "pokemon";
        font-weight: 700;
      }
    }
  }
}
</style>
