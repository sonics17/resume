<template>
  <div class="wrapper">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script>
import MainContent from './components/MainContent/MainContent.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  components: {
    MainContent,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: minmax(380px, 1fr) 3fr;
  min-height: 100vh;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

@media(max-width: $lg) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
