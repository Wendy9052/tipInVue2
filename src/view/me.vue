<template>
  <div class="me_page">
    <van-cell-group>
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
    </van-cell-group>

    <van-cell-group>
      <van-cell is-link center @click="toFeature('payment')">
        <template #title>
          <div class="left_box">
            <div class="icon_box">
              <van-icon size="20" name="passed" />
            </div>
            <div class="text">
              支付
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell v-for="(item,index) in featureList" :key="index" is-link center @click="toFeature(item.url)">
        <template #title>
            <div class="left_box">
                <div class="icon_box">
                  <van-icon size="20" :name="item.icon" />
                </div>
                <div class="text">{{item.text}}</div>
            </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell is-link center @click="toFeature('set')">
        <template #title>
          <div class="left_box">
            <div class="icon_box">
              <van-icon size="20" name="setting-o" />
            </div>
            <div class="text">
              设置
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    
    <tabbar class="tabbar" :currentTab="'me'"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      featureList: [
        {
          text: '收藏',
          icon: "star-o",
          url: "store"
        },
        {
          text: '咖咖圈',
          icon: "friends-o",
          url: "share_place"
        },
        {
          text: '卡包',
          icon: "coupon-o",
          url: "card"
        },
        {
          text: '表情',
          icon: "smile-o",
          url: "expression"
        }
      ],
    }
  },
  methods: {
    // 跳转至相应功能的页面
    toFeature(url) {
      console.log("url",url)
      let path = "me/" + url
      console.log("path",path)
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.me_page{
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