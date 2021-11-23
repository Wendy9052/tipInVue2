<template>
  <div class="personal_page">

    <van-cell is-link center>
      <template #title>
          <div class="left_box">
              <div class="text">头像</div>
          </div>
      </template>
      <template #default>
        <van-uploader multiple v-model="fileList" :after-read="afterRead" accept="image/*"> 
          <div class="avatars_box">
              <img :src="avatars_url" alt="">
          </div>
        </van-uploader>
       
      </template>
    </van-cell>

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
export default {
  components: {
  },
  data() {
    return {
      fileList: [],
      avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
      featureList: [
        {
          itemList: [
            {
              text: '昵称',
              icon: "coupon-o",
              url: "",
              type: "text",
              value: "wendy"
            },
            {
              text: '拍一拍',
              url: "",
              icon: "smile-o",
              url: "expression"
            },
            {
              text: '微信号',
              icon: "smile-o",
              url: "",
              type: "text",
              value: "sdddiTJ"
            },
            {
              text: '二维码名片',
              icon: "qr",
              url: "qr_card",
              type: "icon",
            },
            {
              text: '更多信息',
              icon: "smile-o",
              url: "more_msg"
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
    afterRead(file) {
      console.log("file",file)
      var formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
　　   formData.append('file', file.file); //接口需要传的参数
      console.log("formData",formData)
      //显示值
      for (var value of formData.values()) {
        console.log("formData_value",value);
      }
    },
    // 跳转至相应功能的页面
    toFeature(url) {
      console.log("url",url)
      let path = "/me/" + url
      console.log("path",path)
      this.$router.push({
        path: path
      })
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