<template>
  <section class="socials">
    <h2 class="sidebar-section__title">Соцсети и GitHub</h2>
    <ul class="sidebar-section__list">
        <SocialItem
        v-for="(social, index) in socials" 
        :key="index"
        :social="social"
      />
    </ul>
  </section>
</template>

<script>
import { markRaw } from 'vue'
import SocialItem from './SocialItem.vue';
import TelegramIcon from './icons/TelegramIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';

export default {
  components: {SocialItem},

  data() {
    return {
      socials: [
        {
          label: 'Telegram',
          href: 'https://t.me/soniaryze',
          value: '@soniaryze',
          icon: markRaw(TelegramIcon)
        },
        {
          label: 'Github',
          href: 'https://github.com/sonics17',
          value: '@sonics17',
          icon: markRaw(GithubIcon)
        }
      ]
    }
  }
}
</script>

<style>
</style>