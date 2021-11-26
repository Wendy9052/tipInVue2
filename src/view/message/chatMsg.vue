<template>
  <div class="chat_msg">
    <div v-if="showList">
      <van-cell-group>
        <van-cell center>
          <template #title>
              <div class="left_box">
                <img class="avatars_class" :src="avatarsUrl" alt="">
              </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link>
          <template #title>
              <div class="left_box">
                查找聊天记录
              </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <template #title>
              <div class="left_box">
                消息免打扰
              </div>
          </template>
          <template #default>
            <van-switch v-model="disturbChecked" :active-color="activeColor" :inactive-color="inactiveColor" size="20" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
              <div class="left_box">
                置顶聊天
              </div>
          </template>
          <template #default>
            <van-switch v-model="toppingChecked" :active-color="activeColor" :inactive-color="inactiveColor" size="20" />
          </template>
        </van-cell>
        <van-cell>
          <template #title>
              <div class="left_box">
                提醒
              </div>
          </template>
          <template #default>
            <van-switch v-model="remindChecked" :active-color="activeColor" :inactive-color="inactiveColor" size="20" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link @click="setBackground()">
          <template #title>
              <div class="left_box">
                设置当前聊天背景
              </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link>
          <template #title>
              <div class="left_box">
                清空聊天记录
              </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell is-link>
          <template #title>
              <div class="left_box">
                投诉
              </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div :class="showList?'right_part':'right_to_left'">
      <div v-if="showBgList">
        <van-cell is-link @click="chooseBg()">
          <template #title>
              <div class="left_box">
                选择背景图
              </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
              <div class="left_box">
                从相册中选择
              </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
              <div class="left_box">
                拍一张
              </div>
          </template>
        </van-cell>
      </div>
      <div :class="showBgList?'right_part':'right_to_left'">
        <div v-show="showPicture" class="bg_choose_page" >
          <van-row gutter="20">
            <van-col span="8">
              <div class="img_box">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F19%2F20160119200135_dXcvF.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640513154&t=c4a5fbec77eb7de10e2591148686ac58" alt="">
              </div>
            </van-col>
            <van-col span="8">
              <div class="img_box">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F19%2F20160119200135_dXcvF.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640513154&t=c4a5fbec77eb7de10e2591148686ac58" alt="">
              </div>
            </van-col>
            <van-col span="8">
              <div class="img_box">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F19%2F20160119200135_dXcvF.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640513154&t=c4a5fbec77eb7de10e2591148686ac58" alt="">
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      disturbChecked: false,
      toppingChecked: false,
      remindChecked: false,
      activeColor: "#27ae66",
      inactiveColor: "#ccc",
      showList: true, //显示列表
      showBgList: true, //显示背景选择列表
      showPicture: false, // 显示背景图
    }
  },
  computed: {
    ...mapState(['avatarsUrl'])
  },
  methods: {
    // 选择背景
    chooseBg() {
      this.showBgList = false
      this.showPicture = true
    },
    // 进入设置聊天背景页面
    setBackground() {
      this.showList = false
      console.log("更换背景")
    }
  }
}
</script>

<style lang="scss" scoped>
.chat_msg{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  position: relative;
  
  .bg_choose_page{
    width: 100vw;
    height: 100vh;
    background: rgba(17, 20, 2, 0.8);
    padding-top: 5px;
    .img_box{
      // background: #ccc;
      border-radius: 5px;
      width: 100%;
      padding-top: 100%;
      position: relative;
      img{
        border-radius: 5px;
        position: absolute;
        width:100%;
        height: 100%;
        // padding:33% 0 0;
        object-fit: cover;
        // padding:14% 0 14% 0;
      }
    }
  }
  .right_part {
    position:absolute;
    left: 100vw;
    transition: 0.3s;
    width: 100vw;
  }
  .right_to_left {
    height: 100vh;
    position:absolute;
    left: 0;
    transition: 0.3s;
    width: 100vw;
  }
  .van-cell-group{
    margin-bottom: 8px;
  }
  .avatars_class{
    width: 45px;
    border-radius: 5px;
  }
}
</style>