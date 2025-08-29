<template>
  <h2 class="sidebar-section__title">Языки</h2>
  <ul class="sidebar-section__list">
    <LanguageItem 
      v-for="(language, index) in languages" 
      :key="index"
      :language="language"
    />
  </ul>
</template>

<script>
import { markRaw } from 'vue'
import RUFlag from './icons/RUFlag.vue';
import UKFlag from './icons/UKFlag.vue';
import LanguageItem from './LanguageItem.vue';

export default {
  components: {LanguageItem}, 

  data() {
    return {
      languages: [
        {
          value: 'Русский',
          label: 'Родной',
          icon: markRaw(RUFlag)
        },
        {
          value: 'Английский',
          label: 'B1 — Средний',
          icon: markRaw(UKFlag)
        }
      ]
    }
  }
}
</script>

<style>
</style>