<template>
  <div class="personal_page">

    <van-cell-group v-for="(item,index) in featureList" :key="index">
      <van-cell v-for="(item,index) in item.itemList" :key="index" is-link center @click="toFeature(item.url)">
        <template #title>
            <div class="left_box">
                <div class="text">{{item.text}}</div>
            </div>
        </template>
        <template #default>
          <div v-if="item.type == 'img'" class="avatars_box">
            <img :src="item.value" alt="">
          </div>
          <div v-if="item.type == 'text'" >
            {{ item.value }}
          </div>
          <div v-if="item.type == 'icon'" >
            <van-icon :name="item.icon " />
          </div>
        </template>
      </van-cell>
    </van-cell-group>

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
              text: '头像',
              icon: "friends-o",
              url: "share_place",
              type: "img",
              value: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4"
            },
            {
              text: '昵称',
              icon: "coupon-o",
              url: "card",
              type: "text",
              value: "wendy"
            },
            {
              text: '拍一拍',
              icon: "smile-o",
              url: "expression"
            },
            {
              text: '微信号',
              icon: "smile-o",
              url: "expression",
              type: "text",
              value: "sdddiTJ"
            },
            {
              text: '二维码名片',
              icon: "qr",
              url: "expression",
              type: "icon",
            },
            {
              text: '更多信息',
              icon: "smile-o",
              url: "expression"
            }
          ]
        },
        {
          itemList: [
            {
              text: '微信豆',
              icon: "friends-o",
              url: "share_place"
            }
          ]
        },
        {
          itemList: [
            {
              text: '我的地址',
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
.personal_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  .avatars_box{
    display: flex;
    justify-content: end;
    img{
      border-radius: 5px;
    }
  }
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
}
</style>