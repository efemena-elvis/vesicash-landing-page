<template>
  <div class="layout-section">
    <CheckoutNavigation />
    <router-view />
  </div>
</template>

<script>
import CheckoutNavigation from "../shared/components/checkout-navigation";

export default {
  name: "CheckoutLayout",

  components: {
    CheckoutNavigation,
  },
};
</script>

<style lang="scss"></style>
