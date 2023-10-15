<template>
  <div class="fraud-service-section item-listing-section neutral-10-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        What you get with us
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="lock-icon.svg"
            title="Security assurance"
            description="Protect your business and customers from unauthorized transactions and data breaches."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="certified-icon.svg"
            title="Trust building"
            description="Establish trust with your customers by ensuring their sensitive information remains secure."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="cash-icon.svg"
            title="Cost savings"
            description="Avoid financial losses associated with chargebacks, refunds, and legal disputes."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="support-icon.svg"
            title="Customer retention"
            description="Provide a secure environment that encourages repeat business and loyal customers."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="transaction-icon.svg"
            title="Peace of mind"
            description="Enjoy confidence in the security of your transactions and customer data."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="basket-icon.svg"
            title="Customer experience"
            description="Offer a seamless shopping experience without disruptions caused by fraud issues."
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
  name: "FraudServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped></style>
