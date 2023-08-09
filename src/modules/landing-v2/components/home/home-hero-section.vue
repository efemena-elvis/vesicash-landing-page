<template>
  <div class="hero-container">
    <div class="content-wrapper vesicash-container">
      <div>
        <div class="hero-title h2-text teal-900 mgb-24 roobert-700">
          Imagine a world where you can access new markets in one minute
        </div>

        <div class="hero-description h7-text grey-700 roobert-400 mgb-40">
          Vesicash enable global businesses expand into emerging markets with
          zero paperwork.
        </div>

        <button class="btn btn-lg btn-primary">Create an account</button>
      </div>

      <div class="hero-img-wrapper">
        <img
          v-lazy="loadImage('hero-section-image.png', 'landing-v2')"
          alt="hero-section-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeroSection",
};
</script>

<style lang="scss" scoped>
.hero-container {
  background: getColor("neutral-10");
  padding-top: toRem(80);

  @include breakpoint-custom-down(800) {
    padding-top: toRem(50);
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: toRem(100);

    @include breakpoint-custom-down(800) {
      grid-template-columns: 100%;
    }
  }

  .hero-img-wrapper {
    width: toRem(477);
    max-width: 100%;
    height: 100%;
    max-height: toRem(399);
    margin: auto;

    @include breakpoint-down(xl) {
      width: toRem(420);
    }

    @include breakpoint-down(lg) {
      width: toRem(350);
    }

    @include breakpoint-custom-down(800) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
