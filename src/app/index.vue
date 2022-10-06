<template>
  <main class="site-wrapper">
    <RouterView />

    <template v-if="debug">
      <Grid />
    </template>
  </main>
</template>

<script>
// Components
// -- Partials
import Grid from '@/components/partials/Grid.vue'

// Utils
import { setLocaleCookies, setLocaleAttributes } from '@/utils/helpers/language'

export default {
  name: 'App',
  components: {
    Grid,
  },
  computed: {
    mode: function () {
      return import.meta.env.VUE_APP_MODE || 'app'
    },
    debug: function () {
      return import.meta.env.DEV && this.$route.query.debug === 'grid'
    },
  },
  watch: {
    '$i18n.locale': function () {
      setLocaleCookies(this.$i18n.locale)
      setLocaleAttributes(this.$i18n.locale)
    },
    '$route.params.locale': function () {
      this.$i18n.locale = this.$route.params.locale
    },
  },
  mounted() {
    setLocaleCookies(this.$i18n.locale)
    setLocaleAttributes(this.$i18n.locale)

    // Initial Resize
    this.onResize()

    // Window Events
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      // prettier-ignore
      document.documentElement.setAttribute('style', `--real-height: ${window.innerHeight}px`)
    },
  },
}
</script>

<style lang="scss">
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
