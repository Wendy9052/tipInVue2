<template>
  <div id="chatdetail">
    <!-- <div class="chattop">
      <div @click="goback" class="chattop_back">
        <icon-svg icon-class="houtui_shangyibu_zuojiantou_shangyiye" />
      </div>
      <div class="chattop_name">{{name}}</div>
      <div class="chattop_more">
        <icon-svg icon-class="gengduo" />
      </div>
    </div>
    <div class="chatcontent">
      <ChatMsg ref="chatmsg" />
    </div>
    <div class="chatfooter">
      <div @click="changeSound">
        <icon-svg :icon-class="issound" />
      </div>
      <div>
        <input ref="sendcontent" @keypress="sendmsg" :type="istype" :value="isvalue" />
      </div>
      <div>
        <icon-svg icon-class="biaoqing" />
      </div>
      <div>
        <icon-svg icon-class="del" />
      </div>
    </div> -->
  </div>
</template>

<script>
// import ChatMsg from "./ChatMsg";
// export default {
//   name: "ChatDetail",
//   data() {
//     return {
//       name: null,
//       issound: "xiaoxitongzhi",
//       istype: "text",
//       isvalue: "",
//       isshow: false,
//       tomsg: "",
//       msgchild: null
//     };
//   },
//   components: {
//     ChatMsg: ChatMsg
//   },
//   mounted() {
//     this.name = this.$route.query.name;
//     this.msgchild = this.$refs.chatmsg;
//   },
//   methods: {
//     // 进行返回操作
//     goback() {
//       this.$router.go(-1);
//     },
//     // 切换input的类型
//     changeSound() {
//       // 在data中定义一个变量isshow:false，利用this.isshow与!this.isshow进行切换
//       if (!this.isshow) {
//         this.isshow = true;
//         this.issound = "yuyin";
//         this.istype = "button";
//         this.isvalue = "按住 说话";
//       } else {
//         this.isshow = false;
//         this.issound = "xiaoxitongzhi";
//         this.istype = "text";
//         this.isvalue = "";
//       }
//     },
//     // 发送消息
//     sendmsg(e) {
//       // 1、用ref定义输入回复内容的input文本框，定义sendcontent变量接收其value值（输入的内容）
//       let sendcontent = this.$refs.sendcontent.value;
//       if (e.keyCode === 13 && sendcontent.split(" ").join("").length !== 0) {
//         // 2、将ChatDetail（父）组件中的sendcontent（文本框输入的值）先用tomsg接收
//         this.tomsg = sendcontent;
//         // 3、用ref定义ChatMsg（子）组件，并在mounted中使用$refs获取，即this.msgchild
//         // 4、调子组件里的方法，并将tomsg传到ChatMsg（子）组件（具体的聊天内容）中
//         this.msgchild.saveMsg(this.tomsg);
//         // 5、发送完一条信息之后，需清空文本框
//         this.$refs.sendcontent.value = "";
//         // 回车时，调用子组件的随机消息的方法
//         this.msgchild.randomMsg();
//       }
//     }
//   }
// };
</script>

<style lang="scss" scope>
#chatdetail {
  position: relative;
  background-color: rgb(238, 212, 238);
  .chattop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: rgb(240, 240, 240) !important;
    display: flex;
    flex-direction: row;
    .chattop_back {
      flex: 1;
      margin-left: 1rem;
    }
    .chattop_name {
      flex: 20;
      text-align: center;
    }
    .chattop_more {
      flex: 1;
      margin-right: 1rem;
    }
  }
  .chatcontent {
    width: 100%;
    height: 100%;
  }
  .chatfooter {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    background-color: rgb(240, 240, 240) !important;
    display: flex;
    flex-direction: row;
    div:nth-child(1),
    div:nth-child(3),
    div:nth-child(4) {
      flex: 1;
      svg {
        font-size: 1.5rem;
        margin-top: 0.9rem;
      }
    }
    div:nth-child(2) {
      flex: 5;
      input {
        width: 100%;
        height: 2.5rem;
        outline: none;
        padding-left: 0.5rem;
        box-sizing: border-box;
        height: 2.5rem;
        margin-top: 0.5rem;
        border-style: none;
        font-size: 0.9rem;
        border-radius: 4px;
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
