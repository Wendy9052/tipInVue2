<template>
  <div class="personal_page">
    <div v-if="ifShowList">
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
        <van-cell v-for="(item,index) in item.itemList" :key="index" is-link center @click="toFeature(item.url,item.text)">
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
    <div :class="ifShowList?'right_part':'right_to_left'">
      <div v-if="isChangeName">
        <van-field
          v-model="nicknameValue"
          placeholder="输入昵称"
          class="nickname_text"
          border
        />
        <van-button class="save_btn" type="default" @click="saveBtn()">保存</van-button>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      isChangeName: false, //是否显示修改昵称页面 
      ifShowList: true, //显示个人信息列表
      fileList: [],
      avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4",
      featureList: [
        {
          itemList: [
            {
              text: '昵称',
              icon: "coupon-o",
              url: "this_page",
              type: "text",
              value: ""
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
              url: "my_address"
            }
          ]
        },
      ],
      showQuit: false,
      nicknameValue: "", //昵称名
    }
  },
  computed: {
    ...mapState(['nickname'])
  },
  created() {
    this.changeNickName()
  },
  methods: {
    ...mapActions(['SET_NICKNAME']),
    // 保存昵称
    saveBtn() {
      this.SET_NICKNAME(this.nicknameValue)
      console.log("昵称:",this.nickname)
      this.changeNickName()
      this.ifShowList = true
    },
    // 修改昵称值
    changeNickName() {
      for(let i in this.featureList) {
        for(let j in this.featureList[i]) {
          for(let k in this.featureList[i][j]) {
            if(this.featureList[i][j][k].text == "昵称") {
              this.featureList[i][j][k].value = this.nickname
              console.log("修改昵称")
            }
          }
        }
      }
    },
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
    toFeature(url,text) {
      if(url == 'this_page') {
        if(text == "昵称") {
          this.ifShowList = false
          this.isChangeName = true
        }
      }else {
        console.log("url",url)
        let path = "/me/" + url
        console.log("path",path)
        this.$router.push({
          path: path
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.personal_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  position: relative;
  .nickname_text{
    width: 100vw;
  }
  .save_btn{
    width: 100vw;
  }
  .right_part{
    position: absolute;
    left: 100vw;
    transition: 0.3s;
  }
  .right_to_left{
    position: absolute;
    left: 0;
    transition: 0.3s;
  }
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