<template>
  <div class="avatar_upload">
    <el-upload
      class="avatar-uploader"
      :headers="myheader"
      action='#'
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-change="getfile"
      :auto-upload="false"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['picUrl'],
  data () {
    return {
      imageUrl: '',
      raw: ''
    }
  },
  computed: {
    myheader () {
      return { Authorization: window.localStorage.getItem('token') }
    }
  },
  created () {
    this.imageUrl = 'D:\\前端\\' + this.picUrl
  },
  methods: {
    ...mapActions(['user/reAvatar']),
    handleAvatarSuccess (res, file) {
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    getfile (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.$emit('provideRaw', res)
      })
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 图片转base64
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
