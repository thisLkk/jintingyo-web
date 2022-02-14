<!-- 首页 -->
<template>
  <div class="honor" :style="{ width: innerWidth + 'px', height: innerHeight + 'px' }">
    <div class="honor-main">
      <div class="honor-main-title">Harvest</div>
      <div class="honor-main-medal">
        <div class="honor-main-medal-title">勋章</div>
        <div class="honor-main-medal-subTitle">转转社会责任小组倡导者</div>
        <div class="img-wrap"></div>
      </div>
      <div class="honor-main-medal">
        <div class="honor-main-medal-title">勋章</div>
        <div class="honor-main-medal-subTitle">转转月度文章最佳获得者</div>
      </div>
      <div class="honor-main-article" @click="urlHandle('https://mp.weixin.qq.com/s/OpuxWY89TYeyDqC86BVe2g')">
        <div class="honor-main-article-title">文章</div>
        <div class="honor-main-article-subTitle">见微知著 - npm包的基础建设如此简单</div>
      </div>
      <div class="honor-main-article" @click="urlHandle('https://mp.weixin.qq.com/s/ZSPkUZo1lALVM8i8HeInPA')">
        <div class="honor-main-article-title">文章</div>
        <div class="honor-main-article-subTitle">闲庭信步聊前端 - 一文摸清ES拷贝深浅</div>
      </div>
    </div>
    <div class="honor-footer">
      <div class="honor-footer-tips">过完这个冬天，明年依旧春暖花开</div>
      <div class="honor-footer-icp">
        <a href="https://beian.miit.gov.cn" target="_blank">豫ICP备19043657号-1</a>
      </div>
    </div>
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
  methods: {
    urlHandle(url) {
      window.open(url)
    }
  }
};
</script>
<style lang="scss" scoped>
.h5 {
  .honor {
    &-main {
      width: 100%;
      left: 0;
      width: 100%;
      padding: 0 10px;
      margin-left: 0;
      background: rgba(31, 31, 42, 0.7);
      &-title {
        padding-top: 20px;
        font-size: 20px;
        &::after {
          display: none;
        }
      }
      &-subTitle {
        font-size: 20px;
      }
    }
    &-footer {
      background: rgb(31, 31, 42);
    }
  }
}
.honor {
  background: rgba(0, 0, 0, 0);
  color: #fff;
  position: relative;
  overflow: hidden;
  &-main {
    position: absolute;  
    left: 50%;
    margin-left: -60px;
    z-index: 10;
    top: 0;
    width: 50%;
    height: 100%;
    background: #1f1f2a;
    padding-top: 20px;
    box-sizing: border-box;
    &-title {
      position: relative;
      font-size: 40px;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        background: #fff;
        height: 5px;
        width: 180px;
        left: 140px;
        bottom: 16px;
        border-radius: 8px;
      }
    }
    &-article, &-medal {
      margin-left: 100px;
      margin-top: 20px;
      cursor:pointer;
      position: relative;
      .img-wrap {
        position: absolute;
        bottom: 0;
        left: -120px;
        display: none;
        width: 100px;
        height: 80px;
        background: #fff;
      }

      &-title {
        font-size: 18px;
        display: inline-block;
        margin-right: 8px;
        font-weight: bold;
      }
      &-subTitle {
        display: inline-block;
      }
      &::after {
        content: '';
        position: absolute;
        background: #F8C91C;
        bottom: 2px;
        left: 0;
        width: 0;
        transition: all 1s cubic-bezier(0.08, 0.96, 0.4, 0.99);
      }
      &:hover {
        &::after {
          content: '';
          position: absolute;
          background: #F8C91C;
          bottom: 2px;
          left: 0;
          width: 40px;
          height: 10px;
          opacity: 0.3;
        }
        div {
          color: #F8C91C;
        }
        .img-wrap {
          // display: block;
        }
      }
    }
  }
  &-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    height: 80px;
    overflow: hidden;
    z-index: 11;
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
}
</style>
