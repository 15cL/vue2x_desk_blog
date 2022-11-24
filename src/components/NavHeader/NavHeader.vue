<template>
  <div class="nav_header">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <div class="blog_sty">
            <h2>{{iconName}}</h2>
            <h2 style="font-size:1.5rem">{{name}}</h2>
          </div>
        </div>
        <div class="title">
          <a href="#">首页</a>
          <a href="#">博客</a>
          <a href="#">归档</a>
          <a href="#">留言</a>
          <a href="#">关于</a>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconName: 'Blog',
      name: 'little five'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_header {
  width: 100%;
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
        display: flex;
        width: 26rem;
        justify-content: space-around;
        a {
          display: block;
          padding: 0 1rem;
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
