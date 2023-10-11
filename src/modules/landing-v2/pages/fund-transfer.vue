<template>
  <div class="container-layout">
    <!-- HERO SECTION -->
    <TransferHeroSection />

    <!-- SERVICE SECTION -->
    <TransferServiceSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TransferHeroSection from "@/modules/landing-v2/components/fund-transfer/transfer-hero-section";

export default {
  name: "FundTransfer",

  components: {
    TransferHeroSection,
    TransferServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-transfer-v2" */ "@/modules/landing-v2/components/fund-transfer/transfer-service-section"
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
