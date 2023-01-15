<template>
  <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
  <the-footer></the-footer>
</template>

<script>

import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>