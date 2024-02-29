import $api from "@/services/service-api";

const routes = {
  initialize_checkout: "https://mor-staging.vesicash.com/v2/pay/init",
};

export default {
  initializeCheckout: async (_, payload) => {
    const response = await $api.push(routes.initialize_checkout, { payload });
    return response;
  },
};
