// eslint-disable-next-line import/named
import {extend} from 'vee-validate';
import {email , required , length , min , max , numeric , alpha} from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: '{_field_} وارد شده صحیح نیست'
})

extend('required', {
  ...required,
  message: '{_field_} نمیتواند خالی باشد'
})

extend('length', {
  ...length,
  message: '{_field_} باید {length} رقمی باشد'
})

extend('min', {
  ...min,
  message: '{_field_} نباید کم تر از {length} کاراکتر باشد'
})

extend('max', {
  ...max,
  message: '{_field_} نباید بیشتر از {length} کاراکتر باشد'
})

extend('numeric', {
  ...numeric,
  message: 'فقط عدد وارد کنید'
})

extend('alpha', {
  ...alpha,
  message: 'فقط حرف وارد کنید'
})
