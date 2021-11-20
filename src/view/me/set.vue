<template>
  <div class="set_page">

    <van-cell-group v-for="(item,index) in featureList" :key="index">
      <van-cell v-for="(item,index) in item.itemList" :key="index" is-link center @click="toFeature(item.url)">
        <template #title>
            <div class="left_box">
                <div class="text">{{item.text}} <van-icon v-if="item.text == '插件'" name="bulb-o" /></div>
            </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell center @click="toFeature('set')">
        <template #title>
          <div class="left_box">
            <div class="btn_text">切换账号</div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell center @click="quitOuit()">
        <template #title>
          <div class="left_box">
            <div class="btn_text">退出</div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-popup
      v-model="showQuit"
      round
      position="bottom"
      :style="{ height: '25%' , background: '#F5F5F5' }"
    >
      <van-cell-group>
        <van-cell center>
          <template #title>
            <div class="left_box">
              <div class="btn_text">退出登录</div>
            </div>
          </template>
        </van-cell>
        <van-cell center>
          <template #title>
            <div class="left_box">
              <div class="btn_text">关闭微信</div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell center>
          <template #title>
            <div class="left_box">
              <div class="btn_text">取消</div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
// import Vue from 'vue';
// import { Popup } from 'vant';

// Vue.use(Popup);
export default {
  components: {
  },
  data() {
    return {
      featureList: [
        {
          itemList: [
            {
              text: '账号与安全',
              icon: "friends-o",
              url: "share_place"
            }
          ]
        },
        {
          itemList: [
            {
              text: '青少年模式',
              icon: "friends-o",
              url: "share_place"
            },
            {
              text: '关怀模式',
              icon: "coupon-o",
              url: "card"
            }
          ]
        },
        {
          itemList: [
            {
              text: '新消息通知',
              icon: "friends-o",
              url: "share_place"
            },
            {
              text: '勿扰模式',
              icon: "coupon-o",
              url: "card"
            },
            {
              text: '聊天',
              icon: "smile-o",
              url: "expression"
            },
            {
              text: '隐私',
              icon: "smile-o",
              url: "expression"
            },
            {
              text: '通用',
              icon: "smile-o",
              url: "expression"
            }
          ]
        },
        {
          itemList: [
            {
              text: '关于微信',
              icon: "friends-o",
              url: "share_place"
            },
            {
              text: '帮助与反馈',
              icon: "coupon-o",
              url: "card"
            }
          ]
        },
        {
          itemList: [
            {
              text: '插件',
              icon: "friends-o",
              url: "share_place"
            }
          ]
        },
      ],
      showQuit: false
    }
  },
  methods: {
    quitOuit() {
      this.showQuit = true
    },
    // 跳转至相应功能的页面
    toFeature(url) {
      console.log("url",url)
      // let path = "me/" + url
      // console.log("path",path)
      // this.$router.push({
      //   path: path
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.set_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  .van-cell-group{
    margin-bottom: 8px;
  }
  .left_box{
    display: flex;
    .icon_box{
      margin-right: 10px;
    }
    .btn_text{
      text-align: center;
      width: 100%;
    }
  }
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