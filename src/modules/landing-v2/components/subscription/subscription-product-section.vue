<template>
  <div class="two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Prioritize your products
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Within a unified payments framework, Vesicash’s subscriptions ensure
            automatic tax compliance, fraud protection, and global payment
            optimization. This lets you prioritize product development with
            peace of mind.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('subscription-img-one.png', 'landing-v2')"
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
  name: "SubscriptionProductSection",
};
</script>

<style lang="scss" scoped></style>
