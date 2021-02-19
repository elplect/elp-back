<template>
  <div class="back-header-1 elp-flex-between">
    <div class="header-left">
      <i class="el-icon-s-fold" @click="backAsideShowChange" style="font-size: 20px"></i>
      <div class="elp-margin-left-15"></div>
    </div>
    <div class="header-right">
      <div class="right-item">
<!--     消息、全屏、刷新   -->
        <div>
          <i class="el-icon-bell"></i>
        </div>
        <div>
          <i class="el-icon-full-screen"></i>
        </div>
        <div class="elp-rotate">
          <i class="el-icon-refresh"></i>
        </div>
      </div>
      <el-popover
        placement="top-start"
        :width="50"
        trigger="hover"
      >
        <template #reference>
          <div class="elp-cursor-pointer elp-rotate">
            <img class="header-img" :src="getFullUrl(userX.img)" alt="">
            <span>{{userX.username}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </template>
        <div class="popover-item">
          <svg t="1612977319090" style="position: relative;top: 3px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2959" width="16" height="16"><path d="M797.696 131.648l13.824 13.952-67.52 70.272-1.024-1.088a368.256 368.256 0 0 0-535.488 0c-147.84 153.856-147.84 403.392 0 557.248a368.192 368.192 0 0 0 534.72 0.768l67.52 70.272c-185.216 191.872-484.8 191.616-669.76-0.768-185.152-192.704-185.152-505.088 0-697.792 180.928-188.16 471.808-192.64 657.728-12.8z m-16.384 191.616l242.432 155.328v20.48l-242.432 154.368V538.24h-349.44V438.784h349.44V323.2z" p-id="2960" fill="#606266"></path></svg>
          退出登陆
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'backHeader1',
  setup () {
    const userX = useStore().state.user
    function getFullUrl (imgUrl) {
      return require(`../../../assets/${imgUrl}`)
    }
    const store = useStore()
    function backAsideShowChange () {
      store.state.frontObject.backAsideShow =
        store.state.frontObject.backAsideShow === 'BackAside' ? 'BackAsideSmall' : 'BackAside'
    }
    return { userX, getFullUrl, backAsideShowChange }
  }
}
</script>

<style scoped>
.popover-item {
  transition: all .2s;
  cursor: pointer;
}
.popover-item:hover {
  background-color: #e8f4ff;
  color: #5cb0ff;
  transition: all .2s;
}
.back-header-1 {
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #f6f8f9;
}
.header-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.header-img span,
.header-img i{
  margin-left: 5px;
}
i {
  cursor: pointer;
}
.elp-rotate i{
  transition: all .3s;
}
.elp-rotate:hover i {
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  transition: all .3s;
}
.header-right {
  display: flex;
}
.right-item {
  display: flex;
  margin-right: 5px;
}
.right-item div {
  margin: 0 11px;
  font-size: 1rem;
}
</style>
