<template>
  <div class="list_detail">
    <avatarUpload
      style="margin: 0rem 5rem 3rem"
      @provideRaw="sendPic"
    ></avatarUpload>
    <el-form label-width="5rem" :model="selectList" :rules="rules">
      <el-row>
        <el-col>
          <el-form-item prop="name" label="标题">
            <el-input
              required
              type="textarea"
              v-model="selectList.name"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="author" label="作者">
            <el-input v-model="selectList.author"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="分类">
            <el-checkbox-group v-model="selectList.cate_id">
              <el-checkbox-button
                v-for="cate of allCates"
                :key="cate.id"
                :label="cate.name"
                name="type"
              ></el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="标签">
            <el-checkbox-group v-model="selectList.tag_id">
              <el-checkbox-button
                v-for="tag of allTags"
                :key="tag.id"
                :label="tag.name"
                name="type"
              ></el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="text-align: center">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="openEditor">确定</el-button>
      </el-row>
    </el-form>
    <el-dialog :visible.sync="showEditor" fullscreen append-to-body>
      <mavon-editor v-model="selectList.detail"></mavon-editor>
      <el-button style="margin-top: 1rem" @click="add">确定</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import avatarUpload from './avatarUpload.vue'
export default {
  components: {
    avatarUpload
  },
  props: ['tags', 'cates'],
  data () {
    return {
      selectList: {
        name: '',
        author: '',
        createdate: '',
        unquote: '',
        detail: '',
        tag_id: [],
        cate_id: [],
        traffic: '',
        id: '',
        raw: '',
        article_avatar: ''
      },
      showEditor: false,
      rules: {
        name: [{ required: 'true', trigger: 'blur', message: '标题不能为空' }],
        author: [
          { required: 'true', trigger: 'blur', message: '作者不能为空' }
        ],
        detail: [
          { required: 'true', trigger: 'blur', message: '内容不能为空' }
        ]
      },
      allTags: [],
      allCates: []
    }
  },
  created () {
    this.allTags = JSON.parse(this.tags) // 列出所有的tag
    this.allCates = JSON.parse(this.cates) // 列出所有的tag
  },
  methods: {
    ...mapActions(['article/addArticle', 'user/reAvatar']),
    // 关闭dialog
    cancel () {
      this.raw = ''
      this.$emit('cancel')
      this.selectList.tag_id = null
    },
    openEditor () {
      if (!this.selectList.name || !this.selectList.author) {
        return this.$message({
          message: '请输入完整',
          type: 'warning'
        })
      }
      this.showEditor = true
    },
    add () {
      if (!this.selectList.detail) {
        return this.$message({
          message: '内容不能为空',
          type: 'warning'
        })
      }
      let arr = []
      this.selectList.tag_id.forEach((v) => {
        this.allTags.forEach((m) => {
          if (m.name === v) {
            arr.push(m.id)
          }
        })
      })
      if (!arr.length) {
        arr = null
      }
      this.selectList.tag_id = JSON.stringify(arr)
      let arr2 = []
      this.selectList.cate_id.forEach((v) => {
        this.allCates.forEach((m) => {
          if (m.name === v) {
            arr2.push(m.id)
          }
        })
      })
      if (!arr2.length) {
        arr2 = null
      }
      this.selectList.cate_id = JSON.stringify(arr2)
      this['article/addArticle'](this.selectList)
      location.reload()
      this.cancel()
      this.showEditor = false
    },
    sendPic (raw) {
      this.selectList.article_avatar = raw
    }
  }
}
</script>

<style lang="scss" scoped></style>
