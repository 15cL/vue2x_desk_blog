<template>
  <div class="art_detail">
    <header>
      <h1>{{ article.name }}</h1>
      <div class="other">
        <span
          ><i class="iconfont icon-caidan"></i>
          <label
            style="font-size: 0.8rem; margin-left: 0.2rem"
            v-for="(item, index) in JSON.parse(article.cate_id)"
            :key="index"
            >{{ getName("cates", item) }}</label
          ></span
        >
        <span
          ><i class="iconfont icon-31shijian"></i>
          {{ formateTime(article.createdate) }}</span
        >
        <span><i class="iconfont icon-yanjing"></i> {{ article.traffic }}</span>
        <span><i class="iconfont icon-pinglun"></i> {{ msgList.length||0 }}</span>
      </div>
      <div class="content">
        <div v-html="text" class="markdown-body"></div>
      </div>
    </header>
    <DetailFooter
      :lastArt="lastArt"
      :nextArt="nextArt"
      v-if="lastArt || nextArt"
    >
      <template v-slot:left>
        <span
          v-if="lastArt"
          @click="tapToDetail(lastArt)"
          style="cursor: pointer"
          >{{ lastArt.name }}</span
        >
        <span style="color: rgb(167, 167, 167)" v-else>没有了</span></template
      >
      <template v-slot:right>
        <span
          v-if="nextArt"
          @click="tapToDetail(nextArt)"
          style="cursor: pointer"
          >{{ nextArt.name }}</span
        >
        <span v-else style="color: rgb(167, 167, 167)"
          >已经到底了</span
        ></template
      >
    </DetailFooter>
    <MsgWrite ref="msgwrite" :id="article.id" @add="addMsg"></MsgWrite>
    <MsgList :msgList="msgList"></MsgList>
  </div>
</template>

<script>
import { marked } from 'marked'
import { getName } from '@/utills/index'
import { formateTime } from '@/utills/formate'
import DetailFooter from './DetailFooter/DetailFooter.vue'
import MsgList from '@/components/msglist/MsgList.vue'
import MsgWrite from '@/components/msgwrite/MsgWrite.vue'
export default {
  components: {
    DetailFooter,
    MsgList,
    MsgWrite
  },
  data () {
    return {
      article: '',
      text: '',
      lastArt: '',
      nextArt: '',
      msgList: ''
    }
  },
  async created () {
    // 获取文章
    this.article = JSON.parse(decodeURIComponent(this.$route.query.article))
    const articles = await this.getArticles()
    const index = articles.findIndex((v) => v.id === this.article.id)
    this.lastArt = articles[index - 1] || ''
    this.nextArt = articles[index + 1] || ''

    // console.log(this.article)
    // 解析markdown文本
    this.text = marked.parse(this.article.detail)

    // 获取文章下留言
    console.log(this.article)
    await this.getArticleMsg(this.article.id)

    window.scrollTo({ top: 0 })
  },

  methods: {
    // 格式化时间
    formateTime (time) {
      return formateTime(time)
    },

    // 获取标签名或类名
    getName (arr, id) {
      return getName(arr, id)
    },
    // 获取所有文章
    async getArticles () {
      const res = await this.$store.dispatch('article/getArticles')
      return res.data.data
    },

    // 获取文章下留言
    async getArticleMsg (id) {
      const res = await this.$store.dispatch('article/getArticleMsg', id)
      this.msgList = res.data.data
    },

    // 发送留言
    async addMsg (list) {
      const flag = await this.$store.dispatch('msg/sendMsg', list)
      if (flag) {
        await this.getArticleMsg(this.article.id)
        this.$refs.msgwrite.qx_all()
      }
    },

    // 跳转详情页
    tapToDetail (article) {
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
.art_detail {
  header {
    width: 45.9063rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.2rem;
    .other {
      padding: 1rem 0;
      border-bottom: 0.0625rem solid gainsboro;
      span {
        margin-right: 0.6rem;
        font-size: 0.6rem;
        color: rgb(170, 170, 170);
        i {
          width: 0.6rem;
        }
      }
    }
    .content {
      padding: 1rem 0;
    }
  }
}
</style>
