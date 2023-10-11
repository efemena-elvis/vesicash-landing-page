<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <EscrowHeroSection />

    <!-- VALUE SECTION -->
    <EscrowValueSection />

    <!-- SERVICE SECTION -->
    <EscrowServiceSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import EscrowHeroSection from "@/modules/landing-v2/components/escrow/escrow-hero-section";

export default {
  name: "Escrow",

  components: {
    EscrowHeroSection,
    EscrowValueSection: () =>
      import(
        /* webpackChunkName: "landing-module-escrow-v2" */ "@/modules/landing-v2/components/escrow/escrow-value-section"
      ),
    EscrowServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-escrow-v2" */ "@/modules/landing-v2/components/escrow/escrow-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
