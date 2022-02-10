<!-- 首页 -->
<template>
  <div class="workHistory" :style="{ width: innerWidth + 'px', height: innerHeight + 'px' }">
    <div class="workHistory-lego">234</div>
  </div>
</template>
<script>
export default {
  name: "WorkHistory",
  data() {
    return {
      innerWidth: 0,
      innerHeight: 0
    }
  },
  created() {
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    })
  },
};
</script>
<style lang="scss" scoped>
.workHistory {
  position: relative;
  background-image: linear-gradient(#0d1e26, #1f1f2a);
  color: #fff;
}
</style>
