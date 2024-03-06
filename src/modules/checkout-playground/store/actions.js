import $api from "@/services/service-api";

const routes = {
  initialize_checkout: "https://mor-staging.vesicash.com/v2/pay/init",

  checkout_history:
    "https://mor-staging.vesicash.com/v2/transactions/get?is_paid_out=true&limit=8",
};

export default {
  initializeCheckout: async (_, payload) => {
    return await $api.push(routes.initialize_checkout, { payload });
  },

  fetchCheckoutTransactions: async (_, page) => {
    return await $api.fetch(routes.checkout_history + `&page=${page}`);
  },
};
