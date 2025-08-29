<template>
  <section class="profile-card">
      <div class="profile-card__avatar">
        <img :src="avatar" alt="me">
      </div>
      <h1 class="profile-card__name">Софья Горбунова</h1>
      <p class="profile-card__desc profile-text">
        Целеустремлённая начинающая frontend-разработчица, готовая активно учиться и вносить вклад в проекты по созданию пользовательских интерфейсов
      </p>
    </section>
</template>

<script>
import avatar from '@/assets/images/profile/avatar.webp';

export default {
  data() {
    return {
      avatar
    }
  }
}
</script>

<style lang="scss">
.profile-card {
  margin-bottom: 2rem;
}
.profile-card__avatar {
  aspect-ratio: 1/1;
  width: 6.25rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 1rem;
}
.profile-card__avatar img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.profile-card__name {
  color: $text-primary;
  margin: 0 0 2rem;
}
.profile-card__desc {
  color: $text-secondary;
}
@media(max-width: $lg) {
  .profile-card {
    grid-column: span 2;
    margin-bottom: 0;
  }
  .profile-card__avatar {
    width: 8rem;
    margin: 0 auto 1rem;
  }
  .profile-card__name {
    text-align: center;
    margin-bottom: 1rem;
  }
  .profile-card__desc {
    text-align: center;
  }
}
@media(max-width: $sm) {
  .profile-card {
    grid-column: span 1;
  }
  .profile-card__avatar {
    width: 5rem;
  }
}
</style>