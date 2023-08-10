<template>
  <div class="payout-section green-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 mgb-24 grey-900 text-center">
        Global payout and settlements
      </div>

      <div
        class="description-text text-center grey-700 h6-text roobert-400 mx-auto"
      >
        Expand sales, grow revenue with our payment infrastructure
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <PayoutCard
            icon="money-icon.svg"
            title="Payment Options"
            description="Access payment solutions essential for your success cards, USSD, bank transfers, and mobile money."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <PayoutCard
            icon="arrow-right-icon.svg"
            title="Seamless Fund Transfers"
            description="Easily initiate single or bulk transfers to bank accounts anywhere in the world."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <PayoutCard
            icon="wallet-icon.svg"
            title="Subscriptions"
            description="Enable automatic recurring payments for your valued customers with ease."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PayoutCard from "@/modules/landing-v2/components/home/payout-card";

export default {
  name: "PayoutSection",

  components: {
    PayoutCard,
  },
};
</script>

<style lang="scss" scoped>
.payout-section {
  padding: toRem(100) 0;

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
  @include breakpoint-down(sm) {
    padding: toRem(60) 0;
  }

  .title-text {
    @include breakpoint-down(lg) {
      @include font-height(38, 44);
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(20) !important;
      @include font-height(34, 42);
    }
  }

  .description-text {
    margin-bottom: toRem(80);
    width: 60%;

    @include breakpoint-down(lg) {
      font-size: toRem(22);
      width: 80%;
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(40) !important;
      font-size: toRem(20);
      width: 95%;
    }

    @include breakpoint-down(sm) {
      margin-bottom: toRem(35) !important;
      font-size: toRem(18.5);
    }
  }

  .col-12 {
    @include breakpoint-down(md) {
      margin-bottom: toRem(44);

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
