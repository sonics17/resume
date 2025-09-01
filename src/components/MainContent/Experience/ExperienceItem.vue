<template>
  <li class="experience-item">
    <div class="experience-item__marker"></div>
    <div class="experience-item__content">
      <div class="experience-item__info">
        <div class="experience-item__top">
          <p class="experience-item__period xxsmall-text" :class="{'experience-item__period--present': isPresent}">{{ period }}</p>
          <p class="experience-item__location xxsmall-text">{{ location }}</p>
        </div>
        <div class="experience-item__bottom">
          <img :src="logo" alt="company-logo" class="experience-item__logo">
          <p class="experience-item__company small-text">{{ company }}</p>
          <h3 class="experience-item__role xsmall-text">{{ role }}</h3>
        </div>
      </div>
      <p class="experience-item__description xsmall-text">{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
      logo: String,
      period: String,
      location: String,
      role: String,
      company: String,
      description: String
  },
  computed: {
    isPresent() {
      const period = this.period.toLowerCase();
      return period.includes('настоящее время') || period.includes('present');
    }
  }
}
</script>

<style lang="scss" scoped> 
.experience-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 1rem;
  position: relative;
}

.experience-item__marker {
  position: relative;
}

.experience-item__marker::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: $text-primary;
  border-radius: 50%;
}

.experience-item__marker::after {
  content: '';
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background: #F7F9FC;
}

.experience-item__content {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 0.37rem 0 1.25rem;
}

.experience-item__info {
  flex: 0 0 35%;
  max-width: 280px;
}

.experience-item__top {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.experience-item__period {
  color: $text-secondary;
}

.experience-item__period--present {
  color: #9251F7;
  position: relative;
  background-color: #EFE2F9;
  padding: 1.57px 1.67px;
  border-radius: 3px;
}

.experience-item__location::before {
  content: '';
  display: inline-block;
  width: 0.875em;
  height: 1.125em;
  background-image: url("data:image/svg+xml,%3Csvg width='7' height='9' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.19182 9.23627C3.55497 8.69305 2.96467 8.09752 2.42708 7.45591C1.62035 6.49236 0.662354 5.05738 0.662354 3.68997C0.661639 2.26182 1.52165 0.973995 2.84107 0.427437C4.1605 -0.119122 5.67927 0.18332 6.68866 1.19363C7.35243 1.85445 7.72426 2.75335 7.7213 3.68997C7.7213 5.05738 6.76328 6.49236 5.95655 7.45591C5.41897 8.09752 4.82867 8.69305 4.19182 9.23627ZM4.19182 2.17734C3.65141 2.17734 3.15205 2.46565 2.88184 2.93366C2.61164 3.40167 2.61164 3.97828 2.88184 4.44628C3.15205 4.91429 3.65141 5.2026 4.19182 5.2026C5.02722 5.2026 5.70444 4.52537 5.70444 3.68997C5.70444 2.85457 5.02722 2.17734 4.19182 2.17734Z' fill='%2379819A'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.5em;
  vertical-align: middle;
}

.experience-item__location {
  color: $text-tertiary;
}

.experience-item__bottom {
  display: grid;
  grid-template: repeat(2, auto) / 48px auto;
  grid-template-areas: 
    "logo role"
    "logo company";
  align-items: center;
  gap: 0.25rem 1rem;
}

.experience-item__logo {
  width: 48px;
  height: auto;
  object-fit: contain;
  grid-area: logo;
}

.experience-item__company {
  grid-area: company;
  color: $text-primary;
}

.experience-item__role {
  grid-area: role;
  color: $text-tertiary;
}

.experience-item__description {
  flex: 1;
  color: $text-tertiary;
}

@media(max-width: $xl) {
  .experience-item__content {
    flex-direction: column;
  }
}

@media(max-width: $sm) {
  .experience-item {
    gap: 0.25rem;
  }
}
</style>