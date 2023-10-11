<template>
  <div class="subscription-service-section item-listing-section green-50-bg">
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
                icon="cash-green-icon.svg"
                title="Convenience"
                description="Effortless bill payments"
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="transaction-green-icon.svg"
                title="Efficiency"
                description="Streamlined billing for businesses."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="calendar-green-icon.svg"
                title="Customisation"
                description="Choose payment dates"
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-md-6">
              <InfoDisplayCard
                icon="check-green-icon.svg"
                title="Reduced churn"
                description="Enhanced customer satisfaction"
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
  name: "SubscriptionService",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.subscription-service-section {
  .title-text {
    width: 80%;
  }
}
</style>
