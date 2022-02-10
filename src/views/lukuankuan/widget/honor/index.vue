<!-- 首页 -->
<template>
  <div class="honor" :style="{ width: innerWidth + 'px', height: innerHeight + 'px' }">
    <div class="honor-lego">123</div>
  </div>
</template>
<script>
export default {
  name: "Honor",
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
.honor {
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
</style>
