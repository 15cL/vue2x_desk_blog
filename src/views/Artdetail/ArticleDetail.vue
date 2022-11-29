<template>
  <div class="art_detail">
    <h1>{{ article.name }}</h1>
    <div class="other">
      <span
        ><i class="iconfont icon-caidan"></i>
        <i
          style="font-size: 0.8rem; margin-left: 0.2rem"
          v-for="(item, index) in JSON.parse(article.cate_id)"
          :key="index"
          >{{ getName(article.cates, item) }}</i
        ></span
      >
      <span
        ><i class="iconfont icon-31shijian"></i>
        {{ formateTime(article.createdate) }}</span
      >
      <span><i class="iconfont icon-yanjing"></i> {{ article.traffic }}</span>
      <span><i class="iconfont icon-pinglun"></i> {{ 0 }}</span>
    </div>
    <div class="content">
      <div v-html="text" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { getName } from '@/utills/index'
import { formateTime } from '@/utills/formate'
export default {
  data () {
    return {
      article: '',
      text: ''
    }
  },
  created () {
    this.article = JSON.parse(decodeURIComponent(this.$route.query.article))
    // 解析markdown文本
    this.text = marked.parse(this.article.detail)
  },

  methods: {
    // 格式化时间
    formateTime (time) {
      return formateTime(time)
    },

    // 获取标签名或类名
    getName (arr, id) {
      return getName(arr, id)
    }
  }
}
</script>

<style lang="scss" scoped>
.art_detail {
  width: 45.9063rem;
}
</style>
