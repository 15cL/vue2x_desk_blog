<template>
  <div class="home_drawer" @click.self="exit">
    <div id="box">
      <div class="search">
        <div class="box">
          <form action="">
            <input type="text" placeholder="搜索内容" />
          </form>
          <button class="serach_btn">
            <i class="iconfont icon-sousuo"></i>
          </button>
        </div>
      </div>
      <div class="title">
        <ul>
          <li v-for="(nav, index) in navs" :key="index">
            <a href="#">{{ nav }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navs'],
  methods: {
    exit () {
      this.$emit('exit')
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
}
</style>
