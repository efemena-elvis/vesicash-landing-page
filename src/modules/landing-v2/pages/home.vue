<template>
  <div class="home-container">
    <HomeHeroSection />
    <MorHeroSection />
  </div>
</template>

<script>
import HomeHeroSection from "@/modules/landing-v2/components/home/home-hero-section";
import MorHeroSection from "@/modules/landing-v2/components/home/mor-hero-section";

export default {
  name: "VesicahHomePage",

  components: {
    HomeHeroSection,
    MorHeroSection,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: toRem(70);
}
</style>
