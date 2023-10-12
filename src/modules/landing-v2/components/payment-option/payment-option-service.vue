<template>
  <div class="payment-option-service item-listing-section">
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
                icon="three-circle-icon.svg"
                title="Competitive edge"
                description="Stand out and attract customers."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="up-trend-icon.svg"
                title="Higher Conversions"
                description="Reduce abandoned transactions."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="insight-icon.svg"
                title="Data insights"
                description="Understand customer preferences."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="three-circle-icon.svg"
                title="Convenience"
                description="Customers can choose their preferred method."
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
  name: "PaymentOptionService",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.payment-option-service {
  .title-text {
    width: 80%;
  }
}
</style>
