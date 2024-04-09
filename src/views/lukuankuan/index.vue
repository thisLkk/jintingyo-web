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
    <!-- 生活 -->
    <div class="lkk-work">
      <life></life>
    </div>
    <!-- 荣誉 -->
    <div class="lkk-honor">
      <honor></honor>
    </div>
    <div class="lkk-bottom-scroll">▼ ▼ ▼ ▼</div>
  </div>
</template>
<script>
import UserInfo from './widget/userInfo/index.vue'
import WorkHistory from './widget/workHistory/index.vue'
import Life from './widget/life/index.vue'
import Honor from './widget/honor/index.vue'
export default {
  name: "Lkk",
  components: {
    UserInfo,
    WorkHistory,
    Honor,
    Life
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
  background-position: 15% center;
  background-repeat: no-repeat;
  background-size: 410px 405px;
  &-bottom-scroll {
    position: fixed;
    left: 50%;
    margin-left: -50px;
    bottom: 20px;
    width: 100px;
    text-align: center;
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 0px;
    opacity: 0.5;
    color: white;
    font-weight: bold;
    animation-name: bottomScroll;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
  }
  @keyframes bottomScroll {
      0% {
        bottom: 20px;
        opacity: 0.1;
      }
      50% {
        bottom: 40px;
        opacity: 0.7;
      }
      100% {
        bottom: 20px;
        opacity: 0.1;
      }
    }
}
</style>
