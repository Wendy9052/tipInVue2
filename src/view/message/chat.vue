<template>
  <div id="chat">
    <!-- <Bottom />
    <Header :name="msg" />
    <div class="chat_alluser">
      <div ref="chatuser" @click="checkChild(index)" class="chatuser" v-for="(item,index) in chat" :key="index">
        <ChatChild :imgsrc="item.imgurl" :nickname="item.name" :time="item.date" :word="item.words" />
      </div>
    </div> -->
  </div>
</template>

<script>
// import Bottom from "../components/Menu/Bottom";
// import Header from "../components/Menu/Header";
// import ChatChild from "../components/Pages/ChatChild";
// export default {
//   name: "Chat",
//   components: {
//     Bottom: Bottom,
//     Header: Header,
//     ChatChild: ChatChild
//   },
//   data() {
//     return {
//       msg: "微信",
//       chat: null,
//       name: null
//     };
//   },
//   mounted() {
//     this.$axios.get("/chatchild").then(res => {
//       this.chat = res.data.result;
//     });
//   },
//   methods: {
//     checkChild(index) {
//       this.$refs.chatuser[index].style.backgroundColor = "rgb(240,240,240)";
//       // 动态dom元素渲染完成之后，跳转到另一个界面（ChatDetail）
//       // 获取动态name
//       let username = this.chat[index].name;
//       this.$nextTick(() => {
//         this.$router.push({
//           path: "/ChatDetail",
//           query: { name: username }
//         });
//       });
//     }
//   }
// };
</script>

<style lang="scss" scope>
#chat {
  width: 100%;
  .chat_alluser {
    margin-bottom: 7.5rem;
    .chatuser {
      position: relative;
      top: 3.5rem;
      padding: 0.3rem 0;
    }
  }
}
</style>
