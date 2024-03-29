<template>
  <ModalCover
    class="wallet-select-modal"
    @closeModal="$emit('closeTriggered')"
    :modal_style="{ size: 'modal-sm' }"
  >
    <!-- MODAL COVER HEADER -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header">
        <div class="modal-cover-title">Make your payment</div>
      </div>
    </template>

    <!-- MODAL COVER BODY -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body mgb--10">
        <PayTypeCard
          v-for="(data, index) in getPaymentOptions"
          :key="index"
          :payment="data"
          @payTypeClicked="handleModalClick"
        />
      </div>
    </template>

    <!-- MODAL COVER FOOTER -->
    <template slot="modal-cover-footer">
      <div class="modal-cover-footer mgb--40"></div>
    </template>
  </ModalCover>
</template>

<script>
import ModalCover from "@/shared/components/modal-cover";

export default {
  name: "MakePaymentModal",

  props: {
    paymentDetails: {
      type: Object,
      default: () => ({}),
    },
  },

  components: {
    ModalCover,
    PayTypeCard: () =>
      import(
        /* webpackChunkName: 'modal-comps-module' */ "@/modules/transactions/components/modal-comps/pay-type-card"
      ),
  },

  computed: {
    getPaymentOptions() {
      const currency = this.paymentDetails?.currency?.slug;

      let card_title = "Pay with NGN card";
      let card_description = "Make payment using your naira card.";
      let transfer_title = "Pay with bank transfer";
      let transfer_description = "Make payment via bank transfer option.";
      let wallet_description = "Make payment from your naira wallet";

      if (currency === "dollar") {
        card_title = "Pay with USD card";
        card_description = "Make payment using your USD card.";
        transfer_title = "Pay with wire transfer";
        transfer_description = "Make payment via wire transfer option.";
        wallet_description = "Make payment from your dollar wallet";
      }

      if (currency === "pound") {
        card_title = "Pay with GBP card";
        card_description = "Make payment using your GBP card.";
        transfer_title = "Pay with wire transfer";
        transfer_description = "Make payment via wire transfer option.";
        wallet_description = "Make payment from your pound wallet";
      }

      return [
        {
          id: 1,
          icon: "CreditCardIcon",
          title: card_title,
          description: card_description,
          action_type: "modal",
          action: "SuccessfulPayment",
        },
        {
          id: 2,
          icon: "ArrowRightIcon",
          title: transfer_title,
          description: transfer_description,
          action_type: "modal",
          action: "SuccessfulPayment",
        },
        {
          id: 3,
          icon: "BusinessIcon",
          title: "Pay with flutterwave business account",
          description:
            "Make a transfer from your flutterwave business account.",
          action_type: "modal",
          action: "SuccessfulPayment",
        },
        {
          id: 4,
          icon: "WalletIcon",
          title: "Pay from your wallet",
          description: wallet_description,
          action_type: "modal",
          action: "SuccessfulPayment",
        },
      ];
    },
  },

  data: () => ({
    payment_options: [
      {
        id: 1,
        icon: "CreditCardIcon",
        title: "Pay with card",
        description: "Supports all Naira denominated debit and credit cards.",
        action_type: "modal",
        action: "SuccessfulPayment",
      },
      {
        id: 2,
        icon: "ArrowRightIcon",
        title: "Pay with wire transfer",
        description: "Make a payment via wire transfer option.",
        action_type: "modal",
        action: "toggleWireTransferModal",
      },
      {
        id: 3,
        icon: "BusinessIcon",
        title: "Pay With flutterwave business account",
        description: "Make a transfer from your flutterwave business account.",
        action_type: "modal",
        action: "toggleFWBizModal",
      },
    ],
  }),

  methods: {
    handleModalClick() {
      this.$emit("openSuccess");
    },
  },
};
</script>

