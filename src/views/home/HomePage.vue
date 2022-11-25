<template>
  <div class="home_page">
    <div class="row">
      <div class="col_fir">
        <div class="banner">
          <img src="../../assets/pic/banner1.jpg" />
        </div>
        <div class="art_list">
          <ArticleList :articles="articles" :cates="cates" :tags="tags"></ArticleList>
        </div>
      </div>
      <div class="col_sec">
        <div class="user">
          <img
            src="../../assets/pic/user_pic.jpg"
            style="width: 8rem; height: 8rem; border-radius: 0.3rem"
          />
          <h2>{{ userName }}</h2>
          <p>{{ signature }}</p>
        </div>
        <cate-list :cates="cates"></cate-list>
        <tag-list :tags="tags"></tag-list>
      </div>
    </div>
  </div>
</template>

<script>
import CateList from '@/components/catelist/CateList.vue'
import TagList from '@/components/taglist/TagList.vue'
import ArticleList from '@/components/articlelist/ArticleList.vue'
export default {
  components: {
    CateList,
    TagList,
    ArticleList
  },
  data () {
    return {
      userName: '15',
      signature: '保佑身边的人都天天开心',
      cates: [],
      tags: [],
      articles: []
    }
  },
  async created () {
    this.cates = await this.getCates()
    this.tags = await this.getTags()
    this.articles = await this.getArticles()
  },
  methods: {
    // 获取分类列表
    async getCates () {
      const res = await this.$store.dispatch('cate/getCates')
      return res.data.data
    },

    // 获取标签列表
    async getTags () {
      const res = await this.$store.dispatch('tag/getTags')
      return res.data.data
    },
    async getArticles () {
      const res = await this.$store.dispatch('article/getArticles')
      console.log(res)
      return res.data.data
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page {
  .row {
    display: flex;
    justify-content: space-between;
    .col_fir {
      flex: 2.2;
      .banner {
        background-color: white;
        padding: 0.3rem;
      }
    }
    .col_sec {
      flex: 1;
      margin-left: 1rem;
      width: 100%;
      .user {
        text-align: center;
        padding: 3rem 2rem;
        background-color: white;
        border-radius: 0.3rem;
        h2 {
          margin: 1.2rem 0;
        }
        p {
          font-size: 0.9rem;
          color: rgba(156, 163, 175, 1);
        }
      }
    }
  }
}

</style>
