<template>
  <div class="more_msg">
    <div v-if="ifShowList">
      <van-cell is-link center>
        <template #title>
          <div class="text">性别</div>
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <div class="text">地区</div>
        </template>
      </van-cell>
      <van-cell is-link center @click="changeSign('sign')">
        <template #title>
          <div class="text">个性签名</div>
        </template>
        <template #default>
          <div class="text">惺惺惜惺惺寻寻寻</div>
        </template>
      </van-cell>
    </div>
    <div :class="ifShowList?'right_part':'right_to_left'">
      <div v-if="showSign" class="sign_part">
        <van-field
          v-model="signValue"
          placeholder="输入个性签名"
          class="sign_box"
          border
        />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifShowList: true,
      showSign: false,
      signValue: "",
    }
  },
  methods: {
    // 修改签名
    changeSign(value) {
      this.ifShowList = false
      if(value == 'sign') {
        this.showSign = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.more_msg {
  position: relative;
  .right_part {
    position:absolute;
    left: 100vw;
    transition: 0.3s;
  }
  .right_to_left {
    height: 100vh;
    position:absolute;
    left: 0;
    transition: 0.3s;
  }
  .sign_box{
    width: 100vw;
    margin-bottom: 1px solid #ccc;
  }
}
</style>