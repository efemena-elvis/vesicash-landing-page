<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- ALERT BANNER -->
    <AlertBanner
      v-if="show_alert"
      :message="alert.message"
      :status="alert.status"
    />

    <!-- FEATHER PAGE LOADER -->
    <transition name="fade" v-if="show_feather_loader">
      <PageLoader :message="feather_loader_msg" />
    </transition>

    <!-- VESICASH MODAL PORTAL TARGET -->
    <portal-target name="vesicash-modals"></portal-target>
  </div>
</template>

<script>
export default {
  name: "App",

  metaInfo: {
    title: "Vesicash",
    titleTemplate: "%s | Escrow, Remittances and MoR for Businesses",

    htmlAttrs: {
      lang: "en-US",
    },

    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "Nigeria & Africa’s trusted digital escrow service for ensuring safe and secure digital commerce transactions. Global settlements and payouts via API.",
      },
      {
        name: "keywords",
        content:
          "escrow services, escrow in nigeria, nigerian escrow service, Escrow, nigerian escrow, online escrow, escrow service, safe online transaction, online transactions, nigeria, africa, online, escrow system in nigeria, escrow platforms in nigeria, escrow for africa, african escrow, milestone, split payments",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  components: {
    PageLoader: () =>
      import(
        /* webpackChunkName: "app-module" */ "@/shared/components/page-loader"
      ),

    AlertBanner: () =>
      import(
        /* webpackChunkName: "app-module" */ "@/shared/components/alert-banner"
      ),
  },

  watch: {
    $route: {
      handler() {
        this.show_feather_loader = false;
      },
    },
  },

  data: () => ({
    show_feather_loader: false,
    feather_loader_msg: "",

    show_alert: false,
    alert: {
      status: "success",
      message: "Alert message here...",
    },
  }),

  created() {
    window?.NProgress && window?.NProgress.configure({ showSpinner: false });
    // EVENT BUS TO TOGGLE PAGE LOADER
    this.$bus.$on("toggle-page-loader", (message) => {
      this.show_feather_loader = !this.show_feather_loader;
      this.feather_loader_msg = message;
    });

    this.$bus.$on("show-page-loader", (message) => {
      this.show_feather_loader = true;
      this.feather_loader_msg = message;
    });

    this.$bus.$on("hide-page-loader", () => {
      this.show_feather_loader = false;
      this.feather_loader_msg = "";
    });

    // EVENT BUS TO TOGGLE ALERT BANNER
    this.$bus.$on("toggle-alert-banner", (data) => this.toggleAlert(data));
  },

  methods: {
    toggleAlert(data = {}) {
      Object.keys(data).length ? (this.alert = data) : null;
      this.show_alert = !this.show_alert;
    },
  },
};
</script>

<style lang="scss">
*,
html,
body {
  scroll-behavior: smooth !important;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-leave-active {
  transition: opacity 0.2s ease;
  opacity: 0;
}

#nprogress .bar {
  background: getColor("green-500");
}
.row-gap-0 {
  row-gap: 0;
}
</style>
