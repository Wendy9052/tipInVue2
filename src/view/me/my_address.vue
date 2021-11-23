<template>
  <div class="my_address">
    <div v-if="showAdd">
      <van-cell title="添加地址">
        <van-icon size="20" name="plus" @click="addAddress()"/>
      </van-cell>
      <van-cell-group v-if="addressList.length > 0">
        <van-cell v-for="(item,index) in addressList" :key="index">
          <template #title>
            <div>
              <span>姓名</span>
              <span>12345654888</span>
            </div>
            <div class="address_text">
              <span>地址</span>
              <span>详细地址</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div :class="showAdd ? 'right_form' : 'right_to_left'">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="联系人"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写联系人姓名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="validator"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ validator, message: '手机号码格式有误' }]"
        />
        <van-field
          v-model="address"
          type="address"
          name="address"
          label="地区信息"
          placeholder="地区信息"
          :rules="[{ required: true, message: '请填写地区信息' }]"
        />
        <van-field
          v-model="address_detail"
          type="address_detail"
          name="address_detail"
          label="详细地址"
          placeholder="街道门牌信息"
          :rules="[{ required: true, message: '请填写详细地址' }]"
        />
         <van-field
          v-model="post_code"
          type="post_code"
          name="post_code"
          label="邮政编码"
          placeholder="邮政编码"
          :rules="[{ required: true, message: '请填写邮政编码' }]"
        />
        <!-- <van-button class="save_btn" type="default" native-type="button">不触发表单提交</van-button> -->
        <van-button class="save_btn" type="default" native-type="submit">保存</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  data() {
    return {
      showAdd: true,
      username: '',
      password: '',
      address: '',
      address_detail: '',
      post_code: '',
    }
  },
  computed: {
    ...mapState(['addressList'])
  },
  mounted() {
    console.log("addressList",this.addressList)
  },
  methods: {
    ...mapActions(['SET_ADDRESS_LIST']),
    validator(val) {
      // 手机号校验
      console.log("val",val)
      return /1\d{10}/.test(val);
    },
    addAddress() {
      this.showAdd = false
      console.log("添加地址")
    },
    onSubmit(values) {
      let formList = []
      formList.push(values)
      this.SET_ADDRESS_LIST(formList)
      console.log('submit', values);
      this.showAdd = true
    },
  }
}
</script>

<style lang="scss" scoped>
.my_address {
  position: relative;
  .address_text{
    font-size: 12px;
    color: #ccc;
  }
  .save_btn{
    width: 100vw;  
    // margin-top: 20px;  
    // position: absolute;
    // bottom: 0;
  }
  .right_to_left {
    position: absolute;
    left: 0;
    height: 100vh;
    transition: 0.3s;
  }
  .right_form {
    position: absolute;
    left: 100vw;
    height: 100vh;
    transition: 0.3s;
  }
}
</style>