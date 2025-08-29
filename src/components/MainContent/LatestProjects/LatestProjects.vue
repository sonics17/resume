<template>
  <h2 class="projects-section__title main-section__title">Последние проекты</h2>
  <ul class="projects-section__list">
    <LatestProjectItem 
      v-for="(project, index) in latestProjects"
      :key="index"
      :project="project"
    />
  </ul>

</template>

<script>
import LatestProjectItem from './LatestProjectItem.vue';
import pomodoroIcon from '@/assets/images/project-icons/pomodoro.png';
import weatherIcon from '@/assets/images/project-icons/weather.png';

export default {
  components: {LatestProjectItem},
  data() {
    return {
      latestProjects: [
        {
          name: 'Таймер Pomodoro',
          description: 'Учебный проект таймер Помодоро',
          href: 'https://sonics17.github.io/pomodoro-timer/',
          icon: pomodoroIcon
        },
        {
          name: 'Приложение погоды',
          description: 'Учебный проект приложения погоды',
          href: 'https://sonics17.github.io/weather-app/',
          icon: weatherIcon
        }
      ]
    }
  }
}
</script>

<style>
.projects-section__list {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  width: 100%;
}
</style>