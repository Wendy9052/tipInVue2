<template>
  <div class="more_msg">
    <div v-if="ifShowList">
      <van-cell is-link center @click="changePage('sex')">
        <template #title>
          <div class="text">性别</div>
        </template>
        <template #default>
          <div class="text">{{sex}}</div>
        </template>
      </van-cell>
      <van-cell is-link center>
        <template #title>
          <div class="text">地区</div>
        </template>
      </van-cell>
      <van-cell is-link center @click="changePage('sign')">
        <template #title>
          <div class="text">个性签名</div>
        </template>
        <template #default>
          <div class="text">{{sign}}</div>
        </template>
      </van-cell>
    </div>
    <div :class="ifShowList?'right_part':'right_to_left'">
      <!-- 显示sign -->
      <div v-if="showSign" class="sign_part">
        <van-field
          v-model="signValue"
          placeholder="输入个性签名"
          class="sign_box"
          border
        />
        <van-button class="save_btn" type="default" @click="saveBtn()">保存</van-button>
      </div>
      <!-- 显示sex -->
      <div v-if="showSex" class="sex_part">
        <van-grid :column-num="1">
          <van-grid-item>
            <template #default>
              <div class="sex_text" @click="saveSex('girl')">
                👧🏻
              </div>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #default>
              <div class="sex_text" @click="saveSex('boy')">
                👦🏻
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  data() {
    return {
      ifShowList: true,
      showSign: false,  //是否显示签名页
      signValue: "",  //签名值
      showSex: false,  //是否显示性别选择页
    }
  },
  computed: {
    ...mapState(['sign','sex'])
  },
  mounted() {
    this.signValue = this.sign
  },
  methods: {
    ...mapActions(['SET_SIGN','SET_SEX']),
    // 保存性别
    saveSex(value) {
      this.ifShowList = true
      this.SET_SEX(value)
      console.log("性别",this.sex)
    },
    // 保存
    saveBtn() {
      this.ifShowList = true
      console.log("signValue",this.signValue)
      this.SET_SIGN(this.signValue)
    },
    // 修改签名
    changePage(value) {
      this.ifShowList = false
      if(value == 'sign') {
        this.showSign = true
      }
      if(value == 'sex') {
        this.showSex = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.more_msg {
  position: relative;
  width: 100vw;
  .sex_part{
    width: 100vw;
    .sex_text{
      text-align: left;
      // display: flex;
      // justify-content: start;
      // align-items: flex-start;
    }
  }
  .save_btn{
    width: 100vw;
  }
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