<template>
  <div class="article_list">
    <ul>
      <li
        ref="artLi"
        v-for="article in arr"
        :key="article.id"
        @click="!$store.state.drawerFlag && tapToDetail(article)"
      >
        <div class="detail">
          <h2>{{ article.name }}</h2>
          <div class="other">
            <span
              ><i class="iconfont icon-caidan"></i>
              <i
                style="font-size: 0.8rem; margin-left: 0.2rem"
                v-for="(item, index) in JSON.parse(article.cate_id)"
                :key="index"
                >{{ getName("cates", item) }}</i
              ></span
            >
            <span
              ><i class="iconfont icon-31shijian"></i>
              {{ formateTime(article.createdate) }}</span
            >
            <span
              ><i class="iconfont icon-yanjing"></i> {{ article.traffic }}</span
            >
            <span
              ><i class="iconfont icon-pinglun"></i> {{ article.msg_num }}</span
            >
          </div>
          <p>{{ article.detail }}</p>
          <div class="tag_box">
            <span
              v-for="(item, index) in JSON.parse(article.tag_id)"
              :key="index"
              >{{ getName("tags", item) }}</span
            >
          </div>
        </div>
        <div class="pic_content">
          <img :src="article.article_avatar" v-imagerror="imgUrl" lazy />
        </div>
      </li>
    </ul>
    <div v-if="articles" style="text-align: center; padding: 1rem">
      <el-pagination
        ref="el_pa"
        :background="isBackground"
        :page-size="10"
        :page-count="10"
        layout="prev, pager, next"
        :total="arr.length"
        hide-on-single-page
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getName } from '@/utills/index'
import { formateTime } from '@/utills/formate'
import { mapActions } from 'vuex'
export default {
  props: ['articles'],
  data () {
    return {
      isBackground: true,
      tags: JSON.parse(window.sessionStorage.getItem('tags')),
      cates: JSON.parse(window.sessionStorage.getItem('cates')),
      arr: JSON.parse(window.sessionStorage.getItem('articles')) || [],
      imgUrl: 'https://s1.ax1x.com/2023/05/17/p9R569U.jpg'
    }
  },
  watch: {
    flag (n, o) {
      if (n) {
        const arr = this.$refs.artLi
        if (arr) {
          arr.forEach((element) => {
            element.style = 'pointer-events:none'
          })
        }
      } else {
        const arr = this.$refs.artLi
        if (arr) {
          arr.forEach((element) => {
            element.style = 'pointer-events:auto'
          })
        }
      }
    },
    articles (n, o) {
      n && this.getAvas(n)
    }
  },
  computed: {
    flag () {
      return this.$store.state.drawerFlag
    }
  },
  created () {
    this.getAvas(this.articles)
  },
  methods: {
    ...mapActions(['article/getAvatar']),

    // 格式化时间
    formateTime (time) {
      return formateTime(time)
    },

    // 获取标签名或类名
    getName (arr, id) {
      return getName(arr, id)
    },
    getAvas (articles) {
      const picArr = []
      if (!articles) {
        return
      }
      if (articles) {
        articles.forEach((e) => {
          picArr.push(this['article/getAvatar']({ id: e.id }))
        })
      }

      // 异步并行函数
      Promise.all(picArr).then((res) => this.switchPic(articles, res))
    },
    switchPic (articles, res) {
      for (let i = 0; i < articles.length; i++) {
        articles[i].article_avatar =
          'data:image/png;base64,' + res[i].data.baseUrl
      }
      this.arr = articles
      window.sessionStorage.removeItem(articles)
      window.sessionStorage.setItem('articles', JSON.stringify(articles))
    },

    // 跳转详情页
    tapToDetail (article) {
      try {
        this.$router.push({
          path: '/blog/detail',
          query: {
            article: encodeURIComponent(
              JSON.stringify({ ...article, cates: this.cates, tags: this.tags })
            )
          }
        })
      } catch (error) {
        return error
      } finally {
        this.$store.dispatch('article/insertTraffic', article.id)
        window.scrollY = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.article_list {
  @media screen and (min-width: 640px) {
    width: 47.9063rem;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    margin-top: 0.6rem;
  }
  background-color: white;
  ul {
    padding: 0 1.5rem;
    li {
      display: flex;
      padding: 1.5rem 0;
      border-bottom: 0.0625rem solid rgb(235, 235, 239);
      position: relative;
      animation: upper 1s;
      --webkit-animation: upper 1s;
      cursor: pointer;
      .detail {
        flex: 1;
        width: 0;
        h2 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .other {
          margin: 1rem 0;
          span {
            color: rgba(156, 163, 175, 1);
          }
        }
        p {
          color: rgb(156, 163, 175, 1);
          text-indent: 2em;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .tag_box {
          display: flex;
          margin-top: 0.6rem;
          span {
            padding: 0.1rem 0.6rem;
            border-radius: 1rem;

            color: rgb(156, 163, 175, 1);
            background-color: rgb(237, 237, 237);
          }
        }
      }
      .pic_content {
        flex: 0 0 25%;
        text-align: right;
        img {
          width: 9rem;
          height: 5.625rem;
        }
      }
    }
    @keyframes upper {
      0% {
        top: 10rem;
      }
      100% {
        top: 0;
      }
    }
  }
}
</style>
