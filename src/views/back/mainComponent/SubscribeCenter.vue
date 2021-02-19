<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <elp-box-back-style>
        <el-switch
          style="display: block"
          v-model="SubscribeCenterX.value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @click="subscribeChange"
          inactive-text="邮件订阅">
        </el-switch>
        <span>打开后博主有文章更新时会提醒你</span>
    </elp-box-back-style>
    </el-col>
  </el-row>
</template>

<script>
import ElpBoxBackStyle from '@/components/boxStyle/elpBoxBackStyle'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default {
  name: 'SubscribeCenter',
  components: { ElpBoxBackStyle },
  setup () {
    const store = useStore()
    const SubscribeCenterX = store.state.backObject.SubscribeCenter
    function subscribeChange () {
      ElMessage({
        showClose: true,
        message: '信息修改成功',
        type: 'success'
      })
    }
    return { SubscribeCenterX, subscribeChange }
  }
}
</script>

<style scoped>

</style>
