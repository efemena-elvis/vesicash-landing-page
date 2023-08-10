<template>
  <div class="mor-introduction teal-900-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="top-section row align-items-center">
        <div class="col-12 col-md-6 col-xl-5 copy-content">
          <div class="title secondary-1-text teal-300 mgb-8 roobert-500">
            MERCHANTS OF RECORDS TECHNOLOGY
          </div>

          <div class="description h2-text neutral-10 roobert-700">
            The MoR Technology enables you to expand into new markets quickly.
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-7">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('mor-frame.png', 'landing-v2')"
              alt="merchant-of-record-introductory"
              class="wt-100"
            />
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION -->
      <div class="bottom-section">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <MoRInfoCard
              icon="ClockIcon"
              title="Faster Time-to-Market"
              description="By taking care of legal, financial, and compliance aspects, we accelerate the speed at which businesses can start selling their products and services in new regions."
            />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <MoRInfoCard
              icon="BangIcon"
              title="Compliance assurance"
              description="At Vesicash our Merchant of Record services ensure adherence to local regulations and tax laws, minimizing legal and financial risks for businesses in these countries"
            />
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <MoRInfoCard
              icon="GlobeIcon"
              title="Global expansion"
              description="As a Merchant of Record, we enable businesses to enter new international markets without the complexities of establishing legal entities in each country."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoRInfoCard from "@/modules/landing-v2/components/home/mor-info-card";

export default {
  name: "MoRIntroductionSection",

  components: {
    MoRInfoCard,
  },
};
</script>

<style lang="scss" scoped>
.mor-introduction {
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
