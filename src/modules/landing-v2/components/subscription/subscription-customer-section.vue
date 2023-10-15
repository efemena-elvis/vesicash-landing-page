<template>
  <div class="subscription-customer-section item-listing-section">
    <div class="vesicash-container">
      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="insight-icon.svg"
            title="Customer insights to boost your bottom line"
            description="Subscription metrics show your customer health scores showing you where and how to grow your customers' spend."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 d-none d-md-block col-md-1"></div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="add-user-icon.svg"
            title="Pause and reactivate customers"
            description="Instead of churning subscribers, pause their accounts and easily reactivate them on their return. Retention reporting tools help you stop churn in its tracks."
            has_border
            is_local_icon
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "SubscriptionCustomerSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.subscription-customer-section {
  padding: 0 0 toRem(110);

  @include breakpoint-down(sm) {
    padding: 0 0 toRem(80);
  }
}
</style>
