<template>
  <div class="pokemons-view">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
    />
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
      <div class="d-flex justify-content-center">
        <paginator-component @next="nextPage" @prev="prevPage" :page="page" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGetAllPokemons } from "@/stores/pokemons.js";
import { computed, onMounted, ref } from "vue";
import PokemonSmallCard from "@/components/pokemons/PokemonSmallCard.vue";
import PaginatorComponent from "@/components/PaginatorComponent.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useRoute, useRouter } from "vue-router";
const store = useGetAllPokemons();
const route = useRoute();
const router = useRouter();
const page = ref(route.query.page || 1);
const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  if (page.value > 1) {
    store.offset = 20 * page.value;
  } else {
    store.offset = 0;
  }
  store.getPokemons().finally(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  });
});

const pokemons = computed(() => {
  return store.pokemons;
});

function nextPage() {
  isLoading.value = true;
  store.nextPage(page.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 500);

  page.value++;
  router.push({ ...route, query: { page: page.value } });
}

function prevPage() {
  isLoading.value = true;
  page.value--;
  store.prevPage(page.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 500);

  router.push({ ...route, query: { page: page.value } });
}
</script>

<style lang="scss" scoped>
.pokemons-view {
}
</style>
