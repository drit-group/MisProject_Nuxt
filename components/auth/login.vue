<template>
  <div>
    login
    <nuxt-link :to="{name:'auth-componentName' , params:{componentName : 'register'}}">
      register
    </nuxt-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: "LoginComp",
  methods: {
    changeComp(): void {
      this.$emit('changeComp', 'register')
    }
  }
})
</script>

<style scoped>

</style>
