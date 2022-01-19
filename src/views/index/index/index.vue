<template>
  <div class="homeIndex">
    <div class="homeIndex-header">
      <Header></Header>
    </div>
    <div class="homeIndex-main">
      <Main></Main>
    </div>
    <div class="homeIndex-footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from './widget/Header/index'
import Main from './widget/Main/index'
import Footer from './widget/Footer/index'
export default {
  name: 'HomeIndex',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
    }
  },
  created() {
  
  },

  methods: {}
}
</script>
<style lang="scss" scoped>

</style>
