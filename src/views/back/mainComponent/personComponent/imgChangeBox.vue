<template>
  <div class="full-screen">
    <div class="img-change-box elp-fullscreen-center elp-border-radius">
      <div class="box-header">
        <span>头像裁剪</span>
        <i class="el-icon-close" @click="changeImgBoxShow"></i>
      </div>
      <div class="box-main">
        <div class="big-img">
          <vue-cropper
            ref="cropper"
            :aspect-ratio="16 / 16"
            :src="imgSrc"
            alt="请选择一张图片"
            preview=".preview"
          />
        </div>
        <div class="small-img">
          <div class="circle-img">
            <div class="preview" />
          </div>
          <div class="square-img">
            <div class="preview" />
          </div>
        </div>
      </div>
      <div class="box-footer">
        <el-button type="primary" size="small" @click.prevent="reset">重置</el-button>
        <div>
          <el-button type="primary" size="small" @click="cropImage">上传图片</el-button>
          <label title="上传图片" for="chooseImg" class="input-box">
            <span>选择图片</span>
            <input
              id="chooseImg"
              type="file"
              style="display: none"
              ref="imgInput"
              name="image"
              accept="image/*"
              @change="setImage">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import { ElMessage } from 'element-plus'
export default {
  name: 'imgChangeBox',
  props: ['show'],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueCropper
  },
  setup () {
    const store = useStore()
    const userX = store.state.user
    function getFullUrl (imgUrl) {
      return require(`../../../../assets/${imgUrl}`)
    }
    function changeImgBoxShow () {
      store.state.frontObject.imgBoxShow = false
    }
    function messageError (message) {
      ElMessage.error(message)
    }
    function messageSuccess () {
      ElMessage({
        showClose: true,
        message: '本地图片上传成功',
        type: 'success'
      })
    }
    return { changeImgBoxShow, userX, getFullUrl, messageError, messageSuccess }
  },
  data () {
    return {
      imgSrc: '',
      cropImg: '',
      data: null
    }
  },
  methods: {
    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      console.log(this.cropImg)
    },
    reset () {
      this.$refs.cropper.reset()
    },
    setImage (e) {
      const file = e.target.files[0]
      if (file.size > 2000000) {
        this.messageError('上传图片的大小不能超过2M!')
        return
      }
      if (file.type.indexOf('image/') === -1) {
        this.messageError('请上传图片文件!')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
        this.messageSuccess()
      } else {
        this.messageError('对不起，上传接口不支持')
      }
    }
  }
}
</script>

<style scoped>
.full-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  box-sizing: border-box;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  overflow: auto;
}
.img-change-box {
  width: 470px;
  background: #fff;
}
.box-header,
.box-main,
.box-footer{
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.box-header span {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.el-icon-close {
  cursor: pointer;
  font-size: 1rem;
}
.el-icon-close:hover {
  color: #5cb0ff;
}
.big-img {
  width: 274px;
  height: 274px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  justify-content: center;
  align-items: center;
  display: flex;
}
.circle-img,
.square-img{
  width: 128px;
  height: 128px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #aaa;
}
.circle-img {
  border-radius: 50%;
  margin-bottom: 16px;
}
.preview {
  width: 100%;
  height: calc(372px);
  overflow: hidden;
}
.input-box {
  margin-left: 10px;
  height: 32px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  transition: .1s;
  font-weight: 500;
}
.input-box:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}
</style>
