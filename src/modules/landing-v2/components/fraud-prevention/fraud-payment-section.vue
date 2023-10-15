<template>
  <div class="fraud-payment-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('fraud-img-one.png', 'landing-v2')"
              alt="Fraud Prevention"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Full protection for every payment
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            We evaluate multiple factors in every transaction and utilize
            insights to keep you consistently ahead of the game.
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FraudPaymentSection",
};
</script>

<style lang="scss" scoped>
.fraud-payment-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(60);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
        margin-bottom: 0;
      }
    }

    .image-section {
      @include breakpoint-down(md) {
        margin-bottom: toRem(60);
      }
    }
  }
}
</style>
