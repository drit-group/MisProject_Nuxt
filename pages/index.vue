<template>
  <main>

    <section>
      <b-container>
        <LandingHeader/>
      </b-container>
    </section>

    <section>
      <b-container>
        <LandingCardsSection/>
      </b-container>
    </section>

    <section>
      <b-container>
        <LandingAboutUs/>
      </b-container>
    </section>

  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

