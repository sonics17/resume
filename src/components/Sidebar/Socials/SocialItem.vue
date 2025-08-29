<template>
  <li class="sidebar-item social-item">
    <component :is="social.icon" class="sidebar-item__icon social-item__icon" />
    <p class="sidebar-item__label social-item__label xsmall-text">{{ social.label }}</p>
    <a 
      :href="social.href" 
      target="_blank"
      class="sidebar-item__value social-item__value small-text" 
    > 
      {{ social.value }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
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