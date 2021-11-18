<template>
  <div class="address_list">
    <div>
      <van-index-bar :index-list="indexList" :highlight-color="'#008000'">
        <div v-for="(item,index) in indexList" :key="index">
            <van-index-anchor :sticky-offset-to="20">
              <template #default>
                <div class="index_name">{{item == '↑'?'星标朋友':item}}</div>
              </template>
            </van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </div>
      
    </van-index-bar>
    </div>
    <tabbar class="tabbar" :currentTab="'address'"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      indexList: [],
    }
  },
  mounted() {
    this.init()
  },
  created() {

  },
  methods: {
    init() {
      this.indexList.push("↑")
      for(let i = 0; i < 26; i++) {
        console.log("大写字母字母",String.fromCharCode(65+i))
        console.log("小写字母",String.fromCharCode(97+i))
        this.indexList.push(String.fromCharCode(65+i))

      }
      console.log(this.indexList)
    }
  }
}
</script>

<style lang="scss" scoped>
.address_list{
  background: rgba(204,204,204,0.3);
  .index_name{
    font-size: 12px;
  }
}
</style>