<template>
  <div class="login_page">
    <!-- login -->
    <div class="login_box">
      <div class="title">咖咖账号{{btn_text}}</div>
      <div class="ipt_box">
        <input type="text" name="" placeholder="邮箱/手机号" v-model="username" id="">
      </div>
      <div class="ipt_box">
        <input type="password" name="" placeholder="密码" v-model="password" id="">
      </div>
      <div class="ipt_box" v-if="ifShowRePsw">
        <input type="password" name="" placeholder="确认密码" v-model="re_password" @blur="checkPsw()" id="">
        <div class="err_text" v-if="isError">两次输入的密码不一致</div>
      </div>
      <div class="agree_box">
        <van-checkbox v-model="checked" shape="square" icon-size="12" class="agree_text">已阅读并同意《咖咖隐私政策》《咖咖用户协议》</van-checkbox>
      </div>
      <van-button type="info" block class="login_btn">{{btn_text}}</van-button>
      <div class="text_box">
        <div @click="forgetPsw()">忘记密码？</div>
        <div v-if="!ifShowRePsw" @click="toRegister()">手机注册</div>
        <div v-if="ifShowRePsw" @click="toLogin()" class="to_login_text">用户登录</div>
      </div>
      <div class="third_party">
        <div class="title">第三方账号登录</div>
        <div class="icon_box">
          <div class="icon_bg"><van-icon size="25" name="eye" /></div>
          <div class="icon_bg"><van-icon size="25" name="wechat" /></div>
          <div class="icon_bg"><van-icon size="25" name="diamond" /></div>
        </div>
      </div>
    </div>
    <!-- register -->
    <div class="register_box">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      re_password: '',
      checked: "", //checked agreement
      ifShowRePsw: false,
      btn_text: "登录", //按钮名
      isError: false,
    }
  },
  methods: {
    // 检验两次输入的密码是否相同
    checkPsw() {
      console.log("校验密码一致",this.password,this.re_password)
      if((this.password != this.re_password) && this.ifShowRePsw) {
        this.isError = true
      }
    },
    // 用户登录
    toLogin() {
      this.btn_text = "登录"
      this.ifShowRePsw = false
    },
    // 忘记密码
    forgetPsw() {
      console.log("忘记密码")
    },
    // 手机注册
    toRegister() {
      console.log("手机注册")
      this.btn_text = "注册"
      this.ifShowRePsw = true
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  }

}
</script>

<style lang="scss" scoped>
.login_page{
  .login_box{
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .third_party{
      .title {
        margin-top: 15%;
      }
      .icon_box{
        display: flex;
        justify-content: space-evenly;
        .icon_bg{
          background: rgba(204,204,204,0.3);
          padding: 10px;
          border-radius: 50%;
        }
      }
    }
    .text_box{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .to_login_text{
        color: #4B99FF;
      }
    }
    .login_btn{
      border-radius: 5px;
      margin-bottom: 15px;
    }
    .title{
      font-size: 14px;
      color: gray;
      text-align: center;
      margin-top: 25%;
      margin-bottom: 40px;
    }
    .agree_box{
      background: rgba(255,240,245);
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 15px;
      .agree_text{
        font-size: 12px;
      }
    }
    .ipt_box{
      // display: flex;
      // justify-content: space-between;
      margin-bottom: 15px;
      .err_text{
        color: salmon;
        font-size: 12px;
        margin-top: 5px;
        text-indent: 10px;
      }
      input {
        height: 36px;
        border-radius: 5px;
        // margin-bottom: 15px;
        border: 1px solid rgba(204,204,204,0.3);
        width: 100%;
        background: rgba(204,204,204,0.3);
        text-indent: 10px;
      }
      input::-webkit-input-placeholder{
        color: rgba(204,204,204,0.8);
        font-size: 15px;
        text-indent: 10px;
      }
    }
    
  }
}
</style>