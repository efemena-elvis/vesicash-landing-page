<template>
  <div class="tax-service-section item-listing-section teal-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        What you get with us
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="bang-icon.svg"
            title="Peace of mind"
            description="Ensure full compliance with tax regulations, eliminating concerns and potential penalties."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="business-icon.svg"
            title="Reduced burden"
            description="Let us handle complex tax matters, allowing you to focus on your core business."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="spiral-icon.svg"
            title="Risk mitigation"
            description="Minimize the risk of errors and non-compliance, safeguarding your financial interests."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="certified-icon.svg"
            title="Trustworthy partner"
            description="Benefit from our expertise in navigating intricate tax landscapes."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="stack-icon.svg"
            title="Simplified process"
            description="Streamline tax-related tasks and avoid unnecessary complications."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="transaction-icon.svg"
            title="Confident transactions"
            description="Engage in transactions with confidence, knowing that tax obligations are met."
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
  name: "TaxServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style></style>
