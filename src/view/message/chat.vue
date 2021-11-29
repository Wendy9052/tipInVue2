<template>
  <div class="chat_page" :style="'background:url(' + bg_img_url + ')'">
    <van-nav-bar
      :title="relation_name"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="nav_bar"
    >
      <template #right>
        <div @click="onMore()">
          <van-icon name="ellipsis" />
        </div>
      </template>
    </van-nav-bar>
    <div class="dialog_part" v-for="(item,index) in dialogList" :key="index">
      <div class="relation_box" v-if="item.type == 'other'">
        <div class="avatars_box">
          <img :src="item.avatars_url" alt="">
        </div>
        <div class="dialog_box">
          <div class="msg_box">
            <div class="triangle_icon"></div>
            {{item.msg}}
          </div>
        </div>
      </div>
      <div class="my_box" v-if="item.type == 'mine'">
        <div class="dialog_box">
          <div class="msg_box">
            <div class="triangle_icon"></div>
            {{item.msg}}
          </div>
        </div>
        <div class="avatars_box">
          <img :src="item.avatars_url" alt="">
        </div>
      </div>  
    </div>
    <div class="ipt_box">
      <van-cell-group>
        <van-field  placeholder="">
          <template #input width="30px">
            <div class="icon_box">
              <van-icon color="#a5a5a5" name="volume-o" />
            </div>
            <input class="ipt_style" type="text" v-model="iptValue">
          </template>
          <template #button>
            <van-button size="small" type="primary" @click="sendMsg()">发送</van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex"
import { createMsg } from "@/api/api"
export default {
  data() {
    return {
      relation_name: "",  //对方昵称
      other_avatars_url: "",  //对方头像地址
      my_avatars_url: "https://avatars.githubusercontent.com/u/71574611?s=40&v=4", //我的头像地址
      short_msg: "",  //对方的当前消息
      iptValue: "", //发送的消息
      dialogList: [
        {
          type: "other",
          avatars_url: "",
          msg: "",
        },
        {
          type: "mine",
          avatars_url: "",
          msg: "呵呵哈哈哈",
        }
      ],
    }
  },
  computed: {
    ...mapState(['avatarsUrl','bg_img_url'])
  },
  mounted() { 
    console.log("bg_img_url",this.bg_img_url)
    this.other_avatars_url = this.$route.query.avatars
    this.init()
  },
  methods: {
    ...mapActions(['SET_AVATARS_URL']),
    // 查看更多
    onMore() {
      this.$router.push({
        name:"chatMsg"
      })
    },
    // 初始化对话列表
    init() {
      this.relation_name = this.$route.query.name //标题栏
      this.dialogList[0].msg = this.$route.query.short_msg 
      for(let i in this.dialogList) {
        if(this.dialogList[i].type == "other") {
          this.dialogList[i].avatars_url = this.other_avatars_url
        }
        if(this.dialogList[i].type == "mine") {
          this.dialogList[i].avatars_url = this.my_avatars_url
        }
      }
      this.SET_AVATARS_URL(this.other_avatars_url)
      console.log("duihualiebioa",this.dialogList)
    },
    // 点击发送
    sendMsg() {
      let dialog_data = {
        type: "mine",
        avatars_url: this.my_avatars_url,
        msg: this.iptValue,
      }
      this.dialogList.push(dialog_data)
      this.iptValue = ""
      this.SET_AVATARS_URL(this.other_avatars_url)
      console.log("头像:",this.avatarsUrl)
      setTimeout(() => {
        createMsg().then(res => {
          console.log("生成消息",res)
          this.dialogList.push(res.data.data[0])
        })
      },1000)
    },
    // 点击返回
    onClickLeft() {
      this.$router.replace({
        name:"message"
      })
    },
    onClickRight() {

    }
  }
}
</script>

<style lang="scss" scope>
.chat_page {
  background: rgba(204,204,204,0.3);
  height: 100vh;
  position: relative;
  .nav_bar{
    margin-bottom: 8px;
  }
  .ipt_box{
    position: fixed;
    bottom: 0;
    width: 100vw;
    .icon_box{
      border: 1px solid #a5a5a5;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
    }
    .ipt_style{
      background: rgba(204,204,204,0.2);
      border: none;
      outline: none;
      width: 60vw;
      border-radius: 5px;
      text-indent: 10px;
    }
    
  }
  .dialog_part {
    padding: 8px;
    .my_box{
      display: flex;
      justify-content: end;
      .dialog_box {
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        margin-right: 10px;
        .msg_box {
          font-size: 14px;
          color: #0f0f0f;
          position: relative;
          max-width: 50vw;
          .triangle_icon {
            width:0;
            height:0;
            border:5px solid;
            border-color:transparent transparent #fff #fff ;
            transform: rotate(-135deg);
            position: absolute;
            right: -14px;
            top: 3px;
          }
        }
      }
      .avatars_box {
        display: flex;
        img {
          width: 30px;
          height: 30px;
          border-radius: 5px;
        }
      }
    }
    .relation_box {
      display: flex;
      // margin-bottom: 15px;
      .dialog_box {
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        .msg_box {
          font-size: 14px;
          color: #0f0f0f;
          position: relative;
          max-width: 50vw;
          .triangle_icon {
            width:0;
            height:0;
            border:5px solid;
            border-color:transparent transparent #fff #fff ;
            transform: rotate(45deg);
            position: absolute;
            left: -14px;
            top: 3px;
          }
        }
      }
      .avatars_box {
        display: flex;
        margin-right: 10px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
