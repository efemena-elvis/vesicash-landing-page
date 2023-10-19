<template>
  <div class="container-layout">
    <template v-if="getPaymentOptionsPage">
      <!-- HERO SECTION -->
      <PaymentOptionHero />

      <!-- SERVICE SECTION -->
      <PaymentOptionService />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getPaymentOptionsPage.onboarding" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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

  computed: {
    ...mapGetters({ getPaymentOptionsPage: "cms/getPaymentOptionsPage" }),
  },

  async mounted() {
    if (!this.getPaymentOptionsPage) await this.fetchPaymentOptionsPage();
  },

  methods: {
    ...mapActions({ fetchPaymentOptionsPage: "cms/fetchPaymentOptionsPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
