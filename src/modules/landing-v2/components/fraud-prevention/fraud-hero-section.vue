<template>
  <div class="fraud-hero-section green-50-bg two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text green-500 mgb-8 roobert-500">
            FRAUD PREVENTION
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Boost security: Prevent fraud, reduce risk.
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Mitigate your risk through fraud protection and prevention measures,
            ensuring the security of your transactions. Safeguard your business
            and customers from potential threats with our comprehensive
            approach.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('fraud-hero-img.png', 'landing-v2')"
              alt="Fraud Prevention"
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
  name: "FraudHeroSection",
};
</script>

<style lang="scss" scoped></style>
