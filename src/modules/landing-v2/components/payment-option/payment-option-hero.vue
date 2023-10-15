<template>
  <div class="payment-option-hero two-column-section green-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text green-500 mgb-8 roobert-500">
            PAYMENT OPTIONS
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Access a complete suite of payment solutions essential for your
            success
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            With our suite of offerings, you will have the tools needed to
            optimize transactions, enhance customer experiences, and drive
            growth. Streamline payments, increase efficiency, and unlock your
            business's full potential.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('payment-hero-img.png', 'landing-v2')"
              alt="Payment Option"
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
  name: "PaymentOption",
};
</script>

<style lang="scss" scoped>
.payment-option-hero {
}
</style>
