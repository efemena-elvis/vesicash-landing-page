<template>
  <div class="layout-section">
    <CheckoutNavigation />
    <div><router-view /></div>
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

<style lang="scss" scoped>
.layout-section {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
