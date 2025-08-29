<template>
  <li class="hobby-item">
    <component :is="hobby.icon" class="hobby-item__icon"></component>
    <p class="hobby-item__value sidebar-item__value small-text">{{ hobby.value }}</p>
  </li>
</template>

<script>
export default {
  props: {
    hobby: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.hobby-item {
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
}
.hobby-item__icon {
  width: 1.56rem;
  height: auto;
  padding: 4px;
}
</style>