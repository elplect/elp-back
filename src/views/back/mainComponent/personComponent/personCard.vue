<template>
  <div class="personCard-box">
    <div class="elp-text-center">
      <img :src="getFullUrl(userX.img)" alt="" class="personCard-img" @click="changeImgBoxShow()">
      <img-change-box v-show="store.state.frontObject.imgBoxShow"></img-change-box>
    </div>
    <div class="personCard-username elp-margin-top-15 elp-text-center">
      <span>{{userX.username}}</span>
    </div>
    <div class="personCard-introduce elp-text-center">
      <span>{{userX.introduce}}</span>
    </div>
    <ul class="personCard-ul">
      <li>
        <div class="elp-margin-top-15">
          <span class="normal-marginRight">账号名:</span>
          <span>{{userX.account}}</span>
        </div>
      </li>
      <li>
        <div class="elp-margin-top-15">
        <span class="normal-marginRight">邮箱:</span>
        <span>{{userX.email}}</span>
        </div>
      </li>
      <li>
        <div class="elp-margin-top-15" v-show="userX.qq !== ''">
        <span class="normal-marginRight">qq:</span>
        <span>{{userX.qq}}</span>
        </div>
      </li>
      <li>
        <div class="elp-margin-top-15" v-show="userX.wexin !== ''">
        <span class="normal-marginRight">微信:</span>
        <span>{{userX.wexin}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import ImgChangeBox from '@/views/back/mainComponent/personComponent/imgChangeBox'
export default {
  name: 'personCard',
  components: { ImgChangeBox },
  setup () {
    const store = useStore()
    function changeImgBoxShow () {
      store.state.frontObject.imgBoxShow = true
    }
    const userX = store.state.user
    function getFullUrl (imgUrl) {
      return require(`../../../../assets/${imgUrl}`)
    }
    return { userX, getFullUrl, store, changeImgBoxShow }
  }
}
</script>

<style scoped>
.personCard-ul {
  list-style: none;
  margin-left: 10px;
}
.personCard-img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 50%;
}
.normal-marginRight {
  margin-right: 7px;
}
.personCard-username {
  font-size: 24px;
  color: #222;
  font-weight: 500;
}
.personCard-introduce {
  margin-top: 8px;
}
</style>
