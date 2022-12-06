<template>
  <div class="cate_art_page">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">
          <span class="active">首页</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          ><span style="cursor: pointer; color: black; font-weight: 600">{{
            cate.name
          }}</span></el-breadcrumb-item
        >
      </el-breadcrumb>
    </header>
    <section>
      <ArticleList :articles="articleList"></ArticleList>
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
      cate: '',
      articleList: ''
    }
  },
  async created () {
    this.cate = JSON.parse(decodeURIComponent(this.$route.query.cate))
    this.articleList = await this.getArtList(this.cate.id)
  },
  methods: {
    async getArtList (id) {
      const res = await this.$store.dispatch('cate/getCateArticle', id)
      return res.data.data
    }
  }
}
</script>
<style lang="scss" scoped>
.cate_art_page {
  header {
    padding: 1.5rem 1rem;
    background-color: white;
    margin-bottom: 1rem;
    .active {
      color: gray;
      &:hover {
      color: rgb(9, 126, 236);
    }
    }
  }
}
</style>
