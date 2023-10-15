<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <CheckoutHeroSection />

    <!-- WIDGET SECTION -->
    <CheckoutWidgetSection />

    <!-- SERVICE SECTION -->
    <CheckoutServiceSection />

    <!-- JOURNEY SECTION -->
    <CheckoutJourneySection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import CheckoutHeroSection from "@/modules/landing-v2/components/checkout/checkout-hero-section";

export default {
  name: "Checkout",

  components: {
    CheckoutHeroSection,
    CheckoutWidgetSection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-widget-section"
      ),
    CheckoutServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-service-section"
      ),
    CheckoutJourneySection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-journey-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
