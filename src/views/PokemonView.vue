<template>
  <div class="pokemon-view container">
    <button @click="router.go(-1)" class="btn text-white mt-4">Back</button>
    <div class="row justify-content-center py-5">
      <div class="col-lg-8">
        <pokemon-card :item="pokemon" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetPokemon } from "@/stores/pokemon.js";
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PokemonCard from "@/components/pokemon/PokemonCard.vue";

const store = useGetPokemon();
const route = useRoute();
const router = useRouter();

const pokemon = computed(() => {
  return store.pokemon;
});

onMounted(() => {
  store.getPokemon(route.params.id);
});
</script>
