<template>
  <li class="skill-item">
    <img :src="skill.logo" alt="" class="skill-item__logo">
    <p class="skill-item__name small-text">{{ skill.name }}</p>
    <p class="skill-item__description xxsmall-text">{{ skill.description }}</p>
  </li>

</template>

<script>
export default {
  props: {
    skill: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.skill-item {
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F9FC;
  text-align: center;
  padding: 1.25rem;
  border-radius: 6px;
}
.skill-item:nth-child(-n+3) {
  grid-column: span 5;
}
.skill-item__logo {
  height: 4rem;
  width: auto;
  object-fit: contain;
  margin-bottom: 0.5rem;
}
.skill-item__name {
  margin-bottom: 0.125rem;
  color: $text-primary;
}
.skill-item__description {
  color: $text-tertiary;
}

@media (max-width: $skils-break) {
  .skill-item, .skill-item:nth-child(-n+3) {
    grid-column: span 1;
  }
}
@media(max-width: $md) {
  .skill-item__logo {
    height: 3rem;
  }
}

</style>