<template>
  <h2 class="certificates-section__title main-section__title">Сертификаты и награды</h2>
  <ul class="certificates-section__list">
    <CertificateItem 
      v-for="(certificate, index) in certificates"
      :key="index"
      :icon="certificate.icon"
      :name="certificate.name"
      :author="certificate.author"
      :period="certificate.period"
    />
  </ul>
</template>

<script>
import CertificateItem from './CertificateItem.vue';
import FreeCodeCampIcon from '@/assets/images/certificates/free-code-camp.png';
import GoogleIcon from '@/assets/images/certificates/google.png'; 

export default {
  components: {CertificateItem},
  data() {
    return {
      certificates: [
        {
          icon: FreeCodeCampIcon,
          name: 'Responsive Web Design',
          author: 'freeCodeCamp',
          period: 'Dec 2021 - Feb 2022'
        },
        {
          icon: GoogleIcon,
          name: 'Data Strcture & Algorithms',
          author: 'Google',
          period: 'Mar 2021 - Jun 2021'
        }
      ]
    }
  }
}
</script>

<style scoped>
.certificates-section__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>