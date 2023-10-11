<template>
  <div class="checkout-service-section item-listing-section green-50-bg">
    <div class="vesicash-container">
      <div class="row">
        <div class="col-12 col-md-4">
          <!-- TITLE TEXT -->
          <div class="title-text h2-text roobert-700 grey-900">
            What you get with us
          </div>
        </div>

        <div class="col-12 col-md-8">
          <!-- PAYOUT CARD ROW -->
          <div class="payout-card-row row">
            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="up-trend-green-icon.svg"
                title="Higher Conversions"
                description="Increased successful transactions."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="three-circle-green-icon.svg"
                title="Payment variety"
                description="Multiple methods suits all customers."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="mobile-green-icon.svg"
                title="Mobile friendly"
                description="Responsive design for mobile users."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="square-check-green-icon.svg"
                title="Order review"
                description="Prevents mistakes before confirming."
                has_border
                is_local_icon
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "CheckoutServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.checkout-service-section {
  .title-text {
    width: 80%;
  }
}
</style>
