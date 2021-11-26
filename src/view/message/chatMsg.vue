<template>
  <div class="chat_msg">
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
      <van-cell is-link>
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
    }
  },
  computed: {
    ...mapState(['avatarsUrl'])
  }
}
</script>

<style lang="scss" scoped>
.chat_msg{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  .van-cell-group{
    margin-bottom: 8px;
  }
  .avatars_class{
    width: 45px;
    border-radius: 5px;
  }
}
</style>