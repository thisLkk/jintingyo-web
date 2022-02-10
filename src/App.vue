<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  created() {
    document.title = 'lukuankuan'
    // let u = navigator.userAgent;
    // // let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    // let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // let appCls = isiOS ? 'ios' : 'android'
    // document.getElementsByTagName('body')[0].classList.add(`${appCls}`)
  }
}
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  @import './assets/css/common.scss';
</style>
