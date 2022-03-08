<template>
  <div class="form-style">
    <h1>خوش آمدید</h1>
    <p class="w-100 pb-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان </p>
    <app-form :submit-form="submit">
      <app-input :input-option="inputEmailOption" :input-value="inputEmailValue"/>
      <app-input :input-option="inputPassOption" :input-value="inputPassValue"/>
      <b-btn type="submit" variant="primary" size="lg" block class="mt-4">
        ارسال
      </b-btn>
    </app-form>
    <p class="mt-3">
      اگر حساب کاربری ندارید
      <nuxt-link :to="{name:'auth-componentName' , params:{componentName : 'register'}}">
        ثبت نام
      </nuxt-link>
      کنید
    </p>
  </div>
</template>


<script lang="ts">

import Vue from 'vue'
import appInput from "~/components/ui/form/app-input.vue";
import appForm from "~/components/ui/form/app-form.vue";

export default Vue.extend({
  name: "LoginComp",
  components: {appInput, appForm},
  data() {
    return {
      inputEmailValue: '',
      inputPassValue: '',
      inputEmailOption: {
        label: 'کدملی',
        id: 'inputNationalCode',
        size: 'lg',
        type: 'number',
        rules: 'required|length:10|numeric'
      },
      inputPassOption: {
        label: 'رمز عبور',
        id: 'inputPass',
        size: 'lg',
        type: 'password',
        rules: 'required|min:8|max:30'
      }
    }
  },
  methods: {
    submit() {
      alert('submitted')
    }
  }
})
</script>

<style scoped>

</style>
