<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <InvoiceHeroSection />

    <!-- INVOICE BILLING SECTION -->
    <InvoiceBillingSection />

    <!-- INVOICE TAILORING SECTION -->
    <InvoiceTailoringSection />

    <!-- SERVICE SECTION -->
    <InvoiceServiceSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import InvoiceHeroSection from "@/modules/landing-v2/components/invoicing/invoice-hero-section";

export default {
  name: "Invoicing",

  components: {
    InvoiceHeroSection,
    InvoiceBillingSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-billing-section"
      ),
    InvoiceTailoringSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-tailoring-section"
      ),
    InvoiceServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
