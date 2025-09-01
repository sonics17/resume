<template>
  <section class="socials">
    <h2 class="sidebar-section__title">Соцсети и GitHub</h2>
    <ul class="sidebar-section__list">
        <SocialItem
        v-for="(social, index) in socials" 
        :key="index"
        :name="social.name"
        :href="social.href"
        :username="social.username"
        :icon="social.icon"
      />
    </ul>
  </section>
</template>

<script>
import SocialItem from './SocialItem.vue';
import TelegramIcon from '@/assets/images/icons/socials/telegram.svg';
import GithubIcon from '@/assets/images/icons/socials/github.svg';

export default {
  components: {SocialItem},
  data() {
    return {
      socials: [
        {
          name: 'Telegram',
          href: 'https://t.me/soniaryze',
          username: '@soniaryze',
          icon: TelegramIcon
        },
        {
          name: 'GitHub',
          href: 'https://github.com/sonics17',
          username: '@sonics17',
          icon: GithubIcon
        }
      ]
    }
  }
}
</script>

<style>
</style>