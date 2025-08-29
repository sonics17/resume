<template>
  <h2 class="skills-section__title main-section__title">Навыки и инструменты</h2>
  <ul class="skills-section__list">
    <SkillItem 
      v-for="(skill, index) in skills" 
      :key="index"
      :skill="skill" 
    />

  </ul>

</template>

<script>
import htmlLogo from '@/assets/images/skills/html.png';
import cssLogo from '@/assets/images/skills/css.png';
import javascriptLogo from '@/assets/images/skills/javascript.png';
import vueLogo from '@/assets/images/skills/vue.png';
import gitLogo from '@/assets/images/skills/git.png';
import figmaLogo from '@/assets/images/skills/figma.png';
import pythonLogo from '@/assets/images/skills/python.png';
import postgresqlLogo from '@/assets/images/skills/postgresql.png';
import SkillItem from './SkillItem.vue';

export default {
  components: {SkillItem},
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          logo: htmlLogo,
          description: 'Семантическая верстка, структура'
        },
        {
          name: 'CSS',
          logo: cssLogo,
          description: 'Стили, анимации, адаптивный дизайн'
        },
        {
          name: 'JavaScript',
          logo: javascriptLogo,
          description: 'Интерактивность и логика'
        },
        {
          name: 'Vue.js',
          logo: vueLogo,
          description: 'Компонентная разработка'
        },
        {
          name: 'Git',
          logo: gitLogo,
          description: 'Контроль версий'
        },
        {
          name: 'PostgreSQL',
          logo: postgresqlLogo,
          description: 'Базы данных и запросы'
        },
        {
          name: 'Python',
          logo: pythonLogo,
          description: 'Скрипты и автоматизация'
        },
        {
          name: 'Figma',
          logo: figmaLogo,
          description: 'UI/UX дизайн'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.skills-section__list {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 0.5rem;
}
@media (max-width: $skils-break) {
  .skills-section__list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width: $lg) {
  .skills-section__list{
    grid-template-columns: repeat(4, 1fr);
  }
}
@media(max-width: $md) {
  .skills-section__list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width: $xs) {
  .skills-section__list{
    grid-template-columns: 1fr;
  }
}
</style>