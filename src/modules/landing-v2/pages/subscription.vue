<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <SubscriptionHeroSection />

    <!-- SERVICE SECTION -->
    <SubscriptionServiceSection />

    <!-- PRODUCT SECTION -->
    <SubscriptionProductSection />

    <!-- CUSTOMER SECTION -->
    <SubscriptionCustomerSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import SubscriptionHeroSection from "@/modules/landing-v2/components/subscription/subscription-hero-section";

export default {
  name: "Subscription",

  components: {
    SubscriptionHeroSection,
    SubscriptionServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-service-section"
      ),
    SubscriptionProductSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-product-section"
      ),
    SubscriptionCustomerSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-customer-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
