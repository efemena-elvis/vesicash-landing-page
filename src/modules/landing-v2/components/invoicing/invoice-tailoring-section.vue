<template>
  <div class="invoice-tailoring-section two-column-section green-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Tailor invoices to reflect your brand and client needs.
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Offer your clients a comprehensive cost breakdown and convenient
            payment choices to accelerate your entire accounts receivable cycle.
            Employ our Billing APIs to automate your B2B billing procedures and
            unlock further business expansion.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('invoice-img-two.png', 'landing-v2')"
              alt="B2BInvoice"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceTailoringSection",
};
</script>

<style lang="scss" scoped>
.invoice-tailoring-section {
}
</style>
