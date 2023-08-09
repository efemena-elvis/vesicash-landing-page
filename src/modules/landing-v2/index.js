// ================================
// VESICASH LANDING PAGE ROUTES
// ================================
const landingRoutes = [
  {
    path: "/",
    alias: "/home",
    component: () =>
      import(
        /* webpackChunkName: "landing-layout" */
        "@/modules/landing-v2/layouts/layout-landing"
      ),

    children: [
      // ===============================
      // VESICASH HOME ROUTE
      // ===============================
      {
        path: "",
        name: "VesicashHomeV2",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/home"
          ),
      },
    ],
  },
];

export default landingRoutes;
