import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearch = defineStore("search", () => {
  const pokemon = ref({});
  const evolutions = ref([]);
  const chains = ref([]);
  const err = ref(false);

  async function searchPokemon(searchTerm) {
    await window.axios
      .get(`/pokemon/${searchTerm}`)
      .then((response) => {
        pokemon.value = response.data;
        getSpecies(response.data.id);
        err.value = true;
      })
      .catch(() => {
        err.value = false;
        console.log("entrou");
      });
  }
  async function getSpecies(id) {
    await window.axios.get(`/pokemon-species/${id}`).then((response) => {
      getChains(response.data.evolution_chain.url);
    });
  }
  async function getChains(url) {
    await window.axios.get(`${url}`).then((response) => {
      if (!chains.value) {
        chains.value = response.data.chain.evolves_to;
        if (chains.value) {
          const urls = chains.value.map((c) => {
            return `/pokemon/${c.species.name}/`;
          });
          for (let i = 0; i < urls.length; i++) {
            getPokemons(urls[i]);
          }
        }
      } else {
        chains.value = [];
        evolutions.value = [];
        chains.value = response.data.chain.evolves_to;
        if (chains.value) {
          const urls = chains.value.map((c) => {
            return `/pokemon/${c.species.name}/`;
          });
          for (let i = 0; i < urls.length; i++) {
            getPokemons(urls[i]);
          }
        }
      }
    });
  }
  async function getPokemons(name) {
    await window.axios.get(name).then((response) => {
      evolutions.value.push(response.data);
    });
    // await Promise.all(names)
    //   .then((response) => {
    //     console.log(response.data)
    //     evolutions.value = response.map((c) => c.data);
    //   })
    //   .finally(console.log(evolutions.value));
  }

  return { pokemon, evolutions, searchPokemon, err };
});
