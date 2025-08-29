<template>
  <h2 class="sidebar-section__title">Хобби и интересы</h2>
  <ul class="sidebar-section__list">
    <HobbyItem 
      v-for="(hobby, index) in hobbies" 
      :key="index"
      :hobby="hobby"
    />
  </ul>
</template>

<script>
import { markRaw } from 'vue'
import HobbyItem from './HobbyItem.vue';
import BoardGameIcon from './icons/BoardGameIcon.vue';
import BrushIcon from './icons/BrushIcon.vue';
import WalkingIcon from './icons/WalkingIcon.vue';
import DumbbellIcon from './icons/DumbbellIcon.vue';

export default {
  components: {HobbyItem},

  data() {
    return {
      hobbies: [
        {
          value: 'Настольные игры',
          icon: markRaw(BoardGameIcon)
        },
        {
          value: 'Спорт',
          icon: markRaw(DumbbellIcon)
        },
        {
          value: 'Рисование',
          icon: markRaw(BrushIcon)
        },
        {
          value: 'Прогулки с подкастами',
          icon: markRaw(WalkingIcon)
        }
      ]
    }
  }
}
</script>

<style>
</style>