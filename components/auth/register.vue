<template>
  <div class="form-style">
    <h1 >ثبت نام</h1>
    <p class="w-100 pb-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان </p>
    <app-form :submit-form="submit">
      <div class="d-flex">
        <app-input :input-option="inputFNameOption" class="mr-2" :input-value="inputFNameValue"/>
        <app-input :input-option="inputLNameOption" class="ml-2" :input-value="inputLNameValue"/>
      </div>
      <app-input :input-option="inputNationalCodeOption" :input-value="inputNationalCodeValue"/>
      <app-input :input-option="inputEmailOption" :input-value="inputEmailValue"/>
      <app-input :input-option="inputPassOption" :input-value="inputPassValue"/>
      <b-btn type="submit" variant="primary" size="lg" block class="mt-4">
        ارسال
      </b-btn>
    </app-form>
    <p class="mt-3">
      اگر حساب کاربری ندارید
      <nuxt-link :to="{name:'auth-componentName' , params:{componentName : 'login'}}">
        login
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
  name: "RegisterComp",
  components: {appInput, appForm},
  data() {
    return {
      inputNationalCodeValue: '',
      inputPassValue: '',
      inputEmailValue:'',
      inputFNameValue:'',
      inputLNameValue:'',
      inputNationalCodeOption: {
        label: 'کدملی',
        id: 'inputNationalCode',
        size: 'lg',
        type: 'number',
        rules: 'required|length:10|numeric'
      },
      inputEmailOption: {
        label: 'ایمیل',
        id: 'inputEmail',
        size: 'lg',
        type: 'email',
        rules: 'required|email'
      },
      inputFNameOption: {
        label: 'نام',
        id: 'inputFName',
        size: 'lg',
        type: 'text',
        rules: 'required|alpha'
      },
      inputLNameOption: {
        label: 'نام خانوادگی',
        id: 'inputLName',
        size: 'lg',
        type: 'text',
        rules: 'required|alpha'
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
