<!-- 首页 -->
<template>
  <div class="honor" :style="{ width: innerWidth + 'px', height: innerHeight + 'px' }">
    <div class="honor-main">
      <div class="honor-main-title">Harvest</div>
      <div class="honor-main-item">
        <div class="honor-main-item-img img-1"></div>
        <div class="honor-main-item-title">
          <div>转转社会责任小组倡导者</div>
          <p>为进一步驱动转转使命的践行</p>
          <p>让更多人感知到可持续和闲置交易的意义</p>
        </div>
      </div>
      <div class="honor-main-item">
        <div class="honor-main-item-img img-2"></div>
        <div class="honor-main-item-title">
          <div>大转转FE公众号月度最佳作者</div>
          <p>定期分享一些团队对前端的想法与沉淀</p>
        </div>
      </div>
      <div class="honor-main-item">
        <div class="honor-main-item-img img-3"></div>
        <div class="honor-main-item-title">
          <!-- <div>个人公众号：前端每日资讯</div> -->
          <p>查阅最新前端资讯并整理分享</p>
        </div>
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
    &-item {
      margin-left: 40px;
      margin-top: 30px;
      cursor:pointer;
      display: flex;
      &-img {
        flex-shrink: 0;
        width: 100px;
        height: 100px;
        margin-right: 10px;
        opacity: 0.5;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &.img-1 {
          background-image: url('~@/assets/img/lkk/honor-1.jpg');
        }
        &.img-2 {
          background-image: url('~@/assets/img/lkk/honor-2.jpg');
        }
        &.img-3 {
          background-image: url('~@/assets/img/lkk/honor-2.jpg');
        }
      }
      &-title {
        display: flex;
        flex-wrap: wrap;
        div {
          flex-shrink: 0;
          width: 100%;
          font-size: 16px;
        }
        p {
          padding-left: 8px;
          width: 100%;
          flex-shrink: 0;
          font-size: 12px;
        }
      }
      &:hover {
        .honor-main-item-img {
          opacity: 1;
        }
        color: #F8C91C;
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
