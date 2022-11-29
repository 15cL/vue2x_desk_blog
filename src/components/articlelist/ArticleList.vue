<template>
  <div class="article_list">
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
        @click="tapToDetail(article)"
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
                >{{ getName(cates, item) }}</i
              ></span
            >
            <span
              ><i class="iconfont icon-31shijian"></i>
              {{ formateTime(article.createdate) }}</span
            >
            <span
              ><i class="iconfont icon-yanjing"></i> {{ article.traffic }}</span
            >
            <span><i class="iconfont icon-pinglun"></i> {{ 0 }}</span>
          </div>
          <p>{{ article.detail }}</p>
          <div class="tag_box">
            <span
              v-for="(item, index) in JSON.parse(article.tag_id)"
              :key="index"
              >{{ getName(tags, item) }}</span
            >
          </div>
        </div>
        <div class="pic_content">
          <img src="../../assets/pic/banner1.jpg" lazy />
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
        :total="articles.length"
        hide-on-single-page
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getName } from '@/utills/index'
import { formateTime } from '@/utills/formate'
export default {
  props: ['articles'],
  data () {
    return {
      isBackground: true,
      tags: JSON.parse(window.localStorage.getItem('tags')),
      cates: JSON.parse(window.localStorage.getItem('cates'))
    }
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

    // 跳转详情页
    tapToDetail (article) {
      this.$router.push({
        path: '/blog/detail',
        query: { article: encodeURIComponent(JSON.stringify({ ...article, cates: this.cates, tags: this.tags })) }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.article_list {
  @media screen and (min-width: 640px) {
    width: 45.9063rem;
    margin-top: 1rem;
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
        flex: 2.5;
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
            font-size: 0.9rem;
            color: rgb(156, 163, 175, 1);
            background-color: rgb(237, 237, 237);
          }
        }
      }
      .pic_content {
        flex: 1;
        text-align: right;
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
