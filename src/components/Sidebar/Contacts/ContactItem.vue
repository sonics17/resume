<template>
  <li class="sidebar-item contact-item">
    <component :is="contact.icon" class="sidebar-item__icon contact-item__icon" />
    <p class="sidebar-item__label contact-item__label xsmall-text">{{ contact.label }}</p>
    <component
      :is="contact.href ? 'a' : 'p'"
      :href="contact.href"
      :target="contact.href && contact.href.startsWith('http') ? '_blank' : null"
      class="sidebar-item__value contact-item__value small-text"
    >
      {{ contact.value }}
    </component>
  </li>

</template>

<script>

export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
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