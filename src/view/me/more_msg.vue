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
      <van-cell is-link center @click="changePage('area')">
        <template #title>
          <div class="text">地区</div>
        </template>
        <template #default>
          <div class="text">{{area.region + ' ' + area.province + ' ' + area.city}}</div>
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
      <!-- 显示大区 -->
      <div v-if="showArea" class="area_part">
          <van-cell-group title="当前位置">
            <van-cell is-link>
              <template #title>
                <van-icon name="location-o" /> 定位中...
              </template>
            </van-cell>
          </van-cell-group>
          <van-cell-group title="地区">
            <van-cell v-for="(item) in areaList" :key="item.id" is-link @click="chooseProviince(item.region,'region')">
              <template #title>
                {{item.region}}
              </template>
            </van-cell>
          </van-cell-group>
      </div>
      <!-- 显示省份 -->
      <div :class="showArea?'right_part':'right_to_left'">
        <div v-if="showProvince" class="province_part">
          <van-cell-group title="选择省份">
            <van-cell v-for="(item) in areaList" :key="item.id" is-link @click="chooseProviince(item.province,'province')">
              <template #title>
                {{item.province}}
              </template>
            </van-cell>
          </van-cell-group>
        </div>
        <div :class="showProvince?'right_part':'right_to_left'">
          <div v-if="showCity" class="city_part">
            <van-cell-group title="选择城市">
              <van-cell v-for="(item) in areaList" :key="item.id" is-link @click="chooseProviince(item.city,'city')">
                <template #title>
                  {{item.city}}
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getArea } from '@/api/api'
import { mapState,mapActions } from 'vuex'
export default {
  data() {
    return {
      ifShowList: true,
      showSign: false,  //是否显示签名页
      signValue: "",  //签名值
      showSex: false,  //是否显示性别选择页
      showArea: false, //是否显示大区页
      showProvince: false, //是否显示省份
      showCity: false, //是否显示城市
      areaList: [],
      area_data: {
        region: "",
        province: "",
        city:"",
      }
    }
  },
  computed: {
    ...mapState(['sign','sex','area'])
  },
  mounted() {
    this.signValue = this.sign
    this.init()
  },
  methods: {
    ...mapActions(['SET_SIGN','SET_SEX','SET_AREA']),
    // 选择省市
    chooseProviince(value,text) {
      if(text == 'region') {
        this.area_data.region = value
        this.showArea = false
        this.showProvince = true
      }
      if(text == 'province') {
        this.area_data.province = value
        this.showProvince = false
        this.showCity = true
      }
      if(text == 'city') {
        this.area_data.city = value
        this.ifShowList = true
        this.showArea = false
        this.showProvince = false
        this.showCity = false
      }
      this.SET_AREA(this.area_data)
      console.log("所在地信息",this.area)
    },
    // 初始化获取大区
    async init() {
      await getArea().then(res => {
        this.areaList = res.data.data
        console.log("大区",this.areaList)
      }).catch(err => {
        console.log("大区error",err)
      })
    },
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
      if(value == 'area') {
        this.showArea = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.more_msg {
  position: relative;
  width: 100vw;

  .province_part,.city_part,.area_part{
    background: rgba(204,204,204,0.3);
    width: 100vw;
  }
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