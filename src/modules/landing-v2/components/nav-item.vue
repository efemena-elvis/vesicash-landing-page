<template>
  <div class="nav-wrapper">
    <div class="nav-item-wrapper">
      <router-link :to="nav_link" class="nav-item">{{ nav_text }}</router-link>
      <div
        class="icon icon-caret-right grey-500"
        v-if="primary_stack.length"
      ></div>

      <!-- DROPDOWN MENU AREA -->
      <div
        class="dropdown-menu-wrapper smooth-animation"
        v-if="primary_stack.length"
      >
        <div class="dropdown-menu-content">
          <div class="nav-menu-stack primary-stack" v-if="stack.length">
            <MenuStack
              v-for="(item, index) in stack"
              :key="index"
              :menu="item"
              :active_level="active_level"
              @switchNavigation="$emit('switchMenu', index)"
            />
          </div>

          <div class="nav-menu-stack" v-if="primary_stack.length">
            <MenuStack
              v-for="(item, index) in primary_stack"
              :key="index"
              :menu="item"
            />
          </div>

          <div class="nav-menu-stack" v-if="secondary_stack.length">
            <MenuStack
              v-for="(item, index) in secondary_stack"
              :key="index"
              :menu="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuStack from "@/modules/landing-v2/components/menu-stack";

export default {
  name: "NavItem",

  components: {
    MenuStack,
  },

  props: {
    nav_link: {
      type: String,
    },

    nav_text: {
      type: String,
    },

    active_level: {
      type: String,
    },

    stack: {
      type: Array,
      default: () => [],
    },

    primary_stack: {
      type: Array,
      default: () => [],
    },

    secondary_stack: {
      type: Array,
      default: () => [],
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: relative;

  .nav-item-wrapper {
    position: relative;
    @include flex-row-between-nowrap;
    margin-right: toRem(36);
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      height: toRem(30);
      top: toRem(22);
      width: 100%;
    }

    .nav-item {
      @include generate-font-type("secondary-1");
      font-family: "Roobert-Medium", sans-serif;
      color: getColor("grey-600");
      @include transition(0.4s);
      margin-right: toRem(2);

      &:hover,
      &.router-link-exact-active {
        color: getColor("green-500");
      }
    }

    .icon {
      @include transition(0.4s);
      transform: rotate(90deg);
      font-size: toRem(25);
      position: relative;
      top: toRem(0.75);
    }

    @include breakpoint-custom-down(920) {
      margin-right: toRem(35);
    }

    .dropdown-menu-wrapper {
      background: lighten(getColor("grey-10"), 0.8%);
      border-radius: toRem(16);
      position: absolute;
      padding: toRem(4);
      left: toRem(-100);
      top: toRem(46);
      display: none;
      transition: display 0.4s ease-in-out;

      .dropdown-menu-content {
        @include flex-row-start-nowrap;
        @include transition(0.4s);
        align-items: flex-start;
        position: relative;
        gap: toRem(2.5);
      }
    }

    .nav-menu-stack {
      @include flex-column-start-start;
      justify-content: flex-start;
      @include transition(0.4s);
      border-radius: toRem(16);
      padding: toRem(4);
      gap: toRem(2.5);

      .menu-stack {
        &:hover {
          background: getColor("teal-50");
        }
      }
    }

    .primary-stack {
      background: rgba(getColor("teal-100"), 0.75);
      height: toRem(382);

      .menu-stack {
        min-width: toRem(260);

        &:hover {
          background: getColor("neutral-10");
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(271deg);
      }

      .dropdown-menu-wrapper {
        display: unset;
      }
    }
  }
}
</style>
