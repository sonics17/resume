<template>
  <h2 class="sidebar-section__title">Хобби и интересы</h2>
  <ul class="sidebar-section__list">
    <HobbyItem 
      v-for="(hobby, index) in hobbies" 
      :key="index"
      :name="hobby.name"
      :icon="hobby.icon"
    />
  </ul>
</template>

<script>
import HobbyItem from './HobbyItem.vue';
import DiceIcon from '@/assets/images/icons/hobbies/dice.svg';
import DumbbellIcon from '@/assets/images/icons/hobbies/dumbbell.svg';
import BrushIcon from '@/assets/images/icons/hobbies/brush.svg';
import WalkingIcon from '@/assets/images/icons/hobbies/walking-girl.svg';

export default {
  components: {HobbyItem},
  data() {
    return {
      hobbies: [
        {
          name: 'Настольные игры',
          icon: DiceIcon
        },
        {
          name: 'Спорт',
          icon: DumbbellIcon
        },
        {
          name: 'Рисование',
          icon: BrushIcon
        },
        {
          name: 'Прогулки с подкастами',
          icon: WalkingIcon
        }
      ]
    }
  }
}
</script>

<style>
</style>