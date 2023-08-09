<template>
  <div class="hero-container">
    <div class="content-wrapper vesicash-container">
      <div>
        <div class="secondary-2-text teal-300 mgb-8 roobert-500 mor-title">
          MERCHANTS OF RECORDS TECHNOLOGY
        </div>

        <div class="h3-text neutral-10 roobert-400">
          The MoR Technology enables you to expand into new markets quickly.
        </div>
      </div>

      <div class="hero-img-wrapper">
        <img
          v-lazy="loadImage('mor-hero-image.png', 'landing-v2')"
          alt="mor-section-image"
        />
      </div>

      <div class="mor-summary-wrapper">
        <div>
          <div class="icon-wrapper mgb-24">
            <ClockIcon />
          </div>
          <div class="h4-text roobert-700 neutral-10 mgb-8">
            Faster Time-to-Market
          </div>
          <div class="summary-description grey-10 roobert-400">
            By taking care of legal, financial, and compliance aspects, we
            accelerate the speed at which businesses can start selling their
            products and services in new regions.
          </div>
        </div>

        <div>
          <div class="icon-wrapper mgb-24">
            <BangIcon />
          </div>
          <div class="h4-text roobert-700 neutral-10 mgb-8">
            Compliance assurance
          </div>
          <div class="summary-description grey-10 roobert-400">
            Our Merchant of Record services ensure adherence to local
            regulations and tax laws, minimizing legal and financial risks for
            businesses.
          </div>
        </div>
        <div>
          <div class="icon-wrapper mgb-24">
            <GlobeIcon />
          </div>
          <div class="h4-text roobert-700 neutral-10 mgb-8">
            Global expansion
          </div>
          <div class="summary-description grey-10 roobert-400">
            As a Merchant of Record, we enable businesses to enter new
            international markets without the complexities of establishing legal
            entities in each country.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClockIcon from "@/shared/components/icon-comps/clock-icon";
import BangIcon from "@/shared/components/icon-comps/bang-icon";
import GlobeIcon from "@/shared/components/icon-comps/globe-icon";

export default {
  name: "MORHeroSection",

  components: {
    ClockIcon,
    BangIcon,
    GlobeIcon,
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  background: getColor("teal-900");
  padding-top: toRem(80);
  padding-bottom: toRem(100);

  @include breakpoint-down(md) {
    padding-top: toRem(50);
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: toRem(50) toRem(47);

    @include breakpoint-down(md) {
      grid-template-columns: 100%;
    }
  }

  .mor-title {
    letter-spacing: toRem(2);
  }

  .hero-img-wrapper {
    width: toRem(656);
    max-width: 100%;
    aspect-ratio: 1.5;
    max-height: toRem(491);
    margin: auto;

    @include breakpoint-down(xl) {
      width: toRem(556);
    }

    @include breakpoint-down(lg) {
      width: toRem(556);
    }

    @include breakpoint-down(md) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .mor-summary-wrapper {
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: toRem(50) toRem(32);
    margin-top: toRem(40);

    .icon-wrapper {
      @include draw-shape(70, 70);
      border-radius: toRem(18);
      border: toRem(2) solid getColor("grey-100");
      background: getColor("neutral-10");
      display: grid;
      place-items: center;
    }

    .summary-description {
      @include font-height(18, 28);
    }
  }
}
</style>
