<template>
  <div>
    <LayoutsNavbar/>
    <Nuxt id="Nuxt"/>
    <LayoutsFooter/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: "DefaultLayout",
})

</script>

<style lang="scss">
#Nuxt{
  min-height: calc(100vh - 396.19px);
}
</style>
