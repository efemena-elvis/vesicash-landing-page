<template>
  <div class="two-column-section teal-900-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text teal-500 mgb-8 roobert-500">
            ESCROW SERVICES
          </div>

          <div class="title-text h2-text neutral-10 roobert-700 mgb-24">
            Escrow technology ensures you get value for your B2B and B2C
            payments
          </div>

          <h5 class="description-text h6-text roobert-400 neutral-10">
            Utilize the power of escrow technology to secure optimal value in
            your B2B and B2C payments. With funds held in escrow until terms are
            met, you gain confidence in transaction outcomes.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('escrow-hero-img.png', 'landing-v2')"
              alt="Escrow Service"
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
  name: "EscrowHeroSection",
};
</script>

<style lang="scss" scoped></style>
