import { mapGetters } from "vuex";
import { VESICASH_APP_URL } from "@/utilities/constant";
import { CURRENCY_CODE } from "@/modules/transactions/constants";

const paymentHelper = {
  components: {
    PaymentsModal: () =>
      import(
        /* webpackChunkName: "transactions-modal-module" */ "@/modules/transactions/modals/payments-modal"
      ),
  },

  computed: {
    ...mapGetters({
      getTransactionAmount: "transactions/getTransactionAmount",
    }),

    getCurrencySign() {
      return this.$money.getSign(
        this.getTransactionAmount?.currency?.slug ??
          this.getTransaction?.currency ??
          "NGN"
      );
    },

    getCurrency() {
      const currency =
        this.getTransactionAmount?.currency?.slug ??
        this.getTransaction?.currency ??
        "naira";

      return CURRENCY_CODE[currency];
    },

    getSuccessPageRoute() {
      let { type, party } = this.$route?.query;

      // TRANSACTION DETAILS PAGE SUCCESS PAGE SETUP
      if (this.$route.name === "TransactionDetails") {
        let transaction_id = this.$route.params?.id;
        let { title, recipients, members, totalAmount } = this.getTransaction;

        const seller = members.find((item) => item.role === "seller");

        let invited_party =
          JSON.parse(recipients).length > 1 ? "All" : seller?.email;

        return `${VESICASH_APP_URL}/transaction/payment-successful?type=${type}&party=${party}&transaction_id=${transaction_id}&name=${title}&parties=${invited_party}&fee=${
          this.getCurrency
        }${this.transfer_amount || totalAmount}&redirect=${location.href}`;
      }

      // PAYMENT PAGE SUCCESS PAGE SETUP
      else {
        let { transaction_id, name, parties, fee } = this.$route.query;

        return `${VESICASH_APP_URL}/transaction/payment-successful?type=${type}&party=${party}&transaction_id=${transaction_id}&name=${name}&parties=${parties}&fee=${
          this.getCurrency
        }${this.transfer_amount || fee}`;
      }
    },
  },

  data() {
    return {
      show_payment_option_modal: false,
      transfer_amount: "",
      message: "",
    };
  },

  methods: {
    togglePaymentOptionModal() {
      this.show_payment_option_modal = !this.show_payment_option_modal;
    },

    closeFundDetailsAndOpenSuccess(reference_id) {
      this.show_fund_wallet_info_modal = false;
      this.$router.push({
        name: "SuccessfulWalletFund",
        query: { currency: "NGN", reference_id },
      });
    },
  },
};

export default paymentHelper;
