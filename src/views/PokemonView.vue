<template>
  <div class="pokemon-view container">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
    />
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
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const store = useGetPokemon();
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);

const pokemon = computed(() => {
  return store.pokemon;
});

onMounted(() => {
  isLoading.value = true;
  store.getPokemon(route.params.id);
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>
