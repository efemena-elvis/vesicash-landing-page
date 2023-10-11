<template>
  <router-link
    :to="menu.link"
    @click.native="$emit('switchNavigation')"
    @mouseover.native="$emit('switchNavigation')"
    class="menu-stack overflow-hidden"
    :class="[
      isActiveSideStack ? 'active-side-stack' : null,
      $route.path === menu.link ? 'active-stack' : null,
    ]"
  >
    <div class="img-icon" v-if="menu.icon">
      <img v-lazy="loadImage(menu.icon, 'landing-v2')" alt="" />
    </div>

    <div class="text-content">
      <!-- TITLE TEXT -->
      <div class="title-text primary-1-text roobert-600 teal-900">
        {{ menu.title }}
      </div>

      <!-- DESCRIPTION TEXT -->
      <div class="description-text primary-2-text roobert-400 grey-700">
        {{ menu.description }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MenuStack",

  props: {
    menu: {
      type: Object,
      default: () => ({
        icon: "",
        link: "",
        level: "",
        title: "Billing box",
        description:
          "Expand sales, grow revenue with our payment infrastructure",
      }),
    },

    active_level: {
      type: String,
    },
  },

  computed: {
    isActiveSideStack() {
      return this.active_level === this.menu.level ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-stack {
  border: toRem(1) solid transparent;
  @include flex-row-between-nowrap;
  padding: toRem(12) toRem(16);
  @include transition(0.4s);
  border-radius: toRem(14);
  align-items: flex-start;
  min-width: toRem(270);
  width: auto;

  .img-icon {
    @include draw-shape(28);
    margin-right: toRem(16);
    position: relative;

    img {
      @include set-full-bg;
    }
  }

  .text-content {
    @include flex-column-start-start;
    gap: toRem(4);
  }

  &.active-side-stack {
    background: getColor("neutral-10");
  }

  &.active-stack {
    background: getColor("teal-50");
  }
}
</style>
