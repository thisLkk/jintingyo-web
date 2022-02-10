<template>
  <div class="footer">
    <div class="footer-tips">过完这个冬天，明年依旧春暖花开</div>
    <div class="footer-icp">
      <a href="https://beian.miit.gov.cn" target="_blank">豫ICP备19043657号-1</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {}
  },
  created() {
  
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  margin-top: 60px;
  color: #fff;
  background: rgb(36, 41, 46);
  height: 80px;
  overflow: hidden;
  &-tips {
    color: #b3b2b2;
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
  }
  &-icp {
    color: #b3b2b2;
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
