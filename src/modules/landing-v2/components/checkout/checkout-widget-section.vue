<template>
  <div class="checkout-widget-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative">
            <img
              v-lazy="loadImage('checkout-img-one.png', 'landing-v2')"
              alt="Checkout Widget"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text green-500 mgb-8 roobert-500">
            START QUICKLY
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Effortlessly integrate checkout widget quickly, no developer
            resources needed.
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Start transactions with no extra coding or new pages. Once live,
            receive ongoing compliance updates, security enhancements, and
            conversion optimizations without manual intervention.
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
.checkout-widget-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(15);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
      }

      .description-text {
        width: 95%;
      }
    }

    .image-section {
      width: 96%;
    }
  }
}
</style>
