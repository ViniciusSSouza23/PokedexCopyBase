<template>
  <header class="header-component">
    <div class="container pt-2">
      <div class="d-flex aling-items-center">
        <router-link :to="{ name: 'home' }">
          <img
            class="img-fluid"
            src="@/assets/imgs/header-logo.png"
            alt="Logo header"
          />
        </router-link>
        <div class="ms-5 d-flex align-items-center">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link class="mx-5" to="/">Pokemons</router-link>
          <router-link to="/">Search</router-link>
          
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header-component {
  height: 10vh;
  background: #232526;
  a{
    color: #fff;
    text-decoration: none;
    font-size: 20px;
  }
}
</style>
