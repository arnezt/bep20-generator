<template>
    <div class="page-wrapper">
        <site-header :page="page"></site-header>
        <transition name="fade" mode="out-in">
            <component v-if="page" :is="page" :key="page"></component>
        </transition>
        <site-footer></site-footer>
    </div>
</template>
<script>
  import SiteHeader from './Header.vue';
  import SiteFooter from './Footer.vue';

  export default {
    components: {
      SiteHeader,
      SiteFooter,
    },
    computed: {
      page () {
        return this.$page.frontmatter.component || null;
      },
    },
  };
</script>
<style src="../scss/main.scss" lang="scss"></style>
