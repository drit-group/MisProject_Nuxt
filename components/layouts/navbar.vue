<template>
  <b-navbar sticky toggleable="lg" type="light" class="shadow py-3" variant="white">
    <b-container>
      <b-navbar-brand>
        <b-link to="/" class="text-dark text-decoration-none">
          Dr.IT
        </b-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item v-for="(item , index) in navData" :key="index">
            <b-link :to="item.path" class="text-dark text-decoration-none">
              {{ item.name }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-btn variant="primary">ورود</b-btn>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavbarComp',
  data() {
    return {
      navData: [
        {name: 'خانه', path: '/'},
        {name: 'برنامه ها', path: '/'},
        {name: 'دکتر آیتی', path: '/'},
        {name: 'درباره ما', path: '/'},
      ]
    }
  }
})
</script>

<style scoped></style>
