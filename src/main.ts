import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-UI
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import installElementPlus from './plugins/element'
// markdown编辑器
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
// markdown主题
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import './styles/general.css'
VueMarkdownEditor.use(vuepressTheme)
const app = createApp(App)

installElementPlus(app)
app.use(VueMarkdownEditor)
app.use(store).use(router).mount('#app')
