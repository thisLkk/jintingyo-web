<!-- 首页 -->
<template>
  <div class="workHistory" :style="{ width: innerWidth + 'px', minHeight: innerHeight + 'px' }">
    <div class="workHistory-main">
      <div class="workHistory-main-header">
        <div class="workHistory-main-header-title">Works  </div>
        <div class="workHistory-main-header-subTitle">Past work experience</div>
      </div>
      <!-- 转转 -->
      <!-- <div class="workHistory-main-zz" @click="urlHandle('https://www.zhuanzhuan.com/')">
        <div class="workHistory-main-zz-lego"></div>
        <div class="workHistory-main-zz-bg"></div>
      </div> -->
      <div class="workHistory-main-item">
        <div class="workHistory-main-item-title">北京转转精神科技有限公司</div>
        <div class="workHistory-main-item-time">2020.07.14 - 至今</div>
        <div class="workHistory-main-item-project">
          <div class="workHistory-main-item-project-item">
            - 转转前端中台视觉库的贡献者
          </div>
          <div class="workHistory-main-item-project-item">
            - 采货侠Native与H5通信的sdk维护者
          </div>
          <div class="workHistory-main-item-project-item">
            - 采货侠发布映射管理后台的维护者
          </div>
          <div class="workHistory-main-item-project-item">
            - 采货侠小程序及H5卖场的维护者
          </div>
          <div class="workHistory-main-item-project-item">
            .....
          </div>
        </div>
      </div>
      <div class="workHistory-main-item">
        <div class="workHistory-main-item-title">度小满金融（原百度金融）</div>
        <div class="workHistory-main-item-time">2018.12.08 - 2020.07.13</div>
        <div class="workHistory-main-item-project">
          <div class="workHistory-main-item-project-item">
            - 康波财经官网的维护者
          </div>
          <div class="workHistory-main-item-project-item">
            - 度小满有钱花人拉人运营活动开发者
          </div>
          <div class="workHistory-main-item-project-item">
            .....
          </div>
        </div>
      </div>
      <div class="workHistory-main-item">
        <div class="workHistory-main-item-title">江苏盈达科技有限公司（外派银河证券）</div>
        <div class="workHistory-main-item-time">2017.12.01 - 2018.12.07</div>
        <div class="workHistory-main-item-project">
          <div class="workHistory-main-item-project-item">
            - 银河用户后台管理系统
          </div>
          <div class="workHistory-main-item-project-item">
            .....
          </div>
        </div>
      </div>
      <!-- 度小满 -->
      <!-- <div class="workHistory-main-dxm" @click="urlHandle('http://www.duxiaoman.com/index')">
        <div class="workHistory-main-dxm-lego"></div>
        <div class="workHistory-main-dxm-bg"></div>
      </div> -->
      <!-- 软通动力 -->
      <!-- <div class="workHistory-main-rtdl" @click="urlHandle('https://www.isoftstone.com/')">
        <div class="workHistory-main-rtdl-lego"></div>
        <div class="workHistory-main-rtdl-bg"></div>
      </div> -->
      <!-- 高伟达 -->
      <!-- <div class="workHistory-main-rtdl" @click="urlHandle('https://www.isoftstone.com/')">
        <div class="workHistory-main-rtdl-lego"></div>
        <div class="workHistory-main-rtdl-bg"></div>
      </div> -->
    </div>
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
        height: 120px;
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
    &-item {
      &-title {
        font-size: 38px;
        padding-left: 24px;
      }
      &-time {
        font-size: 24px;
        padding-left: 28px;
      }
      &-project {
        padding-left: 50px;
        margin-top: 14px;
        &-item {
          margin-top: 12px;
          font-size: 16px;
        }
      }
    }
    &-zz {
      width: 100%;
      height: 260px;
      position: relative;
      transition: all 1s cubic-bezier(0.08, 0.96, 0.4, 0.99);
      cursor:pointer;
      overflow: hidden;
      &-lego {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -49px;
        width: 160px;
        height: 98px;
        background: url('~@/assets/img/lkk/zz-lego.png') center no-repeat;
        background-size: contain;
        background-color: #fff;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        z-index: 1;
      }
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 410px;
        background: url('~@/assets/img/lkk/zz-lego-2.png') center 20px no-repeat;
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
    &-dxm {
      margin-top: 12px;
      width: 100%;
      height: 300px;
      position: relative;
      transition: all 1s cubic-bezier(0.08, 0.96, 0.4, 0.99);
      cursor:pointer;
      overflow: hidden;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
        background: url('~@/assets/img/lkk/dxm-lego-2.png') center no-repeat;
        background-size: cover;
      }
      &:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        z-index: 12;
        -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
        box-shadow: 0 10px 20px 0 rgb(0 0 0 / 40%);
      }
    }
    &-rtdl {
      margin-top: 12px;
      width: 100%;
      height: 300px;
      position: relative;
      transition: all 1s cubic-bezier(0.08, 0.96, 0.4, 0.99);
      cursor:pointer;
      overflow: hidden;
      &-bg {
        position: absolute;
        top: 0;
        right: 0;
        width: 98%;
        height: 300px;
        background: url('~@/assets/img/lkk/rtdl-lego-2.jpg') center no-repeat;
        background-size: cover;
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
