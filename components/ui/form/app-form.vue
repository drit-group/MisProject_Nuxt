<template>
  <validation-observer v-slot="{handleSubmit}">
    <b-form @submit.prevent="handleSubmit(submitForm)">
      <slot></slot>
    </b-form>
  </validation-observer>
</template>

<script lang="ts">
import Vue from 'vue'
import {ValidationObserver} from "vee-validate";

export default Vue.extend({
  name: "AppForm",
  components: {ValidationObserver},
  props: {
    submitForm: {
      required: true,
      type: Function
    }
  }
})
</script>

<style scoped>

</style>
