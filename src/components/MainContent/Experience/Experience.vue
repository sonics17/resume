<template>
  <h2 class="experience-section__title main-section__title">Опыт работы</h2>
  <ul class="experience-section__list">
    <ExperienceItem
      v-for="(experience, index) in experienceItems"
      :key="index"
      :experience="experience"
    />
  </ul>

</template>

<script>
import ExperienceItem from './ExperienceItem.vue';
import argunSoftLogo from '@/assets/images/logos/argun-soft.png';
import kbLogo from '@/assets/images/logos/kb.svg';


export default {
  components: {
    ExperienceItem
  },
  data() {
    return {
      experienceItems:[
          {
          logo: kbLogo,
          period: 'Настоящее время',
          location: 'Онлайн',
          role: 'Менеджер',
          company: 'ООО "Компания Балттех"',
          description: 'Ведение и актуализация баз данных. Подготовка и систематизация отчетной документации. Автоматизация рутинных операций с использованием скриптов.'
        },
        {
          logo: argunSoftLogo,
          period: 'Сентябрь 2022 - Июнь 2023',
          location: 'Санкт-Петербург',
          role: 'Ассистент ведущего специалиста',
          company: 'ООО "Аргун-Софт"',
          description:'Проведение анализа данных, испозьзуя SQL и Python для верификации информации и поиска причин ошибок в системе. Написание и поддержка технической и пользовательской документации. Тесное взаимодействие с командами разработки и тестирования.'
        }
      ]
    }
  }
}
</script>

<style>
.experience-section__list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}


</style>