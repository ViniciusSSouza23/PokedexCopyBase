<template>
  <div class="search-view">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
    />
    <div
      class="d-flex flex-md-row flex-column search-header py-5 justify-content-center align-items-center"
    >
      <div class="form-group w-50 py-4 d-flex">
        <input
          v-model="searchTerm"
          class="form-control me-3"
          type="text"
          name="search"
          id="search"
          placeholder="search..."
        />
        <button
          class="btn btn-primary d-none d-md-block"
          type="submit"
          @click.prevent="search"
        >
          Search
        </button>
      </div>
      <button
        class="btn btn-primary w-25 mx-auto d-md-none"
        type="submit"
        @click.prevent="search"
      >
        Search
      </button>
    </div>
    <div class="content container py-5">
      <template v-if="!enter">
        <em> On this screen you can search pokemons by their name</em>
      </template>
      <template v-else>
        <template v-if="canEnter">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4">
              <pokemon-small-card :item="pokemon" />
            </div>
            <template v-if="evolutions">
              <div
                v-for="evolution in evolutions"
                :key="evolution.id"
                class="col-md-6 col-lg-3 mb-4"
              >
                <pokemon-small-card
                  v-if="pokemon.id != evolution.id"
                  :item="evolution"
                />
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <em>No results for: {{ searchTerm }}</em>
        </template>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useSearch } from "@/stores/searchPokemon.js";
import PokemonSmallCard from "@/components/pokemons/PokemonSmallCard.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { ElMessage } from "element-plus";

const store = useSearch();
const searchTerm = ref("");
const enter = ref(false);
const isLoading = ref(false);

const pokemon = computed(() => {
  return store.pokemon;
});
const evolutions = computed(() => {
  return store.evolutions;
});
const canEnter = computed(() => {
  return store.err;
});

function search() {
  if (searchTerm.value) {
    isLoading.value = true;
    store.searchPokemon(searchTerm.value).finally(() => {
      setTimeout(() => {
        enter.value = true;
        isLoading.value = false;
      }, 1100);
    });
  } else {
    ElMessage({
      message: "You need to type something for searches",
      type: "warning",
    });
  }
}
</script>
<style lang="scss" scoped>
.search-view {
  min-height: 85vh;

  .search-header {
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }
}
</style>
