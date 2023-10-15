<template>
  <div class="escrow-service-section item-listing-section green-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        What you get with us
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="certified-green-icon.svg"
            title="Risk elimination"
            description="Utilizing an escrow service enhances elimination of risk between parties involved in the transaction, especially in unfamiliar or international business dealings."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="cash-green-icon.svg"
            title="Milestone and installment payment"
            description="Escrow services enable safe and efficient transactions disbursed in milestones."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="lock-green-icon.svg"
            title="Payment protection"
            description="Escrow services provide a secure and neutral platform, safeguarding both buyers and sellers during high-value transactions."
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
  name: "EscrowServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style></style>
