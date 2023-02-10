<template>
  <div class="home-view container">
    <div class="row py-5 justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-lg-6 order-lg-2">
            <h2 class="mt-5 pt-5 title mb-5">Welcome to the Pokedex</h2>
            <p>
              Hello everyone! Today I would like to introduce my personal
              project, a Pokedex! For those who are unfamiliar, a Pokedex is a
              digital encyclopedia of all the Pokemon creatures in the popular
              Pokemon franchise. My Pokedex will feature detailed information on
              each Pokemon, including their type, abilities, stats, and more.
              So, without further ado, let's dive into the world of Pokemon!
            </p>
            <p>
              If you are a developer feel free to send me suggestions, you can
              also access the code on my
              <a
                href="https://github.com/ViniciusSSouza23"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >
            </p>
          </div>
          <div class="col-lg-6 order-lg-1">
            <img
              class="img-fluid"
              src="@/assets/imgs/home-image.png"
              alt="Pokemon cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-view {
  min-height: 82vh;
  p {
    font-size: 18px;
    line-height: 24px;
  }
  a {
    text-decoration: none;
    color: #ff0;
  }
}
</style>
