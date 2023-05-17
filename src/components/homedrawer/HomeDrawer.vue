<template>
  <div class="home_drawer" @click="exit">
    <div id="box">
      <div class="search">
        <div class="box" @click.stop="focus">
          <form action="">
            <input ref="inputB" v-model="key" type="text" placeholder="搜索内容" />
          </form>
          <button class="serach_btn" @click="tapToSearch(key)">
            <i class="iconfont icon-sousuo"></i>
          </button>
        </div>
      </div>
      <div class="title">
        <ul>
          <li v-for="(nav, index) in navs" :key="index" @click="tapTo(nav)">
            <a href="#" :style="{ color: $route.name == nav ? 'green' : '' }">{{
              nav
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['navs'],
  data () {
    return {
      key: ''
    }
  },
  methods: {
    ...mapActions(['article/getSearchAticles']),
    async tapToSearch (info) {
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
      this.exit()
    },
    focus () {
      this.$refs.inputB.focus()
    },
    exit () {
      this.$emit('exit')
    },
    tapTo (nav) {
      this.$emit('goTab', nav)
    }
  }
}
</script>

<style lang="scss" scoped>
.home_drawer {
  margin-top: 0.5rem;
  width: 100vw;
  height: calc(100vh - 4rem);
  background-color: rgba(4, 4, 4, 0.1);
  #box {
    position: absolute;
    top: 4.1rem;
    right: 0;
    width: 50%;
    height: calc(100vh - 4.1rem);
    padding: 0.8rem 2rem 0 0.3rem;
    background-color: white;
    z-index: 999;
    animation: fade-in 1s;
    .search {
      width: 12rem;
      .box {
        display: flex;
        justify-content: center;
        border: 0.0625rem solid rgba(211, 207, 207, 0.548);
        border-radius: 2rem;

        form {
          height: 2rem;
          line-height: 2rem;
          box-shadow: none;
          margin: 0 0.5rem;
          input {
            width: 8rem;
            height: 2rem;
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
    .title {
      ul {
        li {
          border-bottom: 0.01rem solid gainsboro;
        }
      }
    }
  }
  @keyframes fade-in {
    0% {
      transform: translateX(50%);
      opacity: 1;
    }
  }
}
</style>
