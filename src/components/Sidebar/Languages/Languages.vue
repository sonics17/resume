<template>
  <h2 class="sidebar-section__title">Языки</h2>
  <ul class="sidebar-section__list">
    <LanguageItem 
      v-for="(language, index) in languages" 
      :key="index"
      :name="language.name"
      :level="language.level"
      :icon="language.icon"
    />
  </ul>
</template>

<script>
import LanguageItem from './LanguageItem.vue';
import RUFlag from '@/assets/images/icons/languages/ru.svg';
import UKFlag from '@/assets/images/icons/languages/en.svg';

export default {
  components: {LanguageItem}, 
  data() {
    return {
      languages: [
        {
          name: 'Русский',
          level: 'Родной',
          icon: RUFlag
        },
        {
          name: 'Английский',
          level: 'B1 — Средний',
          icon: UKFlag
        }
      ]
    }
  }
}
</script>

<style>
</style>