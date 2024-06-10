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

  initializeZambiaCheckout: async (_, amount) => {
    const myHeaders = new Headers();

    myHeaders.append(
      "authorization",
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6bUtSV285azlhdk9vdjBWS0dwWUNtSGtjSmUtVmdTV0J3c2xDOVU4OFc0In0.eyJleHAiOjE3MTc0MDgzMDIsImlhdCI6MTcxNzQwNDcwMiwianRpIjoiN2E1OTA1MDktMTU4NC00NzhiLThlNTktOWQyZWJhNDE5MjczIiwiaXNzIjoiaHR0cHM6Ly9kZXYubXlzdHVkeXBhdGguaW8va2V5Y2xvYWsvYXV0aC9yZWFsbXMvaWVzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjlkNzIxYTAxLTc2MWItNDk2Mi05NDA5LWNjZmIwODkyZjZlMiIsInR5cCI6IkJlYXJlciIsImF6cCI6Imllcy1wYXNzcG9ydCIsInNlc3Npb25fc3RhdGUiOiIxYWM4MTA5OS01NmM1LTQ3MzItYjg0Ni05NzliN2EyYTc0MTIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtaWVzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInN0dWR5cGF0aF9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Imllcy1wYXNzcG9ydCI6eyJyb2xlcyI6WyJzdHVkeXBhdGhfYWRtaW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjFhYzgxMDk5LTU2YzUtNDczMi1iODQ2LTk3OWI3YTJhNzQxMiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkVsdmlzIEVmZW1lbmEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbHZpc0BwYXZlaHEuY29tIiwiZ2l2ZW5fbmFtZSI6IkVsdmlzIiwiZmFtaWx5X25hbWUiOiJFZmVtZW5hIiwiZW1haWwiOiJlbHZpc0BwYXZlaHEuY29tIn0.d5udoUhfJF1qu-fhpt7T8O9IzY17G1g9A2C_uE8toVIgAuwXTSpjLZJ1adRyWCj9e_Wcp_ZJR9lpaL6CT3Jh_b3c-8M9NVPuMKfguQB6DEDNk-z08ALBU8WPXpCpgHJ6v5tyNmG4-6fB4QzWN-oPvnxswbQ3GiYprIV8Y9xudRTGOSDi_fKRqBAWRHN0zDe41v2XVMnv9WMUeWYyp15Mi4g2EIfi1kH6pRdxto4fxcKblC27x68oDXSDmOYxIEfWoj2jHCwpqkfZIS-vIJ-uIDiZjVB-X6sRQo0ihf-hRsuNbhL4uON5iVwe_l75sSCFvJLmIgD6uvGnMtTAXGmbQQ"
    );

    const requestBody = {
      client: {
        email: "support@vesicash.com",
      },
      purchase: {
        products: [
          {
            name: "Clothing",
            price: amount,
          },
        ],
        currency: "ZMW",
      },
      brand_id: "fdf6ba5b-3eae-40f9-849a-f3efa96648bc",
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
      redirect: "follow",
    };

    fetch("https://gate.redstonepgs.com/api/v1/purchases/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  },
};
