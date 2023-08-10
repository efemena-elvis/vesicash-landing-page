<template>
  <div class="client-section">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 mgb-24 grey-900 text-center">
        Our partners
      </div>

      <div
        class="description-text text-center grey-700 h6-text roobert-400 mgb-50 mx-auto"
      >
        To make your expansion into new markets seamless, we have partnered with
        global payment processors
      </div>

      <!-- CLIENT ROW -->
      <div class="client-row">
        <img
          v-lazy="loadImage('Wapipay.png', 'landing-v2')"
          alt="Wapipay logo"
        />
        <img
          v-lazy="loadImage('eTranzact.png', 'landing-v2')"
          alt="eTranzact logo"
        />
        <img
          v-lazy="loadImage('Checkout.png', 'landing-v2')"
          alt="checkout logo"
        />
        <img
          v-lazy="loadImage('Alexpay.png', 'landing-v2')"
          alt="Alexpay logo"
        />
        <img
          v-lazy="loadImage('Flutterwave.png', 'landing-v2')"
          alt="Flutterwave logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientSection",
};
</script>

<style lang="scss" scoped>
.client-section {
  padding: toRem(80) 0 toRem(100);

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
  @include breakpoint-down(sm) {
    padding: toRem(30) 0 toRem(80);
  }

  .title-text {
    @include breakpoint-down(lg) {
      @include font-height(38, 44);
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(20) !important;
      @include font-height(34, 42);
    }
  }

  .description-text {
    margin-bottom: toRem(80);
    width: 60%;

    @include breakpoint-down(lg) {
      font-size: toRem(22);
      width: 80%;
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(40) !important;
      font-size: toRem(20);
      width: 95%;
    }

    @include breakpoint-down(sm) {
      margin-bottom: toRem(35) !important;
      font-size: toRem(18.5);
    }
  }

  .client-row {
    @include flex-row-center-wrap;

    img {
      margin: 0 toRem(20) toRem(20);
      width: toRem(200);
      height: auto;

      @include breakpoint-down(lg) {
        margin: 0 toRem(40) toRem(20);
        width: toRem(180);
      }

      @include breakpoint-down(md) {
        margin: toRem(20);
        width: toRem(180);
      }
    }
  }
}
</style>
