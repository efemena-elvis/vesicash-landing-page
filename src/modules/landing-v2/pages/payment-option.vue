<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <PaymentOptionHero />

    <!-- SERVICE SECTION -->
    <PaymentOptionService />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import PaymentOptionHero from "@/modules/landing-v2/components/payment-option/payment-option-hero";

export default {
  name: "PaymentOption",

  components: {
    PaymentOptionHero,
    PaymentOptionService: () =>
      import(
        /* webpackChunkName: "landing-module-payment-v2" */ "@/modules/landing-v2/components/payment-option/payment-option-service"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
