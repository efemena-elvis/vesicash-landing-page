<template>
  <div class="escrow-introduction teal-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="top-section row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title secondary-1-text green-500 mgb-8 roobert-500">
            ESCROW TRANSACTIONS
          </div>

          <div class="h2-text grey-900 roobert-700">
            Escrow technology ensures you get value for your B2B and B2C
            payments
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('product-img.png', 'landing')"
              alt="Vesicash Escrow"
              class="wt-100"
            />
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION -->
      <div class="bottom-section">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <InfoDisplayCard
              icon="certified-icon.svg"
              title="Risk elimination"
              description="Utilizing an escrow service enhances elimination of risk between parties involved in the transaction, especially in unfamiliar or international business dealings"
            />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <InfoDisplayCard
              icon="paper-money-icon.svg"
              title="Milestone and instalment payment"
              description="Escrow services enable safe and efficient transactions disbursed in milestones."
            />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <InfoDisplayCard
              icon="lock-icon.svg"
              title="Payment protection"
              description="Escrow services provide a secure and neutral platform, safeguarding both buyers and sellers during high-value transactions."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "EscrowIntroductionSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.escrow-introduction {
  padding: toRem(100) 0;

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(80);
  }

  .content-wrapper {
    .top-section {
      margin-bottom: toRem(100);

      @include breakpoint-down(sm) {
        margin-bottom: toRem(70);
      }

      .copy-content {
        padding: toRem(40);

        @include breakpoint-down(md) {
          padding: toRem(15);
          margin-bottom: toRem(40);
        }

        .title {
          letter-spacing: toRem(1);

          @include breakpoint-down(lg) {
            font-size: toRem(14.5);
          }

          @include breakpoint-down(sm) {
            font-size: toRem(12);
          }
        }

        .description {
          @include breakpoint-down(lg) {
            font-size: toRem(36);
          }

          @include breakpoint-down(sm) {
            font-size: toRem(32);
          }
        }
      }
    }

    .bottom-section {
      .col-12 {
        @include breakpoint-down(md) {
          margin-bottom: toRem(44);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
