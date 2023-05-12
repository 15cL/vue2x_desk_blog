<template>
  <div class="msg_list">
    <header>
      <i class="iconfont icon-liuyan-A"></i>
      博客评论
    </header>
    <section>
      <div class="msg_all" v-if="msgList.length">
        <ul>
          <li v-for="msg of msgList" :key="msg.id">
            <div class="title">
              <img
                src="../../assets/pic/other_user.png"
                style="width: 2.6rem"
              />
              <div class="guest">
                <div class="gName">{{ msg.name }}</div>
                <div class="gTime">
                  <label v-relativeTime="msg.createtime"></label> 说 :
                </div>
              </div>
            </div>
            <div class="content">
              <div style="width: 2.6rem"></div>
              <p>{{ msg.detail }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="wu" v-else>
        <i class="iconfont icon-liuyanban" style="font-size: 2.6rem"></i>
        <div>还没有人评论，赶紧抢个沙发~</div>
      </div>
    </section>
  </div>
</template>

<script>
import { formateTime } from '@/utills/formate'
export default {
  props: ['msgList'],
  data () {
    return {
      imageDefault: ''
    }
  },
  methods: {
    formateTime (time) {
      return formateTime(time)
    }
  }
}
</script>

<style lang="scss" scoped>
.msg_list {
  border-radius: 0.2rem;
  padding: 1rem;
  background-color: white;
  section {
    .msg_all {
      ul {
        li {
          padding: 1rem 0;
          border-bottom: 0.01rem solid gainsboro;
          .title {
            display: flex;
            align-items: center;
            .guest {
              margin-left: 1rem;
              .gTime {
                margin-top: 0.1rem;
                font-size: 0.5rem;
                color: rgb(167, 167, 167);
              }
            }
          }
          .content {
            display: flex;
            margin-top: 0.6rem;
            font-size: 0.8rem;
            p {
              margin-left: 1rem;
            }
          }
        }
      }
    }
    .wu {
      padding: 3rem;
      text-align: center;
      color: rgb(167, 167, 167);
      div {
        padding: 0.5rem;
        font-size: 0.4rem;
      }
    }
  }
}
</style>
