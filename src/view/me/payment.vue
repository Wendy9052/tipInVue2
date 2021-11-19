<template>
  <div class="payment_page">
    <div class="tip_text">请输入手势密码</div>
    <!-- <button @click="showClicked" style="width:90px;height:50px;font-size:16px;background-color:#eee">手势密码</button> -->
    <pwd></pwd>
  </div>
</template>
 
<script>
  // import pwd from '@/components/gesturePassword'
  import pwd from '@/components/gesturePsw'
  export default {
    name: '',
    data() {
      return {
        showPwd: false
      }
    },
    methods: {
      showClicked() {
        this.showPwd = true;
      },
      handPwd(val) {
        console.log(val);
      }
    },
    components: {
      pwd

    },
  }
</script>

<style lang="scss" scoped>
.payment_page{
  .tip_text{
    font-size: 20px;
    text-align: center;
    color: rgba(205,204,204,1);
    margin-top: 20%;
    margin-bottom: 20px;
  }
}
</style>