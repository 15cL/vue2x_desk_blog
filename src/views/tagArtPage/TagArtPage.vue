<template>
  <div class="tag_article">
    <header>
      <h3 @click="back"><i class="iconfont icon-zhixiangzuo"></i></h3>
      <span>{{ tag.name }}</span>
    </header>
    <section>
      <ArticleList :articles="articles"></ArticleList>
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
      tag: '',
      articles: ''
    }
  },
  async created () {
    this.tag = JSON.parse(decodeURIComponent(this.$route.query.tag))
    this.articles = await this.getArtList(this.tag.id)
  },
  methods: {
    async getArtList (id) {
      const res = await this.$store.dispatch('tag/getTagArticle', id)
      return res.data.data
    },
    back () {
      this.$router.push('/blog')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: white;
  margin-bottom: 1rem;
  h3 {
    margin-right: 1rem;
    cursor: pointer;
    &:hover {
      color: rgb(9, 126, 236);
    }
  }
}
</style>
