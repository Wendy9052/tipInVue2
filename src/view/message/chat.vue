<template>
  <div class="chat_page">
    <van-nav-bar
      :title="relation_name"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="ellipsis" />
      </template>
    </van-nav-bar>
    <div class="dialog_part">
      <div class="relation_box">
        <div class="avatars_box">
          <img :src="avatars_url" alt="">
        </div>
        <div class="dialog_box">
          <div class="msg_box">
            <div class="triangle_icon"></div>
            {{short_msg}}
          </div>
        </div>
      </div>  
    </div>
    <div class="ipt_box">
      <van-cell-group>
        <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      relation_name: "",
      avatars_url: "",
      short_msg: "",
    }
  },
  mounted() { 
    this.relation_name = this.$route.query.name
    this.avatars_url = this.$route.query.avatars
    this.short_msg = this.$route.query.short_msg
  },
  methods: {
    onClickLeft() {

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
  .ipt_box{
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
  .dialog_part {
    padding: 15px;
    .relation_box {
      display: flex;
      .dialog_box {
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        .msg_box {
          font-size: 14px;
          color: #0f0f0f;
          position: relative;
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
