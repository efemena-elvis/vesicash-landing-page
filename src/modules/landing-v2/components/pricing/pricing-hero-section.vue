<template>
  <div class="pricing-hero-section">
    <div class="content-wrapper vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h1-text roobert-700 text-center mgb-24 grey-900">
        Our plans and pricing
      </div>

      <!-- DESCRIPTION TEXT -->
      <div class="description-text h6-text roobert-400 text-center grey-700">
        Manage your payments, billing, tax compliance, and additional services
        all included in one package. No additional charges, no undisclosed fees.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingHeroSection",
};
</script>

<style lang="scss" scoped>
.pricing-hero-section {
  padding: toRem(100) 0 toRem(100);

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(80);
  }

  .content-wrapper {
    @include flex-column-center;

    .description-text {
      width: 85%;
    }
  }
}
</style>
