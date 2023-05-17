<template>
  <div class="msg_write">
    <header>
      <i class="iconfont icon-liuyan-A"></i>
      发表评论
    </header>
    <section>
      <div class="msg_in">
        <el-form :model="msgList" label-width="3.8rem">
          <el-row>
            <el-col :span="10">
              <el-form-item label="昵称">
                <el-input
                  v-model="msgList.nickName"
                  placeholder="请输入昵称，非必填"
                  :disabled="$store.state.drawerFlag"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="邮箱">
                <el-input
                  v-model="msgList.email"
                  placeholder="请输入邮箱，非必填"
                  :disabled="$store.state.drawerFlag"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-input
              type="textarea"
              rows="5"
              v-model="msgList.detail"
              placeholder="输入想说的话"
              :disabled="$store.state.drawerFlag"
            ></el-input>
          </el-form-item>
          <el-row>
            <el-form-item style="text-align: right">
              <el-button
                type="primary"
                size="small"
                @click="confirm_all(msgList)"
                >发送</el-button
              >
              <el-button size="small" @click="qx_all">取消</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import { formateTime } from '@/utills/formate'
export default {
  props: ['id'],
  data () {
    return {
      msgList: {
        nickName: '',
        email: '',
        detail: ''
      }
    }
  },
  methods: {
    formateTime (time) {
      return formateTime(time)
    },
    // 取消
    qx_all () {
      this.msgList.nickName = ''
      this.msgList.email = ''
      this.msgList.detail = ''
    },

    // 发送
    confirm_all (list) {
      const all = list
      all.article_id = this.id
      if (!all.nickName) {
        all.nickName = '游客' + parseInt(Math.random() * 100000)
      }
      this.$emit('add', all)
    }
  }
}
</script>

<style lang="scss" scoped>
.msg_write {
  margin: 1rem 0;
  border-radius: 0.2rem;
  padding: 1rem;
  background-color: white;
  section {
    margin-top: 1rem;
    .msg_in {
      ::v-deep .el-textarea .el-textarea__inner {
        resize: none;
      }
    }
  }
}
</style>
