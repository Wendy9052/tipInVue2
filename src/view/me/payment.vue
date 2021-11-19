<template>
  <div class="payment_page">
    <!-- 输入手势密码部分 -->
    <div v-if="ifShowPsw">
      <div class="tip_text">请输入手势密码</div>
      <pwd @checkPsw="checkPsw"></pwd>
    </div>
  </div>
</template>
 
<script>
  // import pwd from '@/components/gesturePassword'
  import pwd from '@/components/gesturePsw'
  export default {
    name: '',
    components: {
      pwd
    },
    data() {
      return {
        showPwd: false,
        ifShowPsw: true, //是否显示手势密码
      }
    },
    methods: {
      showClicked() {
        this.showPwd = true;
      },
      handPwd(val) {
        console.log(val);
      },
      checkPsw(val) {
        console.log("ifpass?",val)
        if(val == "pass") {
          this.ifShowPsw = false
        }
      }
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