<template>
  <div class="two-column-section teal-900-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text teal-500 mgb-8 roobert-500">
            SUBSCRIPTIONS
          </div>

          <div class="title-text h2-text neutral-10 roobert-700 mgb-24">
            Ensure automatic recurring payments
          </div>

          <h5 class="description-text h6-text roobert-400 neutral-10">
            Effortlessly set up scheduled transactions to ensure timely
            payments, enhancing customer convenience and revenue predictability.
            Simplify billing processes and provide a seamless experience for
            both you and your customers.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('subscription-hero-img.png', 'landing-v2')"
              alt="Subscription Service"
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
  name: "SubscriptionHeroSection",
};
</script>

<style lang="scss" scoped></style>
