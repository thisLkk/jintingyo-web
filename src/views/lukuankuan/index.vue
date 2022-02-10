<!-- 首页 -->
<template>
  <div class="lkk">
    <!-- 个人介绍 -->
    <div class="lkk-info">
      <user-info></user-info>
    </div>
    <!-- 工作履历 -->
    <div class="lkk-work">
      <work-history></work-history>
    </div>
    <!-- 荣誉 -->
    <div class="lkk-honor">
      <honor></honor>
    </div>
  </div>
</template>
<script>
import UserInfo from './widget/userInfo/index.vue'
import WorkHistory from './widget/workHistory/index.vue'
import Honor from './widget/honor/index.vue'
export default {
  name: "Lkk",
  components: {
    UserInfo,
    WorkHistory,
    Honor
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.lkk {
  height: 100vh;
  overflow: auto;
  background-color: #1f1f2a;
  background-image: url('~@/assets/img/lkk/lkk-cur.png');
  background-position: 25% center;
  background-repeat: no-repeat;
  background-size: 410px 405px;
}
</style>
