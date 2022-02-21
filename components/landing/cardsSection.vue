<template>
  <b-row>
    <b-col v-for="(card , index) in cards" :key="index">
      <b-card border-variant="0" bg-variant="transparent" align="center">
        <b-img width="66" :src="`images/landing/card${index+1}.png`"/>
        <b-card-title class="my-4 text-primary h3">
          {{ card.title }}
        </b-card-title>
        <b-card-text>
          <p>
            {{ card.text }}
          </p>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: "CardsSection",
  data() {
    return {
      cards: [
        {
          title: 'آموزش ها',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus ut similique natus, sapiente dolores harum fugiat minima nihil ducimus. Sunt et animi sit officia nobis ut inventore impedit. Accusamus.'
        },
        {
          title: 'اعضا',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus ut similique natus, sapiente dolores harum fugiat minima nihil ducimus. Sunt et animi sit officia nobis ut inventore impedit. Accusamus.'
        },
        {
          title: 'پروژه ها',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus ut similique natus, sapiente dolores harum fugiat minima nihil ducimus. Sunt et animi sit officia nobis ut inventore impedit. Accusamus.'
        },
        {
          title: 'کارگروه ها',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus ut similique natus, sapiente dolores harum fugiat minima nihil ducimus. Sunt et animi sit officia nobis ut inventore impedit. Accusamus.'
        }
      ]
    }
  }
})
</script>

<style scoped>
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  transition: 1s;
}
</style>
