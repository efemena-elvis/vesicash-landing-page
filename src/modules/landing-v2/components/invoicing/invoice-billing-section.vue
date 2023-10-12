<template>
  <div class="invoice-billing-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('invoice-img-one.png', 'landing-v2')"
              alt="Invoice Billing"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Seamlessly automate your B2B billing
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Streamline invoice creation and issuance, along with related
            processes, through automation. Leverage robust Billing APIs
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceBillingSection",
};
</script>

<style lang="scss" scoped>
.invoice-billing-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(60);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
      }
    }
  }
}
</style>
