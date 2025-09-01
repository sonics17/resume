<template>
  <li class="hobby-item">
    <inline-svg :src="icon" class="hobby-item__icon" />
    <p class="hobby-item__value sidebar-item__value small-text">{{ name }}</p>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String
  }
}
</script>

<style scoped>
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