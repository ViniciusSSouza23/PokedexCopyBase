import { defineStore } from "pinia";
import { ref } from "vue";

export const useGetPokemon = defineStore("pokemon", () => {
  const pokemon = ref({});

  async function getPokemon(id) {
    console.log(id);
    await window.axios.get(`pokemon/${id}`).then((response) => {
      console.log(response.data);
      pokemon.value = response.data;
    });
  }

  return { pokemon, getPokemon };
});
