<template>
  <div class="payment_page">
    <!-- 输入手势密码部分 -->
    <div v-if="ifShowPsw">
      <div class="tip_text">请输入手势密码</div>
      <pwd @checkPsw="checkPsw"></pwd>
    </div>
    <!-- 卡片部分 -->
    <div v-else>
      <div class="pay_box">
        <div class="icon_box">
          <van-icon size="28" name="paid" />
          <div class="pay_box_text">收付款</div>
        </div>
        <div class="icon_box">
          <van-icon size="28" name="pending-payment" />
          <div class="pay_box_text">钱包</div>
        </div>
      </div>
      <div class="card_box" v-for="(card_item,index) in functionList" :key="index">
        <div class="card_title">{{ card_item.title }}</div>
        <van-grid :border="false">
          <van-grid-item :column-num="4" v-for="(item,index) in card_item.item_list" :key="index">
            <template #default>
              <div class="card_item_box">
                <van-icon size="25" :name="item.item_icon" />
                <div class="item_text">{{ item.item_text }}</div>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
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
        ifShowPsw: false, //是否显示手势密码
        functionList: [
          {
            title: "金融理财",
            id: 1,
            item_list: [
              {
                item_text: "信用卡还款",
                item_icon: "refund-o",
              },
              {
                item_text: "理财通",
                item_icon: "balance-o",
              },
              {
                item_text: "信用卡还款",
                item_icon: "refund-o",
              },
              {
                item_text: "理财通",
                item_icon: "balance-o",
              },
              {
                item_text: "信用卡还款",
                item_icon: "refund-o",
              },
              {
                item_text: "理财通",
                item_icon: "balance-o",
              }
            ]
          },
          {
            title: "生活服务",
            id: 1,
            item_list: [
              {
                item_text: "手机充值",
                item_icon: "refund-o",
              },
              {
                item_text: "生活缴费",
                item_icon: "thumb-circle-o",
              }
            ]
          },
          {
            title: "交通出行",
            id: 1,
            item_list: [
              {
                item_text: "手机充值",
                item_icon: "refund-o",
              },
              {
                item_text: "生活缴费",
                item_icon: "thumb-circle-o",
              }
            ]
          }
        ]
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
  padding: 8px;
  background: rgba(204,204,204,0.3);
  height: 100vh;
  .tip_text{
    font-size: 20px;
    text-align: center;
    color: rgba(205,204,204,1);
    margin-top: 20%;
    margin-bottom: 20px;
  }
  .card_box{
    padding: 15px 10px 15px;
    background: #fff;
    margin-top: 8px;
    border-radius: 6px;

    .card_title{
      font-size: 13px;
      color: #a5a5a5;
    }
    .card_item_box{
      display: flex;
      flex-direction: column;
      align-items: center;
      .item_text{
        font-size: 13px;
        color: gray;
        margin-top: 10px;
      }
    }
    
  }
  .pay_box{
    display: flex;
    justify-content: space-evenly;
    // background: rgba(67,144,87);
    background: #27ae66;
    border-radius: 6px;
    padding-top: 10%;
    padding-bottom: 10%;
    color: #fff;
    .icon_box{
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      .pay_box_text{
        font-size: 12px;
        margin-top: 5px;
      }
    }
    
  }
}
</style>