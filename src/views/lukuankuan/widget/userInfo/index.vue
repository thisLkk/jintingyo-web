<!-- 首页 -->
<template>
  <div id="userInfo" class="userInfo" :style="{ width: innerWidth + 'px', height: innerHeight + 'px' }">
    <div class="userInfo-lego"></div>
    <div class="userInfo-shadow"></div>
    <!-- 主要展示区域 -->
    <div class="userInfo-wrap">
      <!-- 青春如歌 -->
      <div class="userInfo-wrap-one"></div>
      <!-- 不负韶华 -->
      <div class="userInfo-wrap-two"></div>
      <!-- 理想依旧 -->
      <div class="userInfo-wrap-three"></div>
      <!-- 笑容依然 -->
      <div class="userInfo-wrap-four"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
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
    mounted() {
    if (window.canvasHandle) {
      window.canvasHandle(window.PIXI, window, document)
    }
  }
};
</script>
<style lang="scss" scoped>
.userInfo {
  position: relative;
  overflow: hidden;
  color: #fff;
  &-lego {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('~@/assets/img/lkk/lkk-fff.png') center no-repeat;
    background-size: 150px 28px;
  }
  &-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    &-one {
      position: absolute;
      top: 28%;
      left: 15%;
      width: 60px;
      height: 160px;
      background: url('~@/assets/img/lkk/info-1.png') center no-repeat;
      background-size: contain;
      animation-name: infoOne;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-play-state: running;
    }
    @keyframes infoOne {
      0% {
        top: 28%;
        transform: rotateX(45deg);
        transform: rotateY(60deg);
      }
      50% {
        top: 50%;
        transform: rotateX(0deg);
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateX(45deg);
        transform: rotateY(60deg);
        top: 28%;
      }
    }
    &-three {
      position: absolute;
      top: 23%;
      left: 55%;
      width: 60px;
      height: 160px;
      background: url('~@/assets/img/lkk/info-3.png') center no-repeat;
      background-size: contain;
      animation-name: infoThree;
      animation-duration: 7s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-play-state: running;
    }
    @keyframes infoThree {
      0% {
        top: 23%;
        transform: rotateX(60deg);
        transform: rotateY(80deg);
      }
      50% {
        top: 50%;
        transform: rotateX(-60deg);
        transform: rotateY(-60deg);
      }
      100% {
        transform: rotateX(60deg);
        transform: rotateY(80deg);
        top: 23%;
      }
    }
    &-two {
      position: absolute;
      top: 20%;
      left: 35%;
      width: 60px;
      height: 160px;
      background: url('~@/assets/img/lkk/info-2.png') center no-repeat;
      background-size: contain;
      animation-name: infoTwo;
      animation-duration: 12s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-play-state: running;
    }
    @keyframes infoTwo {
      0% {
        top: 20%;
        transform: rotateX(0deg);
        transform: rotateY(0deg);
      }
      50% {
        top: 60%;
        transform: rotateX(45deg);
        transform: rotateY(60deg);
      }
      100% {
        transform: rotateX(0deg);
        transform: rotateY(0deg);
        top: 20%;
      }
    }
    &-four {
      position: absolute;
      top: 28%;
      left: 75%;
      width: 60px;
      height: 160px;
      background: url('~@/assets/img/lkk/info-4.png') center no-repeat;
      background-size: contain;
      animation-name: infoFour;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-play-state: running;
    }
    @keyframes infoFour {
      0% {
        top: 18%;
        transform: rotateX(-30deg);
        transform: rotateY(-30deg);
      }
      50% {
        top: 50%;
        transform: rotateX(80deg);
        transform: rotateY(80deg);
      }
      100% {
        transform: rotateX(30deg);
        transform: rotateY(30deg);
        top: 18%;
      }
    }
  }
  &-shadow {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    box-shadow: #0d1e26 0px 0px 112px 144px;
  }
}
</style>
