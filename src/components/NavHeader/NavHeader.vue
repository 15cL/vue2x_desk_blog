<template>
  <div class="nav_header">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <div class="blog_sty">
            <h2>{{ iconName }}</h2>
            <h2 style="font-size: 1.5rem">{{ icon_name }}</h2>
          </div>
        </div>
        <div class="title">
          <span
            v-for="(nav, index) in navs"
            :key="index"
            :style="{ color: $route.name == nav ? 'green' : '' }"
            @click="tapTo(nav)"
            >{{ nav }}</span
          >
        </div>
      </div>
      <div class="icon_btn">
        <i
          class="iconfont icon-caidan"
          v-if="!drawer"
          @click="drawer = true"
          style="cursor: pointer"
        ></i>
        <i class="iconfont icon-chahao" v-else @click="drawer = false"></i>
      </div>
      <div class="search">
        <div class="box">
          <form action="">
            <input v-model="info" type="text" placeholder="搜索内容" @keyup.enter="searchRes(info)"/>
          </form>
          <button
            class="serach_btn"
            @click="searchRes(info)"
          >
            <i class="iconfont icon-sousuo"></i>
          </button>
        </div>
      </div>
    </div>
    <HomeDrawer
      v-if="drawer"
      :navs="navs"
      @exit="exit"
      @goTab="tapTo"
    ></HomeDrawer>
  </div>
</template>

<script>
import HomeDrawer from '@/components/homedrawer/HomeDrawer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    HomeDrawer
  },
  props: ['iconName', 'icon_name', 'navs'],
  data () {
    return {
      drawer: '',
      info: ''
    }
  },
  methods: {
    ...mapActions(['article/getSearchAticles']),
    exit () {
      this.drawer = false
    },

    // 跳转页面
    tapTo (name) {
      this.$router.push({ name })
    },

    // 搜索
    async searchRes (info) {
      const res = await this['article/getSearchAticles'](info)
      this.$router.push({
        path: '/blog/search',
        query: {
          info: encodeURIComponent(
            JSON.stringify({ list: res.data.data, keyword: info })
          )
        }
      })
      this.info = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_header {
  position: relative;
  height: 3rem;
  line-height: 3rem;
  padding: 0.5rem 0;
  background-color: white;
  .nav {
    display: flex;
    justify-content: space-between;
    width: var(--main-width);
    height: 3rem;
    margin: 0 auto;
    .left {
      display: flex;
      .logo {
        margin-right: 4rem;
        overflow: hidden;
        .blog_sty {
          display: flex;
          h2:first-child {
            padding: 0 0.7rem;
            border-radius: 0.3rem;
            background-color: rgba(26, 133, 226, 0.699);
            color: white;
            margin-right: 1rem;
          }
        }
      }

      .title {
        width: 26rem;
        justify-content: space-around;
        span {
          display: block;
          padding: 0 1rem;
          overflow: hidden;
          cursor: pointer;
        }
      }
    }
    .search {
      width: 14rem;
      .box {
        display: flex;
        justify-content: center;
        border: 0.0625rem solid rgba(211, 207, 207, 0.548);
        border-radius: 2rem;

        form {
          height: 3rem;
          line-height: 3rem;
          box-shadow: none;
          input {
            width: 10rem;
            margin: 0.3rem 0;
            height: 2.4rem;
            box-shadow: none;
          }
        }
        .serach_btn {
          padding: 0.3rem;
          box-shadow: none;
          i {
            display: inline-block;
            font-size: 1.4rem;
            color: gainsboro;
            box-shadow: none;
          }
          & :hover {
            color: rgb(107, 137, 46);
          }
        }
      }
      & :hover {
        box-shadow: 0 0 10px gainsboro;
      }
    }
  }
}
</style>
