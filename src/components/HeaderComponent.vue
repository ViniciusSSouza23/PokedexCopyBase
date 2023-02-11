<template>
  <header class="header-component">
    <div class="container pt-2">
      <div class="d-flex aling-items-center">
        <router-link :to="{ name: 'home' }">
          <img
            class="img-fluid d-none d-md-block"
            src="@/assets/imgs/header-logo.png"
            alt="Logo header"
          />
        </router-link>
        <div class="ms-md-5 pt-4 pt-lg-0 d-flex align-items-center">
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="mx-lg-5 mx-3 link" :to="{ name: 'pokemons' }"
            >Pokemons</router-link
          >
          <router-link class="link" :to="{ name: 'search' }"
            >Search</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header-component {
  height: 10vh;
  background: #232526;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
      text-align: center;
    }
  }
  .link {
    &.router-link-exact-active {
      background: rgba(1, 65, 108, 0.05);
      border-bottom: 2px solid #ffcc00;
      color: #ffcc00 !important;
    }
  }
}
</style>
