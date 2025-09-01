<template>
  <h2 class="skills-section__title main-section__title">Навыки и инструменты</h2>
  <ul class="skills-section__list">
    <SkillItem 
      v-for="(skill, index) in skills" 
      :key="index"
      :name="skill.name"
      :icon="skill.icon"
      :description="skill.description"
    />
  </ul>
</template>

<script>
import HtmlIcon from '@/assets/images/skills/html.png';
import CssIcon from '@/assets/images/skills/css.png';
import JavascriptIcon from '@/assets/images/skills/javascript.png';
import VueIcon from '@/assets/images/skills/vue.png';
import GitIcon from '@/assets/images/skills/git.png';
import FigmaIcon from '@/assets/images/skills/figma.png';
import PythonIcon from '@/assets/images/skills/python.png';
import PostgresqlIcon from '@/assets/images/skills/postgresql.png';
import SkillItem from './SkillItem.vue';

export default {
  components: {SkillItem},
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          icon: HtmlIcon,
          description: 'Семантическая верстка, структура'
        },
        {
          name: 'CSS',
          icon: CssIcon,
          description: 'Стили, анимации, адаптивный дизайн'
        },
        {
          name: 'JavaScript',
          icon: JavascriptIcon,
          description: 'Интерактивность и логика'
        },
        {
          name: 'Vue.js',
          icon: VueIcon,
          description: 'Компонентная разработка'
        },
        {
          name: 'Git',
          icon: GitIcon,
          description: 'Контроль версий'
        },
        {
          name: 'PostgreSQL',
          icon: PostgresqlIcon,
          description: 'Базы данных и запросы'
        },
        {
          name: 'Python',
          icon: PythonIcon,
          description: 'Скрипты и автоматизация'
        },
        {
          name: 'Figma',
          icon: FigmaIcon,
          description: 'UI/UX дизайн'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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