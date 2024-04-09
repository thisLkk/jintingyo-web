<!-- 首页 -->
<template>
  <div class="workHistory" :style="{ width: innerWidth + 'px', minHeight: innerHeight + 'px' }">
    <div class="workHistory-main">
      <div class="workHistory-main-header">
        <div class="workHistory-main-header-title">Life  </div>
        <div class="workHistory-main-header-subTitle">Life Notes</div>
      </div>
      <!-- 转转 -->
      <div class="workHistory-main-zz">
        <div class="workHistory-main-zz-title">街道上的行人熙熙攘攘，或匆忙赶路，或悠闲漫步，每个人的脸上都写满了属于自己的故事</div>
        <div class="workHistory-main-zz-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Life",
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
  methods: {
    urlHandle(url) {
      window.open(url)
    }
  }
};
</script>
<style lang="scss" scoped>
.h5 {
  .workHistory {
    &-main {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      &-header {
        margin-bottom: 80px;
        &-title {
          font-size: 30px;
        }
        &-subTitle {
          font-size: 20px;
        }
      }
      &-zz {
        height: 500px;
        &-lego {
          display: none;
        }
      }
    }
  }
}
.workHistory {
  position: relative;
  background-image: linear-gradient(#0d1e26, #1f1f2a);
  color: #fff;
  padding-bottom: 200px;
  overflow: hidden;
  &-main {
    width: 1000px;
    margin: 0 auto;
    &-header {
      margin-bottom: 140px;
      &-title {
        position: relative;
        display: inline-block;
        font-size: 60px;
        font-weight: bold;
        &::after {
          content: '';
          position: absolute;
          background: white;
          height: 8px;
          width: 180px;
          left: 120%;
          top: 50%;
        }
      }
      &-subTitle {
        margin-top: 24px;
        font-size: 28px;
        opacity: 0.5;
      }
    }
    &-zz {
      margin: 0 auto;
      width: 400px;
      height: 600px;
      position: relative;
      transition: all 1s cubic-bezier(0.08, 0.96, 0.4, 0.99);
      cursor:pointer;
      overflow: hidden;
      &-title {
        width: 100%;
        font-size: 16px;
        margin-bottom: 10px;
      }
      &-bg {
        width: 100%;
        height: 100%;
        background: url('~@/assets/img/lkk/a-1.jpg') center 20px no-repeat;
        background-size: 140%;
      }
      &:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        z-index: 12;
        -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
        box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
      }
    }
  }
}
</style>
