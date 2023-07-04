<template>
  <div class="home_page">
    <div class="row">
      <div class="col_fir">
        <transition name="banner">
          <div
            class="banner"
            v-if="$route.path == '/home' || $route.path == '/'"
          >
            <img src="https://s1.ax1x.com/2023/05/17/p9R569U.jpg" />
          </div>
        </transition>
        <div class="art_list">
          <ArticleList
            ref="artDom"
            v-if="$route.meta.article && articles.length && tags"
            :articles="articles"
            :cates="cates"
            :tags="tags"
          ></ArticleList>
          <AboutPage v-else-if="$route.meta.about"></AboutPage>
          <MsgList v-else-if="$route.meta.msg" :msgList="msgList"></MsgList>
          <router-view v-if="refresh" />
        </div>
      </div>
      <div class="col_sec">
        <transition name="user">
          <div class="user" v-if="$route.meta.user">
            <img
              src="https://s1.ax1x.com/2023/05/17/p9RxeaD.jpg"
              style="width: 8rem; height: 8rem; border-radius: 0.3rem"
            />
            <h2>{{ userName }}</h2>
            <p>{{ signature }}</p>
          </div>
        </transition>
        <cate-list :cates="cates" v-if="cates"></cate-list>
        <tag-list :tags="tags" v-if="!$route.meta.about && tags"></tag-list>
        <HotArticle
          v-if="hotArticles"
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
import AboutPage from '@/views/about/AboutPage.vue'
import MsgList from '@/components/msglist/MsgList.vue'

export default {
  components: {
    CateList,
    TagList,
    ArticleList,
    HotArticle,
    AboutPage,
    MsgList
  },
  data () {
    return {
      userName: '15',
      signature: '保佑身边的人都天天开心',
      cates: '',
      tags: '',
      articles: [],
      hotArticles: [],
      refresh: true,
      msgList: ''
    }
  },
  watch: {
    async $route (to, from) {
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
      // 获取所有留言
      if (to.meta.msg) {
        this.msgList = await this.$store.dispatch('msg/getAllMsg')
      }
    }
  },
  async created () {
    // 存储articles
    await this.getArticles()

    // 存储hotArticles
    await this.getHotArticle()

    this.cates = await this.getCateArticle()

    // 获取标签文章数目
    this.tags = await this.getTagArticle()
  },
  methods: {
    // 获取所有文章
    async getArticles () {
      let res = ''
      try {
        res = await this.$store.dispatch('article/getArticles')
      } catch (error) {
        console.log(error)
      } finally {
        this.articles = res.data.data
        window.sessionStorage.setItem(
          'articles',
          JSON.stringify(res.data.data)
        )
      }
    },

    // 获取热门文章
    async getHotArticle () {
      let res = ''
      try {
        res = await this.$store.dispatch('article/getHotArticles')
      } catch (error) {
        console.log(error)
      } finally {
        this.hotArticles = res.data.data
        window.sessionStorage.setItem(
          'hotArticles',
          JSON.stringify(res.data.data)
        )
      }
    },

    // 获取分类文章
    async getCateArticle () {
      const res = await this.$store.dispatch('cate/getCates')
      window.sessionStorage.setItem('cates', JSON.stringify(res.data.data))
      const cates = res.data.data || []
      const yyy = []

      if (cates) {
        cates.forEach(async (v) => {
          const res = await this.$store.dispatch('cate/getCateArticle', v.id)
          v.num = res.data.data ? res.data.data.length : 0
          yyy.push(v)
        })
      }
      return yyy
    },

    // 获取标签文章
    async getTagArticle () {
      const res = await this.$store.dispatch('tag/getTags')
      window.sessionStorage.setItem('tags', JSON.stringify(res.data.data))
      const tags = res.data.data || []
      const ooo = []
      if (tags) {
        tags.forEach(async (v) => {
          const res = await this.$store.dispatch('tag/getTagArticle', v.id)
          v.num = res.data.data ? res.data.data.length : 0
          ooo.push(v)
        })
      }

      return ooo
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
      width: 100vw;
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
      margin-left: 1rem;
      width: 19.2125rem;
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
    }
  }
}
</style>
