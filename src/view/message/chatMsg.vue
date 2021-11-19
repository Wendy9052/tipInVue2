<template>
  <div id="chatmsg" ref="msg">
    <!-- 动态创建 -->
    <div v-for="(item,index) in lists" :key="index">
      <div v-if="item.id==122" class="user">
        <div v-scroll>
          <img :src="item.face" alt />
          <div class="bubble">
            <span>{{item.word}}</span>
          </div>
        </div>
      </div>
      <div v-if="item.id==1529" class="touser">
        <div v-scroll>
          <img :src="item.face" alt />
          <div class="tobubble">
            <span>{{item.word}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userinfo from "./userinfo";
export default {
  name: "ChatMsg",
  data() {
    return {
      userimg: "",
      lists: []
    };
  },
  mounted() {
    this.userid = userinfo.id;
    this.userimg = userinfo.imgurl;
  },
  // vue自动滚动到底部
  directives: {
    scroll: {
      inserted(el) {
        el.scrollIntoView();
      }
    }
  },
  methods: {
    saveMsg(tomsg) {
      this.lists.push({
        id: this.userid,
        face: this.userimg,
        word: tomsg
      });
    },
    randomMsg() {
      let touserdata = userinfo.data;
      this.lists.push({
        id: touserdata.id,
        face: touserdata.imgurl,
        word:
          touserdata.words[Math.floor(Math.random() * touserdata.words.length)]
            .info
      });
    }
  }
};
</script>

<style lang="scss" scope>
#chatmsg {
  position: relative;
  top: 3.5rem;
  width: 100%;
  min-height: 44rem;
  background-color: rgb(238, 212, 238);
  margin-bottom: 3.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  .user {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0.8rem 0;
    img {
      object-fit: cover;
      width: 3rem;
      height: 3rem;
      border-radius: 3px;
      float: right;
      margin-right: 1rem;
    }
    .bubble {
      position: relative;
      float: right;
      margin-right: 1rem;
      padding: 0.8rem;
      box-sizing: border-box;
      border-radius: 3px;
      max-width: 65%;
      background-color: rgb(116, 228, 116);
      span {
        height: 1.25rem;
        line-height: 1.25rem;
      }
    }
    .bubble::after {
      position: absolute;
      right: -1.3rem;
      top: 0.8rem;
      content: "";
      width: 0;
      height: 0;
      border: 0.7rem solid;
      border-color: transparent transparent transparent rgb(116, 228, 116);
    }
  }
  .touser {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0.8rem 0;
    img {
      object-fit: cover;
      width: 3rem;
      height: 3rem;
      border-radius: 3px;
      float: left;
      margin-left: 1rem;
    }
    .tobubble {
      position: relative;
      float: left;
      margin-left: 1rem;
      padding: 0 0.7rem;
      box-sizing: border-box;
      border-radius: 3px;
      max-width: 65%;
      background-color: rgb(116, 228, 116);
      line-height: 3rem;
    }
    .tobubble::after {
      position: absolute;
      left: -1.3rem;
      top: 0.8rem;
      content: "";
      width: 0;
      height: 0;
      border: 0.7rem solid;
      border-color: transparent rgb(116, 228, 116) transparent transparent;
    }
  }
}
</style>
