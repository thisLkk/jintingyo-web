<template>
  <div class="header">
    <div class="header-logo">
      <p class="header-logo-title">锦瑟华年</p>
      <p class="header-logo-subTitle">青春如歌，不负韶华</p>
    </div>
    <div class="header-nav">
      <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#24292e"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="4">
          <a href="http://www.jiubai.shop" target="_blank">玖佰生活</a>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="header-user">
      <p class="header-user-name">鲁宽宽</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      activeIndex: '1'
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
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: rgb(36, 41, 46);
  &-logo {
    flex-shrink: 0;
    padding: 10px 40px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    &-title {
      font-size: 18px;
    }
    &-subTitle {
      font-size: 12px;
      color: #d3cfcf;
    }
  }
  &-nav {
    flex: 1;
  }
  &-user {
    height: 100%;
    padding-right: 40px;
    flex-shrink: 0;
    box-sizing: border-box;
    color: #fff;
    &-name {
      height: 100%;
      line-height: 60px;
    }
  }
}
</style>
