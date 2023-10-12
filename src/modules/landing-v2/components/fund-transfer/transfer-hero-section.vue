<template>
  <div class="transfer-hero-section two-column-section yellow-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text yellow-500 mgb-8 roobert-500">
            SEAMLESS FUND TRANSFERS
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            Effortlessly send single or bulk transfers
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            Whether you're sending funds individually or in batches, our
            platform ensures a smooth and efficient process. Simplify
            international payments, saving time and streamlining financial
            transactions.
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('transfer-hero-img.png', 'landing-v2')"
              alt="Fund Transfer"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransferHeroSection",
};
</script>

<style lang="scss" scoped></style>
