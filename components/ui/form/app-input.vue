<template>
  <validation-provider v-slot="{errors}" :rules="inputOption.rules" :name="inputOption.label">
    <b-form-group :label="inputOption.label" :label-for="inputOption.id">
      <b-form-input :id="inputOption.id" v-model="inputValue" class="rounded-0"  :aria-describedby="`${inputOption.id}_error`" :type="inputOption.type" :size="inputOption.size"/>
      <b-form-text :id="`${inputOption.id}_error`" text-variant="danger">
        {{ errors[0] }}
      </b-form-text>
    </b-form-group>
  </validation-provider>
</template>

<script lang="ts">
import Vue from 'vue'
import {ValidationProvider} from "vee-validate";

type InputpropsObjext = {
  label: string,
  id: string,
  size: string,
  type: string,
  rules: string,
}

export default Vue.extend({
  name: 'AppInput',
  components: {ValidationProvider},
  props: {
    inputOption: {
      required: true,
      type: Object as () => InputpropsObjext
    },
    inputValue: {
      required: true,
      type: String
    }
  }
})
</script>

<style scoped>

</style>
