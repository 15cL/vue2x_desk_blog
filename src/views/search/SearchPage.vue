<template>
  <div class="search_page">
    <header>
      <i class="iconfont icon-sousuo"></i>
      <label>
        搜索
        <h4>{{ info }}</h4>
        共找到
        <h4>{{ articles.length }}</h4>
        条记录
        <span @click="back"> x </span>
      </label>
    </header>
    <section v-if="articles.length">
      <ArticleList ref="result" :articles="articles"></ArticleList>
    </section>
  </div>
</template>

<script>
import ArticleList from '@/components/articlelist/ArticleList.vue'
export default {
  components: {
    ArticleList
  },
  data () {
    return {
      articles: [],
      info: ''
    }
  },
  created () {
    const res = JSON.parse(decodeURIComponent(this.$route.query.info))
    this.articles = res.list || []
    this.info = res.keyword
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.search_page {
  @media screen and (max-width: 950px) {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    width: 100vw;
    margin-top: 0.6rem;
    overflow-x:hidden
  }
  header {
    display: flex;
    align-items: center;
    width: 45.9063rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: white;
    label {
      display: flex;
      align-items: center;
      margin-left: 0.3rem;
      h4 {
        margin: 0 0.3rem;
        color: green;
      }
      span {
        margin-left: 0.3rem;
        color: gray;
        &:hover {
          color: rgb(9, 126, 236);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
