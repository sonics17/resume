<template>
  <li class="sidebar-item social-item">
    <inline-svg :src="icon" class="sidebar-item__icon social-item__icon" />
    <p class="sidebar-item__label social-item__label xsmall-text">{{ name }}</p>
    <a 
      :href="href" 
      target="_blank"
      class="sidebar-item__value social-item__value small-text" 
    > 
      {{ username }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    href: String,
    username: String,
    icon: String
  }
}
</script>

<style scoped>
.social-item__value {
  text-decoration: underline;
}

.social-item__label, .social-item__value {
  overflow-wrap: anywhere;
}

.social-item__value:hover {
  opacity: 0.7;
}
</style>