<template>
  <aside class="sidebar">
    <ProfileCard />
    <section class="sidebar-section">
      <Contacts />
    </section>
    <section class="sidebar-section">
      <Socials />
    </section>
    <section class="sidebar-section">
      <Languages />
    </section>
    <section class="sidebar-section">
      <Hobbies />
    </section>
  </aside>
</template>

<script>
import ProfileCard from './ProfileCard.vue';
import Contacts from './Contacts/Contacts.vue';
import Socials from './Socials/Socials.vue';
import Languages from './Languages/Languages.vue';
import Hobbies from './Hobbies/Hobbies.vue';

export default {
  components: {
    ProfileCard,
    Contacts,
    Socials,
    Languages,
    Hobbies
  }
}
</script>


<style lang="scss">
.sidebar {
  background-color: #F7F9FC;
  padding: 48px 16px 48px 48px;
  min-height: 100vh;
  box-sizing: border-box;
}
.sidebar-section {
  position: relative;
  padding: calc(2rem + 1px) 0;
}

.sidebar > .sidebar-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 1px;
  background-color: #E2E6EE;
}

@media(max-width: $lg) {
  .sidebar {
    min-height: min-content;
    padding: 32px 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .sidebar-section {
    padding: 0;
  }
  .sidebar > .sidebar-section::before {
    display: none;
  }
}

@media(max-width: $sm) {
  .sidebar {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .sidebar-section {
    padding-top: 1rem;
  }
  .sidebar > .sidebar-section::before {
    display: block;
    width: 100%;
  }
}
</style>