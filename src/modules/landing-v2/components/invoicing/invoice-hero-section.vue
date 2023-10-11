<template>
  <div class="invoice-hero-section two-column-section teal-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text teal-500 mgb-8 roobert-500">
            B2B INVOICING
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Facilitate invoicing on a large scale
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Make invoicing a breeze. Automate B2B sales with advanced features
            and APIs.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('invoice-hero-img.png', 'landing-v2')"
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
  name: "InvoiceHeroSection",
};
</script>

<style lang="scss" scoped>
.invoice-hero-section {
}
</style>
