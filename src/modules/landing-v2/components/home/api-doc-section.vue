<template>
  <div class="api-doc-section neutral-10-bg">
    <div class="vesicash-container">
      <div class="row">
        <!-- COPY SECTION -->
        <div class="copy-section col-12 col-md-6 mb-5 mb-md-0">
          <h2 class="title-text h2-text roobert-700 grey-900 mgb-16">
            {{ getHomePage.api_title }}
          </h2>

          <h5 class="description-text h7-text roobert-400 grey-600 mgb-36">
            {{ getHomePage.api_description }}
          </h5>

          <!-- DOC LINK -->
          <a href="https://docs.vesicash.com/" class="doc-link">
            <div class="icon-wrapper rounded-circle green-500-bg mgr-8">
              <div class="icon icon-caret-right neutral-10"></div>
            </div>

            <div class="text secondary-1-text roobert-400">
              {{ getHomePage.labels.view_doc_title }}
            </div>
          </a>
        </div>

        <!-- IMAGE SECTION -->
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('api-code-img.png', 'landing')"
              alt="API-code"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "APIDocSection",

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },
};
</script>

<style lang="scss" scoped>
.api-doc-section {
  padding: toRem(120) 0;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .row {
    @include flex-row-between-wrap;

    .title-text {
      // font-size: toRem(38);

      @include breakpoint-down(lg) {
        @include font-height(32, 40);
      }

      @include breakpoint-down(sm) {
        @include font-height(30, 40);
      }
    }

    .description-text {
      // font-size: toRem(20);
      width: 80%;

      @include breakpoint-down(lg) {
        font-size: toRem(18);
        width: 95%;
      }

      @include breakpoint-down(sm) {
        font-size: toRem(16);
        width: 100%;
      }
    }

    .doc-link {
      @include flex-row-start-nowrap;
      width: max-content;

      .icon-wrapper {
        @include draw-shape(24);
        position: relative;

        .icon {
          @include center-placement();
          margin-left: toRem(1);
          font-size: toRem(23);
        }
      }

      .text {
        @include breakpoint-down(lg) {
          font-size: toRem(15);
        }
      }
    }

    .image-section {
      position: relative;
    }
  }
}
</style>
