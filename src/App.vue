<template>
  <div id="app">
    <NavHeader></NavHeader>
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader/NavHeader.vue'
export default {
  components: {
    NavHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: var(--theme-bg-color);
  height: 100rem;
  padding: 0 0.3rem;
  .container{
    width: var(--main-width );
    margin: 1rem auto;
  }
}
</style>
