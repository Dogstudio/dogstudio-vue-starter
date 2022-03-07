<template>
  <main class="site-wrapper">
    <RouterView />
  </main>
</template>

<script>
// Utilities
import { setLocaleCookies, setLocaleAttributes } from '@/utils/helpers/language'

export default {
  name: 'App',
  computed: {
    mode: function () {
      return import.meta.env.VUE_APP_MODE || 'app'
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
  },
}
</script>

<style lang="scss" scoped>
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
