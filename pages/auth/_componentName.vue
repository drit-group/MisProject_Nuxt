<template>
  <b-row class="bg-light" align-v="center">
    <b-col md="5" class="d-flex justify-content-center py-5 align-items-center bg-white min-vh-100 border-left overflow-auto">
        <Componen1 :is="compName"/>
    </b-col>

    <b-col md="7" class="d-none d-md-block position-fixed col-img-login">
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
.col-img-login{
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
