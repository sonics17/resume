<template>
  <div class="main">
    <section class="main-section">
      <div class="main-section__marker"></div>
      <Education />
    </section>

    <section class="main-section">
      <div class="main-section__marker"></div>
      <Experience />
    </section>

    <section class="main-section">
      <div class="main-section__marker"></div>
      <Skills />
    </section>

    <section class="main-section">
      <div class="main-section__marker"></div>
      <LatestProjects />
    </section>

    <section class="main-section">
      <div class="main-section__marker"></div>
      <Certificates />
    </section>
  </div>
</template>

<script>
import Education from './Education/Education.vue';
import Experience from './Experience/Experience.vue';
import Skills from './Skills/Skills.vue';
import LatestProjects from './LatestProjects/LatestProjects.vue';
import Certificates from './Certificates/Certificates.vue';

export default {
  components: {
    Education,
    Experience,
    Skills,
    LatestProjects,
    Certificates
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  min-height: 100vh;
  padding: 64px 48px 32px 96px;
  position: relative;
}

.main::before {
  position: absolute;
  content: '';
  background-color: #E2E6EE;
  width: 1px;
  height: calc(100% - 64px);
  top: 64px;
  bottom: 0;
  left: 48px
}

.main-section {
  padding-bottom: 3rem;
  position: relative;
}

.main-section:last-child {
  padding-bottom: 0;
}

.main-section__marker {
  position: absolute;
  width: 32px;
  height: 32px;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #fff;
  left: -48px;
  box-shadow: 
    0px 2px 6px rgba(146, 146, 146, 0.25),
    inset 0px 2px 6px rgba(146, 146, 146, 0.15);
}

.main-section__marker::after {
  position: absolute;
  content: '';
  background-color: #5531A7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

@media(max-width: $lg) {
  .main::before, .main-section__marker, .main-section__marker::after {
    display: none;
  }

  .main {
    padding: 32px 16px;
  }

  .main-section {
    padding-bottom: 32px;
  }
}
</style>