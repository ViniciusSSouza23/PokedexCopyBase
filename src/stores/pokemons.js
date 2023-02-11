import { ref } from "vue";
import { defineStore } from "pinia";

export const useGetAllPokemons = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const offset = ref(0);

  async function getPokemons() {
    await window.axios
      .get(`/pokemon?offset=${offset.value}&limit=20`)
      .then((response) => {
        const arrUrl = response.data.results.map((c) =>
          window.axios.get(c.url)
        );

        Promise.all(arrUrl).then((response) => {
          pokemons.value = response.map((c) => c.data);
        });
      });
  }

  function nextPage(page) {
    offset.value = 20 * page;
    getPokemons();
  }
  function prevPage(page) {
    if (page > 1) {
      offset.value = page * 20;
      getPokemons();
    } else {
      offset.value = 0;
      getPokemons();
    }
  }

  return { pokemons, getPokemons, nextPage, prevPage, offset };
});
