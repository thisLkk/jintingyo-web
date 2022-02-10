<template>
  <div class="main">
    <div class="main-carousel">
      <el-carousel arrow="never" height="360px">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <div class="main-carousel-imgItem">
            <img :src="item" alt="" srcset="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-crad">
      <div class="main-crad-title">
        精选图片
      </div>
      <div class="main-crad-wrap">
        <div class="main-crad-wrap-item" v-for="(item, index) in imgCardList" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  components: {},
  data() {
    return {
      imgList: [
        require('@src/assets/img/index/1.jpeg'),
        require('@src/assets/img/index/2.jpeg'),
        require('@src/assets/img/index/4.jpeg')
      ],
      imgCardList: [
        require('@src/assets/img/index/11.png'),
        require('@src/assets/img/index/33.png'),
        require('@src/assets/img/index/22.png'),
        require('@src/assets/img/index/11.png'),
        require('@src/assets/img/index/22.png'),
        require('@src/assets/img/index/33.png'),
        require('@src/assets/img/index/22.png'),
        require('@src/assets/img/index/44.png')
      ]
    }
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
.main {
  margin: 0 auto;
  width: 1400px;
  padding: 30px;
  box-sizing: border-box;
  &-carousel {
    &-imgItem {
      width: 100%;
      height: 100%;
      img {
        display: inline-block;
        width: 100%;
        height: auto;
      }
    }
  }
  &-crad {
    margin-top: 40px;
    &-title {
      text-align: center;
      font-size: 24px;
    }
    &-wrap {
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &-item {
        width: 248px;
        height: 518px;
        margin-top: 76px;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
