<template>
  <h2 class="education-section__title main-section__title">Образование</h2>
  <ul class="education-section__list">
    <EducationItem 
      v-for="(education, index) in educationItems" 
      :key="index"
      :institution="education.institution"
      :logo="education.logo"
      :degree="education.degree"
      :period="education.period"
      :gpa="education.gpa"
    />
  </ul>
</template>

<script>
import EducationItem from './EducationItem.vue';
import DubnaUniLogo from '@/assets/images/logos/uniDubna.svg'

export default {
  components: {EducationItem},
  data() {
    return {
      educationItems: [
        {
          institution: 'Государственный университет "Дубна"',
          logo: DubnaUniLogo,
          degree: 'Программная инженерия',
          period: '2018 - 2022',
          gpa: '4.2'
        }
      ]
    }
  }
}
</script>

<style scoped>
.education-section__list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
}
</style>