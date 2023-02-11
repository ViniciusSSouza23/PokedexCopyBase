<template>
  <div class="pokemons-view">
    <div class="container py-5">
      <div class="row">
        <div
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          class="mb-5 col-md-6 col-lg-3"
        >
          <pokemon-small-card :item="pokemon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetAllPokemons } from "@/stores/pokemons.js";
import { computed, onMounted } from "vue";
import PokemonSmallCard from "@/components/pokemons/PokemonSmallCard.vue";

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
