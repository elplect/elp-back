<template>
  <div class="elp-back elp-flex-start-noWrap back-min-height">
    <aside class="back-min-height back-transition">
      <keep-alive>
        <transition>
          <component v-bind:is="store.state.frontObject.backAsideShow"></component>
        </transition>
      </keep-alive>
    </aside>
    <div class="elp-container back-min-height">
      <header class="back-transition">
        <back-header1></back-header1>
        <back-header2></back-header2>
      </header>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import BackHeader1 from '@/views/back/otherComponent/backHeader1'
import BackHeader2 from '@/views/back/otherComponent/backHeader2'
import BackAside from '@/views/back/otherComponent/backAside'
import BackAsideSmall from '@/views/back/otherComponent/backAsideSmall'
import { useStore } from 'vuex'
export default {
  name: 'index',
  components: { BackAsideSmall, BackAside, BackHeader2, BackHeader1 },
  setup () {
    const store = useStore()
    return { store }
  }
}
</script>

<style scoped>
.back-min-height {
  height: 100vh;
}
.back-transition {
  transition: all .3s cubic-bezier(.645,.045,.355,1),border 0s,background 0s,color 0s,font-size 0s;
}
.elp-back {
  background: #f6f8f9;
}
.elp-container {
  width: calc(100%);
}
header {
  position: relative;
  z-index: 1;
  height: 111px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
main {
  padding: 20px;
  height: calc(100% - 151px);
  overflow: auto;
}
main>div {
  height: 100%;
  min-height: 100%;
}
</style>
