<template>
  <div
    class="fixed-top w-100 index-999 smooth-transition neutral-10-bg"
    ref="navbar"
  >
    <div class="vesicash-container">
      <div class="navigation-section smooth-transition">
        <router-link :to="{ name: 'VesicashHomeV2' }" class="brand-logo">
          <VesicashBrandLogo />
        </router-link>

        <!-- NAVIGATIONS -->
        <div class="navigations">
          <div
            class="menu-icon icon-hamburger grey-500 f-size-32 pointer"
            @click="toggleMobileDropdown"
          ></div>

          <!-- NAV ITEMS -->
          <div class="nav-items">
            <NavItem
              nav_link="#"
              nav_text="Products"
              :active_level="product_level"
              :stack="product_stack.side_stack"
              :primary_stack="getCurrentProduct.primary_stack"
              :secondary_stack="getCurrentProduct.secondary_stack"
              @switchMenu="updateProductLevel"
            />
            <NavItem nav_link="/about" nav_text="About us" />
            <NavItem nav_link="/pricing-plans" nav_text="Pricing" />
            <NavItem
              nav_link="#"
              nav_text="Resources"
              :primary_stack="resource_stack.primary_stack"
            />
            <NavItem nav_link="/developers" nav_text="Developers" />
          </div>

          <!-- NAV BUTTONS -->
          <div class="nav-buttons">
            <a
              :href="`${$app_url}/login`"
              target="_blank"
              class="btn btn-tertiary btn-md roobert-500 mgr-16"
              >Sign In</a
            >

            <a
              :href="`${$app_url}/register-lander`"
              target="_blank"
              class="btn btn-primary btn-md roobert-500"
              >Create an account</a
            >
          </div>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <template v-if="show_mobile_dropdown">
        <MobileMenu @closeMenu="toggleMobileDropdown" />
      </template>
    </div>
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import NavItem from "@/modules/landing-v2/components/nav-item";

export default {
  name: "Navigation",

  components: {
    VesicashBrandLogo,
    NavItem,
    MobileMenu: () =>
      import(
        /* webpackChunkName: 'MobileMenu' */ "@/modules/landing/components/mobile-menu"
      ),
  },

  computed: {
    getCurrentProduct() {
      return this.product_level === "billing"
        ? {
            primary_stack: this.product_stack.primary_stack,
            secondary_stack: this.product_stack.secondary_stack,
          }
        : {
            primary_stack: this.product_stack.escrow_stack,
            secondary_stack: [],
          };
    },
  },

  data: () => ({
    show_mobile_dropdown: false,

    product_level: "billing", // escrow

    product_stack: {
      side_stack: [
        {
          title: "Billing box",
          level: "billing",
          link: "",
          description:
            "Expand sales, grow revenue with our payment infrastructure",
        },
        {
          title: "Escrow",
          level: "escrow",
          link: "",
          description:
            "Escrow technology ensures you get value for B2B and B2C payments",
        },
      ],

      primary_stack: [
        {
          icon: "central-icon.svg",
          title: "Payment options",
          link: "/payment-option",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "certified-icon.svg",
          title: "Fraud prevention",
          link: "/fraud-prevention",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "bang-icon.svg",
          title: "Tax compliance",
          link: "/tax-compliance",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "transfer-icon.svg",
          title: "Seamless fund transfers",
          link: "/fund-transfer",
          description: "The idea is to have a subtitle and see how it looks",
        },
      ],

      secondary_stack: [
        {
          icon: "file-icon.svg",
          title: "B2B invoicing",
          link: "/b2b-invoicing",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "basket-icon.svg",
          title: "Checkout",
          link: "/checkout",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "subscription-icon.svg",
          title: "Subscriptions",
          link: "/subscription",
          description: "The idea is to have a subtitle and see how it looks",
        },
      ],

      escrow_stack: [
        {
          icon: "wallet-icon.svg",
          title: "Escrow services",
          link: "/escrow-service",
          description: "The idea is to have a subtitle and see how it looks",
        },
      ],
    },

    resource_stack: {
      primary_stack: [
        {
          icon: "file-icon.svg",
          title: "Blog",
          link: "/blogs",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "support-icon.svg",
          title: "Help and Support",
          link: "/contact",
          description: "The idea is to have a subtitle and see how it looks",
        },
        {
          icon: "alert-icon.svg",
          title: "F A Q",
          link: "/faqs",
          description: "The idea is to have a subtitle and see how it looks",
        },
      ],
    },
  }),

  mounted() {
    window.onscroll = () => {
      this.$refs.navbar?.classList.toggle("scrolling-up", window.scrollY > 20);
    };
  },

  methods: {
    toggleMobileDropdown() {
      this.show_mobile_dropdown = !this.show_mobile_dropdown;
    },

    updateProductLevel($event) {
      this.product_level = $event === 0 ? "billing" : "escrow";
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-section {
  @include flex-row-between-nowrap;
  padding: toRem(20) 0;

  .brand-logo {
    svg {
      width: toRem(150);
      height: auto;
    }
  }

  .navigations {
    @include flex-row-end-nowrap;

    .menu-icon {
      font-size: toRem(25);
      display: none;

      @include breakpoint-down(md) {
        display: unset;
      }
    }

    .nav-items {
      @include flex-row-end-nowrap;

      @include breakpoint-down(md) {
        display: none;
      }
    }

    .nav-buttons {
      @include flex-row-end-nowrap;

      @include breakpoint-down(md) {
        display: none;
      }

      .btn {
        font-size: toRem(16);
      }

      .btn-tertiary {
        padding: toRem(11) toRem(37);

        @include breakpoint-custom-down(920) {
          padding: toRem(11) toRem(30);
          margin-right: toRem(12);
        }
      }

      .btn-primary {
        padding: toRem(11.75) toRem(20);

        @include breakpoint-custom-down(920) {
          padding: toRem(11.75) toRem(15);
        }
      }
    }
  }
}

.scrolling-up {
  background: getColor("neutral-10");
  @include transition(0.3s);

  .navigation-section {
    padding: toRem(10) 0;
  }
}

.scrolling-down {
  display: none;
}
</style>
