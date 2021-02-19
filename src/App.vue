<template>
  <div id="elp-back">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  min-height: 100%;
}
#elp-back {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Source Han Sans SC,Noto Sans CJK SC,Microsoft YaHei,WenQuanYi Micro Hei,WenQuanYi Zen Hei,Helvetica Neue,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  min-height: 100%;
}
</style>
