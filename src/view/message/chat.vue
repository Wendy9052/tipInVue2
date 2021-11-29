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
            <div class="button_box">
              <div class="emotion_btn" @click="chooseEmotion()">
                <van-icon size="30" name="smile-o" />
              </div>
              <div>
                <van-button size="small" type="primary" @click="sendMsg()">发送</van-button>
              </div>
            </div>
          </template>
        </van-field>
        <div v-show="isShowEmotion">
          <div :class="isShowEmotion ? 'has_height' : 'none_height'">
            <div class="container" >
              <!-- <p>文本输入框</p> -->
              <!-- <textarea class="text" rows="5" v-model="content" ></textarea> -->
              <!-- <p>表情选择框</p> -->
              <emotion @emotion="handleEmotion" :height="200" ></emotion>
              <!-- <p>效果显示框</p> -->
              <!-- <div class="text-place"> -->
                <!-- /\#[\u4E00-\u9FA5]{1,3}\;/gi 匹配出含 #XXX; 的字段 -->
                <!-- <p v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Emotion from '@/components/index'
// import Emotion from '@/components/Emotion'
import { mapState,mapActions } from "vuex"
import { createMsg } from "@/api/api"
export default {
  components: {
    Emotion
  },
  data() {
    return {
      content: '',
      comment: '',
      isShowEmotion: false, //是否显示表情
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
    handleEmotion (i) {
      this.content += i
    },
    // 将匹配结果替换表情图片
    emotion (res) {
      let word = res.replace(/\#|\;/gi,'')
      const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
      let index = list.indexOf(word)
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
      // return `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`  
    },
    // 选择发送表情
    chooseEmotion() {
      this.isShowEmotion = !this.isShowEmotion
    },
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

  .container {
    margin: 0 auto;
    // margin-top: 20px;
    // width: 400px;

    .text {
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      width: 400px;
      resize: none;
      box-sizing: border-box;
      padding: 5px 10px;
      border-radius: 8px;
    }
    .text-place {
      height: 80px;
      box-sizing: border-box;
      padding: 5px 10px;
      border-radius: 8px;
      background: #ddd5d5;
    }
    .text-place p {
      display: flex;
      align-items: center;
      margin: 0;
    }

  }
  
  .nav_bar{
    margin-bottom: 8px;
  }
  .ipt_box{
    position: fixed;
    bottom: 0;
    width: 100vw;
    .emotion-box-line{
      .emotion-item{
        margin: 5px;
      }
    }
    .none_height{
      height: 0;
      transition: 0.6s;
    }
    .has_height{
      height: auto;
      transition: 0.6s;
    }
    .button_box{
      display: flex;
      justify-content: space-between;
      .emotion_btn{
        margin-right: 5px;
      }
    }
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
