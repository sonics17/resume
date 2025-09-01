<template>
  <li class="sidebar-item language-item">
    <inline-svg :src="icon" class="sidebar-item__icon language-item__icon" />
    <p class="sidebar-item__value language-item__value small-text">{{ name }}</p>
    <p class="sidebar-item__label language-item__label xsmall-text">{{ level }}</p>
  </li>

</template>

<script>
export default {
  props: {
    name: String,
    level: String,
    icon: String
  }
}
</script>

<style scoped>
.language-item {
  grid-template-areas: 
    "icon value"
    "icon label" !important;
}
</style>