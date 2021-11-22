<template>
  <div class="qr_page">
    <div class="qr_card">
      <div class="msg_part">
        <div class="avatars_box">
          <img :src="avatars_url" alt="">
        </div>
        <div><span class="nickname_text">O(∩_∩)O~Wendy</span><van-icon name="contact" /></div>
      </div>
      <div class="qr_box">
        <vue-qr :correctLevel="3" :autoColor="false" colorDark="#313a90" :text="codeUrl" :size="95" :margin="0" :logoMargin="3"></vue-qr>
      </div>
      <div class="tips_text">
        扫一扫上面的二维码
      </div>
    </div>
    <!-- <vue-qr :correctLevel="3" :autoColor="false" colorDark="#313a90" :bgSrc="bgSrc" :logoSrc="logoSrc" :text="codeUrl" :size="95" :margin="0" :logoMargin="3"></vue-qr> -->
  </div>
</template>
<script>
import VueQr from 'vue-qr'
export default {
  data () {
    return {
      // logoSrc: require('../assets/img/qrlogo.png'),
      // bgSrc: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
      codeUrl: 'https://github.com/lx719679895',
      avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
    }
  },
  components: {
    VueQr
  }
}
</script>
<style lang="scss" scoped>
.qr_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  .tips_text{
    font-size: 14px;
    color: rgba(204,204,204,0.7);
    text-align: center;
  }
  .qr_card {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    .msg_part{
      display: flex;
      .nickname_text{
        font-size: 14px;
        margin-right: 15px;
        color: gray;
      }
      .avatars_box{
        margin-right: 15px;
        img{
          border-radius: 5px;
        }
      }
    }
  }
  .qr_box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 40px;
  }
}
</style>