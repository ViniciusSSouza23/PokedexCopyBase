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
import { useRoute, useRouter } from "vue-router";
const store = useGetAllPokemons();
const route = useRoute();
const router = useRouter();
const page = ref(route.query.page || 1);

onMounted(() => {
  if (page.value > 1) {
    store.offset = 20 * page.value;
  } else {
    store.offset = 0;
  }
  store.getPokemons();
});

const pokemons = computed(() => {
  return store.pokemons;
});

function nextPage() {
  store.nextPage(page.value);
  page.value++;
  router.push({ ...route, query: { page: page.value } });
}

function prevPage() {
  page.value--;
  store.prevPage(page.value);
  router.push({ ...route, query: { page: page.value } });
}
</script>

<style lang="scss" scoped>
.pokemons-view {
}
</style>
