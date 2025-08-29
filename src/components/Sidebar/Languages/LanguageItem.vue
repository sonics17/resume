<template>
  <li class="sidebar-item language-item">
    <component :is="language.icon" class="sidebar-item__icon language-item__icon" />
    <p class="sidebar-item__value language-item__value small-text">{{ language.value }}</p>
    <p class="sidebar-item__label language-item__label xsmall-text">{{ language.label }}</p>
  </li>

</template>

<script>
export default {
  props: {
    language: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.language-item {
  grid-template-areas: 
    "icon value"
    "icon label" !important;
}
</style>