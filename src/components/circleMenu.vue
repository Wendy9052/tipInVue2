<template>
  <div class="btn_page">
    <!-- <circle-menu type="middle" :number="4" animate="animated jello" mask='white' circle>
      <button type="button" slot="item_btn">2</button>
      <a slot="item_1" class="fa fa-twitter fa-lg"></a>
      <a slot="item_2" class="fa fa-weixin fa-lg"></a>
      <a slot="item_3" class="fa fa-weibo fa-lg"></a>
      <a slot="item_4" class="fa fa-github fa-lg"></a>
    </circle-menu> -->
    <div class="btn_box">
      <circle-menu circle type="top" :number="3" mask='black' btn colors="[ 'rgb(255, 255, 102)', '#A7425C', '#FFE26F', 'F3825F', '#F19584' ]">
        <a slot="item_1"></a>
        <a slot="item_2"></a>
        <a slot="item_3"></a>
      </circle-menu>
    </div>
    
  </div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'
export default {
  name: 'CircleMenu',
  components: {
    CircleMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.btn_page{
  
}
.btn_box{
  width: 100%;
  /* background:black; */
  background: #ccc;
  height: 45px;
  position: fixed;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>
