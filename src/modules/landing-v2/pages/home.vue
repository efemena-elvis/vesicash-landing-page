<template>
  <div class="home-container">
    <HomeHeroSection />
  </div>
</template>

<script>
import HomeHeroSection from "@/modules/landing-v2/components/home/home-hero-section";

export default {
  name: "VesicahHomePage",

  components: {
    HomeHeroSection,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: toRem(70);
}
</style>
