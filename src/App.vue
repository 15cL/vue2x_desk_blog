<template>
  <div id="app">
    <NavHeader
      :icon_name="icon_name"
      :iconName="iconName"
      :navs="navs"
    ></NavHeader>
    <div class="container">
      <router-view />
    </div>
    <footer class="foot_me">这是属于小五的个人博客BLog © 2022.11.21 Sio</footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader/NavHeader.vue'
export default {
  components: {
    NavHeader
  },
  data () {
    return {
      iconName: 'Blog',
      icon_name: 'little five',
      navs: ['首页', '博客', '留言', '关于']
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: var(--theme-bg-color);
  .container {
    width: var(--main-width);
    @media screen and (min-width: 640px) {
      margin: 1rem auto;
    }
    @media screen and (max-width: 640px) {
      margin: 0.6rem auto;
    }
  }
  .foot_me {
    @media screen and (min-width: 640px) {
      marginp-top: 1.5rem;
    }
    @media screen and (max-width: 640px) {
      margin-top: 1.2rem;
    }
    font-size: 0.9rem;
    text-align: center;
    color: gainsboro;
    background-color: white;
  }
}
</style>
