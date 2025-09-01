<template>
  <li class="education-item">
    <div class="education-item__top">
      <img :src="logo" :alt="institution" class="education-item__logo" />
      <h3 class="education-item__institution xsmall-text">{{ institution }}</h3>
    </div>
    <div class="education-item__bottom">
      <p class="education-item__degree small-text">{{ degree }}</p>
      <p class="education-item__period xxsmall-text">{{ period }}</p>
      <p class="education-item__gpa xsmall-text"><span>Средний балл</span> - {{ gpa }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    institution: String,
    degree: String,
    period: String,
    logo: String,
    gpa: String
  }
}
</script>

<style lang="scss" scoped>
.education-item {
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(33% - 0.25rem);
  min-width: calc(33% - 0.25rem);
  max-width: fit-content;
  row-gap: 8px;
  background-color: #F7F9FC;
  padding: 16px 24px;
  border-radius: 6px;
  box-sizing: border-box;
}

.education-item__top {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.education-item__logo {
  height: 48px;
  flex-shrink: 0;
  width: auto;
  object-fit: contain;
}

.education-item__institution {
  color: $text-primary;
  font-weight: 500;
  flex: 1;
}

.education-item__bottom p {
  margin-bottom: 0.125rem;
}

.education-item__degree {
  color: $text-primary;
}

.education-item__period {
  color: $text-tertiary;
}

.education-item__gpa {
  color: $text-tertiary;
  white-space: nowrap;
}

.education-item__gpa span {
  color: #5D5FEF;
}

@media(max-width: $xxl){
  .education-item {
    flex-direction: row;
    column-gap: 1rem;
    max-width: none;
    flex: 1 1 100%;
    justify-content: space-between;
  }

  .education-item__bottom {
    text-align: right;
  }
}

@media(max-width: $lg) {
  .education-item {
    flex: 1 1 calc(50% - 0.25rem);
    max-width: calc(50% - 0.25rem);
    flex-direction: column;
    justify-content: start;
  }

  .education-item__bottom {
    text-align: left;
  }
}

@media(max-width: $sm) {
  .education-item {
    max-width: none;
    flex: 1 1 100%;
  }
}
</style>