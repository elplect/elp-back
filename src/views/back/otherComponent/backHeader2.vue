<template>
  <div class="back-header-2">
    <el-tabs v-model="frontObject.backTabs.editableTabsValue" type="card" closable @tab-click="navigate" @tab-remove="removeTab">
      <template v-for="item in frontObject.backTabs.editableTabs" :key="item.id">
        <el-tab-pane
          :label="item.title"
          :name="item.name"
          @click="navigate(item)"
        >
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'backHeader2',
  setup () {
    const store = useStore()
    const router = useRouter()
    const frontObject = store.state.frontObject
    const asideItems = store.state.frontObject.asideItems

    function removeTab (targetName) {
      const tabs = frontObject.backTabs.editableTabs
      let activeName = frontObject.backTabs.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      frontObject.backTabs.editableTabsValue = activeName
      frontObject.backTabs.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }

    function navigate (asideItem) {
      // 替换侧边栏的is_active
      for (let i = 0; i < asideItems.length; i++) {
        if (asideItems[i].name === asideItem.props.name) {
          asideItems[i].liClass = 'is_active'
          router.push({
            name: asideItem.props.name
          })
        } else {
          asideItems[i].liClass = ''
        }
      }
    }
    return { frontObject: frontObject, removeTab, navigate }
  }
}
</script>

<style scoped>
.back-header-2 {
  height: 50px;
  padding-top: 10px;
  box-sizing: border-box;
}
</style>
<style>
.back-header-2 div{
  margin: 0 !important;
  height: 100% !important;
  overflow: hidden;
}
</style>
