import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://pokeapi.co/api/v2";

window.axios.defaults.timeout = 1000 * 60 * 5;
export const useGetAllPokemons = defineStore("pokemons", () => {
  const pokemons = ref([]);

  async function getPokemons() {
    await window.axios.get("/pokemon").then((response) => {
      this.pokemons = response.data.results;
      console.log(response.data);
    });
  }
  return { pokemons, getPokemons };
});