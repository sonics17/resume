<template>
  <li class="project-item">
    <div class="project-item__content">
      <img :src="icon" :alt="name" class="project-item__icon">
      <div class="project-item__text">
        <p class="project-item__name medium-text">{{ name }}</p>
        <p class="project-item__description small-text">{{ description }}</p>
      </div>
    </div>
    <a :href="href" target="_blank" class="project-item__link medium-text">{{ href }}</a>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    href: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  background-color: #F7F9FC;
  padding: 1.5rem;
  flex: 1 1 calc(50% - 0.375rem);
  max-width: calc(50% - 0.375rem);
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
}

.project-item__content {
  display: flex;
  gap: 1rem;
  align-items: start;
}

.project-item__icon {
  width: 3rem;
  height: auto;
  object-fit: contain;
}

.project-item__name {
  color: $text-primary;
  margin-bottom: 0.25rem;
}

.project-item__description {
  color: $text-tertiary;
}

.project-item__link {
  color: #516CF7;
  display: inline-flex;
  gap: 0.75rem;
  overflow-wrap: anywhere;
  align-items: start;
}

.project-item__link::before {
  content: '';
  flex-shrink: 0;
  top: 0;
  left: 0;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #E1E7FE;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.80907 11.4101C2.53458 11.4101 1.38558 10.6424 0.897769 9.46493C0.409962 8.28749 0.679402 6.93214 1.58047 6.0308L2.91788 4.69339L3.80907 5.58458L2.47229 6.92136C1.99459 7.39906 1.80802 8.09532 1.98287 8.74787C2.15772 9.40042 2.66742 9.91012 3.31997 10.085C3.97252 10.2598 4.66878 10.0733 5.14648 9.59556L6.48327 8.25878L7.37446 9.1506L6.03767 10.4874C5.44779 11.0802 4.64534 11.4124 3.80907 11.4101ZM4.25466 8.70437L3.36347 7.81318L7.82005 3.35661L8.71124 4.2478L4.25529 8.70374L4.25466 8.70437ZM9.15746 7.36759L8.26564 6.4764L9.60243 5.13961C10.0866 4.66335 10.2782 3.96397 10.1043 3.30743C9.93034 2.6509 9.41765 2.13809 8.76116 1.96401C8.10467 1.78993 7.40524 1.98133 6.92886 2.46542L5.59145 3.8022L4.70026 2.91101L6.03767 1.5736C7.26989 0.352131 9.25766 0.356484 10.4845 1.58334C11.7114 2.81019 11.7157 4.79796 10.4942 6.03017L9.15746 7.36696V7.36759Z' fill='%23516CF7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.672rem;
}

.project-item__link:hover {
  opacity: 0.7;
}

@media(max-width: $xxl) {
  .project-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media(max-width: $lg) {
  .project-item {
    flex: 1 1 calc(50% - 0.375rem);
    max-width: calc(50% - 0.375rem);
  }
}

@media(max-width: $md) {
  .project-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>