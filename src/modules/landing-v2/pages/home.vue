<template>
  <div class="home-container">
    <!-- HOME HERO SECTION -->
    <HomeHeroSection />

    <!-- MOR INTRODUCTION SECTION -->
    <MorIntroductionSection />

    <!-- BUSINESS INCORPORATION SECTION -->
    <BusinessIncorporationSection />

    <!-- TAX SECTION -->
    <TaxSection />

    <!-- CLIENT SECTION -->
    <ClientSection />

    <!-- PAYOUT SECTION -->
    <PayoutSection />

    <!-- ESCROW INTRODUCTION SECTION -->
    <EscrowIntroductionSection />

    <!-- MARKET FEATURE SECTION -->
    <MarketFeatureSection />

    <!-- API DOC SECTION -->
    <APIDocSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import HomeHeroSection from "@/modules/landing-v2/components/home/home-hero-section";
import MorIntroductionSection from "@/modules/landing-v2/components/home/mor-introduction-section";

export default {
  name: "VesicahHomePage",

  components: {
    HomeHeroSection,
    MorIntroductionSection,
    BusinessIncorporationSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/business-incorporation-section"
      ),
    TaxSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/tax-section"
      ),
    ClientSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/client-section"
      ),
    PayoutSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/payout-section"
      ),
    EscrowIntroductionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/escrow-introduction-section"
      ),
    MarketFeatureSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/market-feature-section"
      ),
    APIDocSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/api-doc-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: toRem(70);
}
</style>
