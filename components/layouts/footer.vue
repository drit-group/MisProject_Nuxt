<template>
  <footer class="pt-4 bg-dark">
    <b-container class="pt-4">
      <b-row class="text-white pt-4">
        <b-col md="3" sm="6">
          <h4 class="mb-4">انجمن برنامه نویسان دکتر آیتی </h4>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </b-col>
        <b-col md="3" sm="6">
          <h6 class="border-right border-primary pl-3">شبکه های اجتماعی</h6>
          <ul class="list-unstyled mt-4">
            <li v-for="(item , index) in socialMedia" :key="index" class="pb-3">
              <b-link class="text-white text-decoration-none" :href="item.path">
                <b-icon :icon="item.icon" scale="1.5" variant="primary"/>
                <span class="text-decoration-none pl-2 ms-2 text-white">{{ item.title }}</span>
              </b-link>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <h6 class="border-right border-primary pl-3">ما که هستیم ؟</h6>
          <ul class="list-unstyled mt-4">
            <li v-for="(item , index) in aboutUs" :key="index" class="pb-3">
              <b-link class="text-white text-decoration-none" :href="item.path">
                <b-icon :icon="item.icon" scale="1.5" variant="primary"/>
                <span class="text-decoration-none pl-2 ms-2 text-white">{{ item.title }}</span>
              </b-link>
            </li>
          </ul>
        </b-col>
        <b-col md="3" sm="6">
          <b-icon-geo-alt-fill scale="1.5" variant="primary"/>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </b-col>
      </b-row>
    </b-container>
    <div class="border-top border-light text-center text-white py-4">انجمن برنامه نویسان دکتر آیتی 1400</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "FooterComp",
  data() {
    return {
      socialMedia: [
        {title: 'اینستاگرام', icon: 'instagram', path: '/'},
        {title: 'گیت هاب', icon: 'github', path: '/'},
        {title: 'تلگرام', icon: 'cursor-fill', path: '/'}
      ],
      aboutUs: [
        {title: 'درباره ما', icon: 'info-circle-fill', path: '/'},
        {title: 'تماس با ما', icon: 'telephone-fill', path: '/'},
        {title: 'پل های ارتباطی', icon: 'diagram2-fill', path: '/'},
      ]
    }
  }
})
</script>

<style scoped>

</style>
