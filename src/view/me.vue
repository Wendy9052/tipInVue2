<template>
  <div class="me_page">
    <van-cell value="内容" is-link center>
      <template #title>
        <div class="left_part">
          <div class="img_box">
            <img class="head_img" src="https://avatars.githubusercontent.com/u/71574611?s=40&v=4" alt="">
          </div>
          <div class="text_box">
            <div class="nickname_text">昵称</div>
            <div class="account_text">账号</div>
          </div>
        </div>
      </template>
      <template #default>
        <div>
          <van-icon name="smile-o" />
        </div>
      </template>
    </van-cell>
    <tabbar class="tabbar" :currentTab="'me'"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
export default {
  components: {
    Tabbar,
  },
}
</script>

<style lang="scss" scoped>
.me_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  .left_part{
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    .img_box{
      display: flex;
      margin-right: 15px;
      .head_img{
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
    }
    .text_box{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .nickname_text{
      font-size: 18px;
    }
    .account_text{
      font-size: 12px;
      color: rgba(204,204,204,1);
    }
  }
}
</style>