<template>
  <div class="pokemons-view">
    <div class="container py-5">
      <div class="row">
        
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetAllPokemons } from "@/stores/pokemons.js";
import { computed, onMounted } from "vue";

const store = useGetAllPokemons();

onMounted(() => {
  store.getPokemons();
});
const pokemons = computed(() => {
  return store.pokemons;
});
</script>

<style lang="scss" scoped>
.pokemons-view {
}
</style>
