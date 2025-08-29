<template>
  <li class="certificate-item">
    <div class="certificate-item__content">
      <img :src="certificate.icon" :alt="certificate.author" class="certificate-item__icon">
      <div class="certificate-item__text">
        <p class="certificate-item__author xsmall-text">{{ certificate.author }}</p>
        <p class="certificate-item__name medium-text">{{ certificate.name }}</p>
      </div>
    </div>
    <p class="certificate-item__period xsmall-text">{{ certificate.period }}</p>
  </li>
</template>

<script>
export default {
  props: {
    certificate: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.certificate-item {
  display: flex;
  justify-content: space-between;
  background-color: #F7F9FC;
  padding: 1rem 1.5rem;
  min-width: 90%;
  box-sizing: border-box;
  gap: 0.5rem;
  border-radius: 6px;
}
.certificate-item__content {
  display: flex;
  gap: 0.75rem;
}
.certificate-item__icon {
  width: 2.5rem;
  height: auto;
  object-fit: contain;
}
.certificate-item__author {
  color: $text-tertiary;
  margin-bottom: 0.25rem;
}
.certificate-item__name {
  color: $text-primary;
}
.certificate-item__period {
  color: $text-secondary;
}

@media(max-width: $xxl) {
  .certificate-item {
    width: 100%;
  }
  .certificate-item {
    flex-direction: column;
  }
}
@media(max-width: $lg) {
  .certificate-item {
    flex-direction: row;
  }
}
@media(max-width: $sm) {
  .certificate-item {
    flex-direction: column;
  }
}
</style>