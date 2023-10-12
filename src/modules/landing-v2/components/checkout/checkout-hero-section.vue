<template>
  <div class="checkout-hero-section two-column-section yellow-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text yellow-700 mgb-8 roobert-500">
            CHECKOUT PAYMENTS
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            A smooth checkout boosts satisfaction, cuts abandonment, and drives
            sales
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            A smooth checkout boosts satisfaction, cuts abandonment, and drives
            sales. Our user-friendly interface ensures a hassle-free process,
            enhancing customer satisfaction and driving sales. Elevate your
            business by maximizing conversions through a streamlined checkout
            journey.
          </h5>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div class="image-section position-relative">
            <img
              v-lazy="loadImage('checkout-hero-img.png', 'landing-v2')"
              alt="Checkout payment"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutHeroSection",
};
</script>

<style lang="scss" scoped>
.checkout-hero-section {
  .content-wrapper {
    .copy-content {
      padding-right: toRem(30);

      .description-text {
        width: 95%;
      }
    }

    .image-section {
      width: 94%;
    }
  }
}
</style>
