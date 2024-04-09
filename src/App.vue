<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  mounted() {
    document.title = '记录生活，传达美好理念'
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let appCls = ''
    if (isiOS) {
      appCls = 'ios'
    }
    if (isAndroid) {
      appCls = 'android'
    }
    if (!appCls) return
    window.CLIENT_STATE = appCls
    document.getElementsByTagName('body')[0].classList.add(`${appCls}`)
    document.getElementsByTagName('body')[0].classList.add(`h5`)
  }
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  @import './assets/css/common.scss';
</style>
