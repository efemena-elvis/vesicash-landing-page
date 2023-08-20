<template>
  <div class="payment-section green-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text primary-1-text roobert-500 mgb-8 green-800">
        PAYMENT INFRASRTRUCTIURE
      </div>

      <div class="description-text grey-900 h2-text roobert-700 mgb-16">
        Billing box
      </div>

      <div class="meta-text h7-text grey-700 roobert-400 mgb-20">
        Expand sales, grow revenue with our payment infrastructure
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payment-card-row row">
        <div class="col-12 col-sm-6 col-md-3">
          <BillingCard
            icon="center-icon.svg"
            title="Payment Options"
            description="Access a complete suite of payment solutions essential for your success - cards, USSD, bank transfers, and mobile money capabilities."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="file-icon.svg"
            title="B2B invoicing"
            description="Easily create and send invoices. Utilize advanced features and APIs to automate your B2B sales procedures."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="bang-icon.svg"
            title="Tax Compliance"
            description="Experience seamless management of your local tax obligations with our expert Merchant of Record Services."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="checkout-icon.svg"
            title="Checkout"
            description="Offer a smooth and safe checkout encounter that boosts customer conversions."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="transfer-icon.svg"
            title="Seamless fund transfers"
            description="Easily initiate single or bulk transfers to bank accounts anywhere in the world."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="subscription-icon.svg"
            title="Subscriptions"
            description="Enable automatic recurring payments for your valued customers with ease."
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <BillingCard
            icon="fraud-icon.svg"
            title="Fraud Prevention"
            description="Mitigate your risk through fraud protection and prevention."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BillingCard from "@/modules/landing-v2/components/home/billing-card";

export default {
  name: "PaymentSection",

  components: {
    BillingCard,
  },
};
</script>

<style lang="scss" scoped>
.payment-section {
  padding: toRem(100) 0 toRem(70);

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
  @include breakpoint-down(sm) {
    padding: toRem(60) 0;
  }

  .title-text {
    letter-spacing: toRem(1);

    @include breakpoint-down(lg) {
      font-size: toRem(14.5);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(12);
    }
  }

  .description-text {
    @include breakpoint-down(lg) {
      font-size: toRem(36);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(32);
    }
  }

  .meta-text {
    line-height: toRem(30);
    width: 30%;

    @include breakpoint-down(lg) {
      width: 50%;
      font-size: toRem(18);
    }

    @include breakpoint-down(sm) {
      width: 100%;
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
