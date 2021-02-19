<template>
  <div class="back-aside elp-aside-big">
    <router-link to="/" custom v-slot="{navigate}">
      <div class="back-aside-logo" @click="navigate" @keypress.enter="navigate">
        <elp-logo></elp-logo>
      </div>
    </router-link>
    <div class="back-aside-item">
      <ul>
        <template v-for="item in asideItems" :key="item.id">
          <li @click="addTab(item)" :class="item.liClass" @keypress.enter="addTab(item)">
            <i :class="item.iClass"></i>
            <span>{{item.text}}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ElpLogo from '../../../components/util/elpLogo'
export default {
  name: 'backAside',
  components: { ElpLogo },
  setup () {
    const store = useStore()
    const router = useRouter()
    const asideItems = store.state.frontObject.asideItems
    function addTab (asideItem) {
      const frontObject = store.state.frontObject
      // 替换侧边栏的is_active
      for (let i = 0; i < asideItems.length; i++) {
        asideItems[i].liClass = ''
      }
      asideItem.liClass = 'is_active'
      // 跳转到相应标签页
      router.push({
        name: asideItem.name
      })
      for (let i = 0; i < frontObject.backTabs.editableTabs.length; i++) {
        if (asideItem.id === frontObject.backTabs.editableTabs[i].id) {
          frontObject.backTabs.editableTabsValue = asideItem.name
          return
        }
      }
      // 增加标签页
      frontObject.backTabs.editableTabs.push({
        id: asideItem.id,
        title: asideItem.text,
        name: asideItem.name
      })
      // 激活当前标签页
      frontObject.backTabs.editableTabsValue = asideItem.name
    }
    return { asideItems, addTab }
  }
}
</script>
<style scoped>
.elp-aside-big {
  width: 266px;
  background: #222;
  overflow: hidden;
}
</style>
<style>
.back-aside {
  height: 100%;
  color: #f1f1f1;
  -webkit-font-smoothing: antialiased;
}
.back-aside-logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.back-aside-item ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "PingFang SC",serif;
}
.back-aside-item ul li{
  padding: 0 20px;
  height: 50px;
  vertical-align: middle;
  line-height: 50px;
  cursor: pointer;
  transition: all .3s;
}
.back-aside-item ul li span {
  margin-left: 3px;
}
.back-aside-item ul li:hover,
.back-aside-item ul li.is_active {
  background-color: #5cb0ff !important;
  transition: all .3s;
}
</style>
