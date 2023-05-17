<template>
  <div class="hot_art">
    <header><i class="iconfont icon-icon-test"></i> 热门文章</header>
    <section>
      <div v-for="(hot, index) in hots" :key="hot.id">
        <span
          :style="{
            marginRight: '0.3rem',
            color: colors[index] ? colors[index] : 'black',
          }"
          >{{ index + 1 }}</span
        >
        <label @click.prevent="tapToDetail(hot)"> {{ hot.name }}</label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['hots', 'cates', 'tags'],
  data () {
    return {
      colors: ['red', 'orangered', 'orange']
    }
  },

  methods: {
    // 跳转详情页
    tapToDetail (article) {
      this.$forceUpdate()
      this.$router.push({
        path: '/blog/detail',
        query: {
          article: encodeURIComponent(
            JSON.stringify({ ...article, cates: this.cates, tags: this.tags })
          )
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hot_art {
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: 0.3rem;
  section {
    div {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-size: 0.8rem;
      label {
        flex: 0 0 92%;
        font-size: 0.9rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        cursor: pointer;
      }
      & :hover {
        color: rgb(209, 92, 8);
      }
    }
  }
}
</style>
