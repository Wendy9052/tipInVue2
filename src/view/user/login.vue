<template>
  <div class="login_page">
    <!-- login -->
    <div class="login_box">
      <div class="title">咖咖账号{{btn_text}}</div>
      <div class="ipt_box">
        <input type="text" name="" placeholder="邮箱/手机号" v-model.trim="username" @blur="checkPhoneOrEmail()" id="">
        <div class="err_text" v-if="emailIsError">{{email_error_tip}}</div>
      </div>
      <div class="ipt_box">
        <input type="password" name="" placeholder="密码" v-model.trim="password" @blur="checkPswLength()" id="">
        <div class="err_text" v-if="pswIsError">密码长度不能小于6位</div>
      </div>
      <div class="ipt_box" v-if="ifShowRePsw">
        <input type="password" name="" placeholder="确认密码" v-model.trim="re_password" @blur="checkPsw()" id="">
        <div class="err_text" v-if="isError">两次输入的密码不一致</div>
      </div>
      <div class="agree_box">
        <van-checkbox v-model="checked" shape="square" icon-size="12" class="agree_text">已阅读并同意《咖咖隐私政策》《咖咖用户协议》</van-checkbox>
      </div>
      <van-button type="info" block class="login_btn" @click="onClickButton()">{{btn_text}}</van-button>
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
  </div>
</template>

<script>
import Mock from 'mockjs'
import { mapState,mapActions } from 'vuex'
import { Login } from "@/api/api"
import { Toast } from "vant"
export default {
  data() {
    return {
      username: '',
      password: '',
      re_password: '',
      checked: false, //checked agreement
      ifShowRePsw: false,
      btn_text: "登录", //按钮名
      isError: false,
      emailIsError: false,  //邮箱格式是否有误
      email_error_tip: "邮箱格式有误",
      pswIsError: false,
    }
  },
  computed: {
    ...mapState(['registerMsg'])
  },
  methods: {
    ...mapActions(['SET_REGISTER_MSG']),
    // 点击登录/注册
    async onClickButton() {
      console.log("res_Random",)
      console.log("checkde",this.checked)
      if(this.ifShowRePsw) {
        // 注册
        if(!this.username) {
          Toast("邮箱或手机号不能为空")
        }else if(!this.password) {
          Toast("密码不能为空")
        }else if(!this.password) {
          Toast("重复输入的密码不能为空")
        }else if(this.checked == false) {
          Toast("勾选同意协议后才能注册")
        }
        let registerMsg = {
          username: this.username,
          password: this.password,
        }
        this.SET_REGISTER_MSG(registerMsg)
        this.btn_text = "登录"
        this.ifShowRePsw = false
      }else {  
        // 登录
        if(!this.username) {
          Toast("邮箱或手机号不能为空")
        }else if(!this.password) {
          Toast("密码不能为空")
        }else if(this.checked == false) {
          Toast("勾选同意协议后才能登录")
        }
        let params = {
          username: this.username,
          password: this.password
        }
        // 成了3 —— 请求接口方法3
        await Login(params).then(res => {
          localStorage.setItem('token',Mock.Random.natural())
          this.$router.push({
            name:"message"
          })
        })
        // 成了2 —— 请求接口方法2
        // this.$http({
        //   method:'post',
        //   url:'/check_login',
        //   data:params
        // }).then(res=>{
        //   console.log(res)
        //   let code = res.data.meta.status
        //   if(code == '200'){
        //     // this.$router.push('/home')
        //     console.log("code 200")
        //   }
        // })

        // 成了1 —— 请求接口方法1
        // this.$http.post("/check_login",params).then(res=>{
        //   console.log("login_res",res)
        // })
      }
    },
    // 校验邮箱/手机号
    checkPhoneOrEmail() {
      let email_test = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      let phone_test = /^1[0-9]{10}$/
      let flag = false
      console.log("邮箱校验",email_test.test(this.username))
      if( this.username != '') {
        if(!phone_test.test(this.username) && !flag){
          this.email_error_tip = "请输入正确的手机号"
          flag = false
        }else {
          this.email_error_tip = ""
          flag = true
        }
        if(!flag) {
          if(!email_test.test(this.username)) {
            this.email_error_tip = "请输入正确的邮箱"
            flag = false
          }else {
            this.email_error_tip = ""
            flag = true
          }
        }
        this.emailIsError = true
      }else {
        this.email_error_tip = ""
        this.emailIsError = false
      }
      
    },
    // 判断密码长度是否小于6位
    checkPswLength() {
      console.log(this.password.length)
      if(this.ifShowRePsw) {
        if(this.password.length < 6) {
          this.pswIsError = true
        }else {
          this.pswIsError = false
        }
      }
    },
    // 检验两次输入的密码是否相同
    checkPsw() {
      console.log("校验密码一致",this.password,this.re_password)
      if((this.password != this.re_password) && this.ifShowRePsw) {
        this.isError = true
      }else {
        this.isError = false
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
      margin-top: 15%;
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