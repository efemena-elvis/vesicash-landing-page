<template>
  <div class="container-layout">
    <!-- TAX HERO SECTION -->
    <TaxHeroSection />

    <!-- TAX COLLECTION SECTION -->
    <TaxCollectionSection />

    <!-- TAX SERVICE SECTION -->
    <TaxServiceSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaxHeroSection from "@/modules/landing-v2/components/tax-compliance/tax-hero-section";

export default {
  name: "TaxCompliance",

  components: {
    TaxHeroSection,
    TaxCollectionSection: () =>
      import(
        /* webpackChunkName: "landing-module-tax-v2" */ "@/modules/landing-v2/components/tax-compliance/tax-collection-section"
      ),
    TaxServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-tax-v2" */ "@/modules/landing-v2/components/tax-compliance/tax-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters(),
  },

  methods: {
    ...mapActions(),
  },
};
</script>

<style lang="scss" scoped></style>
