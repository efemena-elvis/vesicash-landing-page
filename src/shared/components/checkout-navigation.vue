<template>
  <div class="navigation">
    <router-link to="/">
      <div class="brand-logo">
        <VesicashBrandLogo class="logo" />
        <img
          v-lazy="loadImage('vesicash-logo.png')"
          alt="LOGO"
          class="mobile-logo"
        />
      </div>
    </router-link>

    <div class="categories">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="`/checkout-playground/${category.slug}`"
        :class="[
          'secondary-1-text',
          category.slug === $route.params.category
            ? 'green-500'
            : 'neutral-500',
        ]"
        >{{ category.name }}</router-link
      >
    </div>

    <router-link to="/checkout-playground/cart">
      <CartIcon size="30" />
      <span class="ml-2 secondary-2-text grey-900">{{ getCartCount }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartIcon from "./icon-comps/cart-icon";
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import categories from "../../utilities/product-categories";
export default {
  name: "CheckoutNavigation",

  components: {
    CartIcon,
    VesicashBrandLogo,
  },

  computed: {
    ...mapGetters({ getCartCount: "checkout/getCartCount" }),
  },

  data() {
    return {
      categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  background: getColor("neutral-10");
  padding: toRem(15) toRem(60);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.1);

  @include breakpoint-down(lg) {
    padding: toRem(15) toRem(30);
  }

  .brand-logo {
    svg {
      width: toRem(150);
      height: auto;
    }

    .logo {
      @include breakpoint-down(lg) {
        display: none;
      }
    }
    .mobile-logo {
      display: none;
      @include breakpoint-down(lg) {
        display: block;
        width: toRem(50);
        height: toRem(30);
      }
    }
  }

  .categories {
    @include flex-row-center-nowrap;
    gap: 0 toRem(25);
    width: 100%;

    a {
      transition: color ease 0.2s;
      &:hover {
        color: getColor("green-400");
      }
    }
  }
}
</style>
