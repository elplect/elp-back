// 在http.js中引入axios
import axios from 'axios' // 引入axios
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到
import { ElMessage } from 'element-plus' // 提示框效果
import store from '@/store/index' // 设置拦截器
import router from '@/router'
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://localhost:8080'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'https://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://localhost:8080'
}
// 请求超时
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(
  config => {
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return ElMessage.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              redirect: router.currentRoute.value
            }
          })
          break

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          ElMessage.error('登陆过期，请重新登陆')
          // 清除token
          localStorage.removeItem('token')
          store.commit('loginSuccess', null)
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                redirect: router.currentRoute.value
              }
            })
          }, 1000)
          break

        // 404请求不存在
        case 404:
          ElMessage.error('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          ElMessage.error(error)
      }
      return Promise.reject(error.response)
    }
  })

const http = {
  get: {},
  post: {},
  delete: {},
  put: {},
  patch: {}
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

http.get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

http.post = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * delete方法， 对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.delete = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * put方法， 对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.put = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * patch方法， 对应patch请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.patch = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default http
