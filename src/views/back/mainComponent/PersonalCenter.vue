<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :md="12" :lg="8">
      <elp-box-back-style>
        <person-card></person-card>
      </elp-box-back-style>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="16">
      <elp-box-back-style class="person-tab-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="message">
            <person-tab-message></person-tab-message>
          </el-tab-pane>
          <el-tab-pane label="账号绑定" name="binding">
            <person-tab-account></person-tab-account>
          </el-tab-pane>
          <el-tab-pane label="密码修改" name="password">
            <person-password-change></person-password-change>
          </el-tab-pane>
        </el-tabs>
      </elp-box-back-style>
    </el-col>
  </el-row>
</template>

<script>
import ElpBoxBackStyle from '@/components/boxStyle/elpBoxBackStyle'
import PersonCard from '@/views/back/mainComponent/personComponent/personCard'
import PersonTabMessage from '@/views/back/mainComponent/personComponent/personTabMessage'
import PersonTabAccount from '@/views/back/mainComponent/personComponent/personTabAccount'
import PersonPasswordChange from '@/views/back/mainComponent/personComponent/personPasswordChange'
export default {
  name: 'PersonalCenter',
  components: { PersonPasswordChange, PersonTabAccount, PersonTabMessage, PersonCard, ElpBoxBackStyle },
  setup () {
    const activeName = 'message'
    function handleClick (tab, event) {
      console.log(tab, event)
    }
    return { activeName, handleClick }
  }
}

</script>

<style scoped>
.person-tab-box {
  padding: 20px;
}
</style>
