<template>
  <div>
    register
    <nuxt-link :to="{name:'auth-componentName' , params:{componentName : 'login'}}">
      login
    </nuxt-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: "RegisterComp",
})
</script>

<style scoped>

</style>
