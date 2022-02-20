<template>
  <div>
    <Component :is="compName"/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import register from "~/components/auth/register.vue";
import login from "~/components/auth/login.vue";

type AuthType = 'register' | 'login'

export default Vue.extend({
  name: "ComponentName",
  components: {register, login},
  computed: {
    compName(): AuthType{
      if(this.$route.params.componentName === 'register') {
      return 'register'
    } else {
      return 'login'
    }
  }
}

})
</script>

<style scoped>

</style>
