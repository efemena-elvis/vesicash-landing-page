export default [
  {
    path: "/checkout-playground",
    component: () =>
      import(
        /* webpackChunkName: "checkout-layout" */
        "@/layouts/checkout-layout"
      ),
    children: [
      {
        name: "CheckoutOverview",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/index"
          ),
        meta: {
          name: "Overview",
        },
      },
      {
        name: "PlaygroundCart",
        path: "cart",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/playground-cart"
          ),
        meta: {
          name: "Cart",
        },
      },

      {
        name: "PlaygroundCategory",
        path: ":category",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/playground-category"
          ),
        meta: {
          name: "Category",
        },
      },
    ],
  },
];
