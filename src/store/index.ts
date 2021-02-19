import { createStore } from 'vuex'

export default createStore({
  state: {
    token: '',
    user: {
      uid: 1,
      img: 'img/head.jpg',
      account: 'qwerwsx123',
      username: 'elplect',
      password: '123456',
      email: 'elplect@gmail.com',
      introduce: '这家伙就是一个大废物',
      qq: '559314256',
      wexin: 'w5582131241'
    },
    // 不需要请求后端的
    frontObject: {
      imgBoxShow: false,
      backAsideShow: 'BackAside',
      backTabs: {
        editableTabsValue: '1',
        editableTabs: [{
          id: 1,
          title: '信息中心',
          name: 'MessageCenter'
        }],
        tabIndex: 1
      },
      asideItems: [
        { id: 1, name: 'MessageCenter', liClass: 'is_active', iClass: 'el-icon-bell', text: '信息中心' },
        { id: 2, name: 'CollectCenter', liClass: '', iClass: 'el-icon-star-off', text: '收藏中心' }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
