<template>
  <div class="home_page">
    <div class="row">
      <div class="col_fir">
        <transition name="banner">
          <div class="banner" v-if="$route.path == '/home'">
            <img src="../../assets/pic/banner1.jpg" />
          </div>
        </transition>
        <div class="art_list">
          <ArticleList
            v-if="$route.meta.article"
            :articles="articles"
            :cates="cates"
            :tags="tags"
          ></ArticleList>
          <router-view v-if="refresh" />
        </div>
      </div>
      <div class="col_sec">
        <transition name="user">
          <div class="user" v-if="$route.meta.user">
            <img
              src="../../assets/pic/user_pic.jpg"
              style="width: 8rem; height: 8rem; border-radius: 0.3rem"
            />
            <h2>{{ userName }}</h2>
            <p>{{ signature }}</p>
          </div>
        </transition>
        <cate-list :cates="cates"></cate-list>
        <tag-list :tags="tags"></tag-list>
        <HotArticle
          :hots="hotArticles"
          :cates="cates"
          :tags="tags"
        ></HotArticle>
      </div>
    </div>
  </div>
</template>

<script>
import CateList from '@/components/catelist/CateList.vue'
import TagList from '@/components/taglist/TagList.vue'
import ArticleList from '@/components/articlelist/ArticleList.vue'
import HotArticle from '@/components/hotarticle/HotArticle.vue'
export default {
  components: {
    CateList,
    TagList,
    ArticleList,
    HotArticle
  },
  data () {
    return {
      userName: '15',
      signature: '保佑身边的人都天天开心',
      cates: [],
      tags: [],
      articles: [],
      hotArticles: [],
      refresh: true
    }
  },
  watch: {
    $route (to, from) {
      // 切换文章刷新
      if (
        to.query.article !== from.query.article ||
        to.query.cate !== from.query.cate ||
        to.query.info !== from.query.info ||
        to.query.tag !== from.query.tag
      ) {
        this.refresh = false
        this.$nextTick(() => {
          this.refresh = true
        })
      }
    }
  },
  async created () {
    // 获取分类文章数目
    this.cates = await this.getCateArticle()

    // 获取标签文章数目
    this.tags = await this.getTagArticle()
    this.articles = await this.getArticles()
    this.hotArticles = await this.getHotArticle()
  },
  methods: {
    // 获取分类文章
    async getCateArticle () {
      const cates = JSON.parse(window.localStorage.getItem('cates'))
      const yyy = []

      cates.forEach(async (v) => {
        const res = await this.$store.dispatch('cate/getCateArticle', v.id)
        v.num = res.data.data ? res.data.data.length : 0
        yyy.push(v)
      })
      return yyy
    },

    // 获取标签文章
    async getTagArticle () {
      const tags = JSON.parse(window.localStorage.getItem('tags'))
      const ooo = []

      tags.forEach(async (v) => {
        const res = await this.$store.dispatch('tag/getTagArticle', v.id)
        v.num = res.data.data ? res.data.data.length : 0
        ooo.push(v)
      })
      return ooo
    },

    // 获取所有文章
    async getArticles () {
      const res = await this.$store.dispatch('article/getArticles')
      return res.data.data
    },

    // 获取热门文章
    async getHotArticle () {
      const res = await this.$store.dispatch('article/getHotArticles')
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
      flex: 1;
      .banner {
        background-color: white;
        padding: 0.3rem;
        margin-bottom: 1rem;
      }
      .banner-leave-active {
        animation: fadeY 0.5s;
      }
      @keyframes fadeY {
        100% {
          transform: translateY(-200px);
          opacity: 0;
        }
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
        margin-bottom: 1rem;
        h2 {
          margin: 1.2rem 0;
        }
        p {
          font-size: 0.9rem;
          color: rgba(156, 163, 175, 1);
        }
      }
      // .user-leave-active{
      //   animation: fade 0.5s;
      // }
      // @keyframes fade {
      //   100%{
      //     transform: translateY(-200px);
      //     opacity: 0;
      //   }
      // }
    }
  }
}
</style>
