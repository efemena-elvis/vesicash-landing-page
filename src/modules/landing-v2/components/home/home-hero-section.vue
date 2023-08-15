<template>
  <div class="hero-container">
    <div class="content-wrapper vesicash-container">
      <div>
        <div class="hero-title h1-text grey-900 mgb-24 roobert-700">
          Imagine a world where you can access new markets in minutes
        </div>

        <div class="hero-description h6-text grey-700 roobert-400 mgb-40">
          Vesicash enables global businesses, expand into emerging markets with
          zero paperwork.
        </div>

        <a
          class="btn btn-lg btn-primary"
          href="https://app.vesicash.com/register-lander"
          target="_blank"
          >Create an account</a
        >
      </div>

      <div class="hero-img-wrapper">
        <MoRGlobe />
      </div>
    </div>
  </div>
</template>

<script>
import MoRGlobe from "@/shared/components/icon-comps/mor-globe";

export default {
  name: "HomeHeroSection",

  components: {
    MoRGlobe,
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  background: getColor("neutral-10");
  padding-top: toRem(130);
  padding-bottom: toRem(150);

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: toRem(100);

    @include breakpoint-down(lg) {
      gap: toRem(40);
    }

    @include breakpoint-down(md) {
      grid-template-columns: 100%;
    }

    .hero-title {
      @include breakpoint-down(xl) {
        @include font-height(52, 58);
      }

      @include breakpoint-down(lg) {
        @include font-height(46, 54);
      }

      @include breakpoint-down(md) {
        @include font-height(48, 54);
        text-align: center;
      }

      @include breakpoint-down(sm) {
        @include font-height(42, 54);
      }
    }

    .hero-description {
      @include breakpoint-down(xl) {
        @include font-height(20, 28);
      }

      @include breakpoint-down(md) {
        text-align: center;
        width: 80%;
        margin: 0 auto;
      }

      @include breakpoint-down(sm) {
        @include font-height(19, 28);
        width: 90%;
      }
    }

    .btn {
      padding: toRem(13) toRem(42);

      @include breakpoint-down(md) {
        margin: 0 auto;
      }
    }

    .hero-img-wrapper {
      @include breakpoint-down(md) {
        margin-top: toRem(40);
        @include flex-row-center-nowrap;
      }

      svg {
        width: toRem(504);
        height: toRem(431);

        @include breakpoint-down(sxl) {
          width: toRem(450);
          height: toRem(380);
        }

        @include breakpoint-down(lg) {
          width: toRem(420);
          height: toRem(350);
        }
      }
    }
  }
}
</style>
