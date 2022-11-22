<template>
  <div class="list_page">
    <el-card class="card">
      <div slot="header" class="title">
        <el-button type="primary" @click="addArticle">添加文章</el-button>
      </div>
      <div>
        <el-table stripe :data="list" v-loading="loading">
          <el-table-column prop="createdate" label="创建日期"></el-table-column>
          <el-table-column prop="name" label="标题"></el-table-column>
          <el-table-column prop="author" label="作者"></el-table-column>
          <el-table-column prop="tag_id" label="标签">
            <template slot-scope="scope">
              <span v-if="JSON.parse(scope.row.tag_id)">
                <el-tag
                  type="success"
                  v-for="tag of tag(scope.row.tag_id)"
                  :key="tag.id"
                  style="margin: 0.1rem"
                  >{{ tag.name }}</el-tag
                >
              </span>
              <span v-else>无</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="show(scope.row)" type="text">查看</el-button>
              <el-button @click="update(scope.row)" type="text">编辑</el-button>
              <el-button :plain="true" @click="deleteR(scope.row)" type="text"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
          width="80rem"
          :title="title"
          :visible.sync="dialogFormVisible"
        >
          <list-detail
            v-if="title == '文章详情'"
            :selectList="selectList"
          ></list-detail>
          <list-update
            v-if="title == '编辑文章'"
            :list="selectList"
            @cancel="cancel"
            :tags="jsonTag"
          ></list-update>
          <list-add v-if="title == '新增文章'" :tags="jsonTag" @cancel="cancel"></list-add>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import { validaTime } from '@/until/validate'
import ListDetail from '@/components/listDialog/ListDetail.vue'
import ListUpdate from '@/components/listDialog/ListUpdate.vue'
import { mapActions } from 'vuex'
import ListAdd from '@/components/listDialog/ListAdd.vue'
export default {
  components: {
    ListDetail,
    ListUpdate,
    ListAdd
  },
  data () {
    return {
      loading: true,
      list: [],
      selectList: [],
      dialogFormVisible: false,
      title: null,
      jsonTag: ''
    }
  },
  async created () {
    this.jsonTag = window.localStorage.getItem('json_tag')
    await this.getList()
    this.loading = false
  },
  methods: {
    ...mapActions(['article/delArticle']),
    async getList () {
      const res = await this.$store.dispatch('article/getArticleList')
      res.data.data.forEach((v) => {
        v.createdate = validaTime(v.createdate)
      })
      this.list = res.data.data
    },
    // 打开文章详情弹窗
    show (row) {
      this.dialogFormVisible = true
      this.selectList = row
      this.title = '文章详情'
    },

    // 打开更新弹窗
    update (row) {
      this.title = '编辑文章'
      this.selectList = row
      this.dialogFormVisible = true
    },
    // 删除文章
    deleteR (row) {
      const res = this['article/delArticle'](row.id)
      if (!res.status) {
        this.$message({
          message: '删除文章成功',
          type: 'success'
        })
        location.reload()
      }
    },

    // 关闭弹窗
    cancel () {
      this.dialogFormVisible = false
      this.title = null
    },
    // 获取tags
    tag (ids) {
      const id = JSON.parse(ids)
      const tagArr = []
      id.forEach((v) => {
        JSON.parse(this.jsonTag).forEach((m) => {
          if (m.id === v) {
            tagArr.push(m)
          }
        })
      })
      return tagArr
    },

    addArticle () {
      this.title = '新增文章'
      this.selectList = {}
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.list_page {
  padding: 1rem;
  .card {
    height: 44rem;
    .title {
      display: flex;
      justify-content: right;
      padding: 0 5rem;
    }
  }
}
</style>
