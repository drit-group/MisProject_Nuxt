<template>
  <b-row align-v="center">
    <b-col md="6">
      <b-img src="images/landing/aboutUs.png" fluid/>
    </b-col>
    <b-col md="6">
      <h2 class="dispaly-4 mb-4"><span class="text-primary">دکتر آیتی </span> چیست ؟؟؟ </h2>
      <p class="lead text-muted">
        Lorem ipsum dolor sit amet consecteturequuntur! similique ut in hic ducimus error sint nostrum.
      </p>
      <b-btn variant="primary" to="/">
        <b-icon-chevron-right font-scale="1.3"/>
        <span>
          بیشتر بخوانید
        </span>
      </b-btn>
    </b-col>
  </b-row>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend( {
  name: "AboutUs",
})
</script>

<style scoped>

</style>
