<template>
  <div style="width: 300px">
    <el-form :model="ruleForm" status-icon :rules="rules" label-width="70px" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="账号名">
        <el-input type="text"
                  v-model="account"
                  disabled
                  clearable
                  autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="username" label="用户名">
        <el-input type="text"
                  v-model="ruleForm.username"
                  clearable
                  autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input type="email"
                  v-model="ruleForm.email"
                  clearable
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input type="textarea"
                  v-model="ruleForm.introduce"
                  clearable
                  autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="elp-width-100" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default {
  name: 'personTabMessage',
  setup () {
    const userX = useStore().state.user
    function messageChange () {
      ElMessage({
        showClose: true,
        message: '信息修改成功',
        type: 'success'
      })
    }
    return { userX, messageChange }
  },
  data () {
    const validateEmail = (rule, value, callback) => {
      const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入合法邮箱'))
      } else {
        callback()
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      account: this.userX.account,
      ruleForm: {
        username: this.userX.username,
        email: this.userX.email,
        introduce: this.userX.introduce
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.messageChange()
        } else {
          ElMessage.error('信息修改失败')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
