<template>
  <b-row class="h-100-vh bg-light" align-v="center">
    <b-col md="5" class="d-flex justify-content-center pt-5 align-items-center bg-white h-100-vh border-left overflow-auto">
        <Componen1 :is="compName"/>
    </b-col>

    <b-col md="7" class="d-none d-md-block">
      <b-img width="550" class="mx-auto d-block" src="/images/auth/login.png" fluid></b-img>
    </b-col>
  </b-row>
</template>

<script lang="ts">

import Vue from 'vue'
import register from "~/components/auth/register.vue";
import login from "~/components/auth/login.vue";

type AuthType = 'register' | 'login'

export default Vue.extend({
  name: "ComponentName",
  components: {register, login},
  layout: 'auth',
  computed: {
    compName(): AuthType {
      if (this.$route.params.componentName === 'register') {
        return 'register'
      } else {
        return 'login'
      }
    }
  }

})
</script>

<style>
.form-style {
  max-width: 23rem;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
</style>
