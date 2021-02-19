<template>
  <div class="elp-back-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'elpBoxBackStyle'
}
</script>

<style scoped>
.elp-back-box {
  background: #fff;
  border: 1px solid #ebeef5;
  padding: 20px;
  transition: all .3s;
  border-radius: 4px;
}
.elp-back-box:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  transition: all .3s;
}
</style>
