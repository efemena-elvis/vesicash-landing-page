<template>
  <div class="transfer-service-section item-listing-section neutral-10-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        What you get with us
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="transfer-icon.svg"
            title="Flexibility"
            description="Ability to send single or bulk transfers offers tailored options based on your requirements."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="globe-icon.svg"
            title="Global reach"
            description="Initiate transfers to bank accounts around the world, catering to international needs."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="swap-icon.svg"
            title="Simplicity"
            description="Send transfers with ease, eliminating complexity and saving time."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="certified-icon.svg"
            title="Security"
            description="Trust in secure and reliable processing for your transfers."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="check-icon.svg"
            title="Convenience"
            description="Enjoy the convenience of worldwide transfers without hassle."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="control-icon.svg"
            title="Control"
            description="Maintain control over your transfers, whether individual or bulk, with ease."
            has_border
            is_local_icon
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "TransferServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style></style>
