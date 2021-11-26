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
          <van-row type="flex" justify="space-around">
            <van-col span="7" v-for="(item, index) in picture_list" :key="index">
              <div class="img_box">
                <img :src="item.img_url" alt="">
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
      picture_list: [
        {
          img_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F19%2F20160119200135_dXcvF.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640513154&t=c4a5fbec77eb7de10e2591148686ac58"
        },
        {
          img_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F15%2F20190915112038_twmnf.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640514908&t=14e903623c40f3e35e5fa26d1548d61c"
        },
        {
          img_url:"https://img1.baidu.com/it/u=160649478,1850475727&fm=26&fmt=auto"
        },
        {
          img_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F13%2F20180713191532_oyhgm.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640514954&t=545d9f85f09d08cb75cb73b3b773a530"
        }
      ]
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
    // display: flex;
    // justify-content: center;
    .img_box{
      // background: #ccc;
      border-radius: 5px;
      width: 100%;
      padding-top: 100%;
      position: relative;
      margin-bottom: 5px;
      img{
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
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