<template>
  <li class="sidebar-item contact-item">
    <inline-svg :src="icon" class="sidebar-item__icon contact-item__icon" />
    <p class="sidebar-item__label contact-item__label xsmall-text">{{ title }}</p>
    <component
      :is="href ? 'a' : 'p'"
      :href="href"
      :target="href && href.startsWith('http') ? '_blank' : null"
      class="sidebar-item__value contact-item__value small-text"
    >
      {{ value }}
    </component>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    icon: String,
    href: [String, null]
  }
}
</script>

<style lang="scss" scoped>
a.contact-item__value {
  text-decoration: none;
  word-break: break-all;
}

a.contact-item__value[href^="http"] {
  text-decoration: underline;
}

a.contact-item__value:hover {
  opacity: 0.7;
}

@media(max-width: $lg) {
  a.contact-item__value {
    word-break: unset;
  }
}
</style>