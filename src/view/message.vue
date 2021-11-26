<template>
  <div class="home_page">
    <van-cell-group>
      <van-cell v-for="(item,index) in relationList" :key="index" @click="onChat(item)">
        <template #title>
          <div class="left_part">
            <div class="img_box">
              <img :src="item.avatars" class="img_item" alt="">
            </div>
            <div>
              <div class="left_title">{{ item.name }}</div>
              <div class="left_msg">{{ item.short_msg }}</div>
            </div>
          </div>
        </template>
        <template #default>
          <div class="update_date">{{ item.update_date.replace(/-/g,"/") }}</div>
        </template>
      </van-cell>
    </van-cell-group>
    <tabbar class="tabbar" :currentTab="'message'"></tabbar>
  </div>
</template>

<script>
import { relationList } from "@/api/api"
import { mapState,mapActions,mapMutations,mapGetters } from 'vuex'
import { Toast } from 'vant';
import Tabbar from '../components/tabbar.vue'
export default {
  data() {
    return {
      num: null,
      relationList: [],
    }
  },
  components: {
    Tabbar,
  },
  computed: {
    ...mapState(['count'])
  },
  mounted() {
    this.num = this.count
    this.init()
  },
  methods: {
    ...mapActions(['SET_COUNT']),
    async init() {
      await relationList().then(res => {
        this.relationList = res.data.data
        console.log("联系人res",this.relationList)
      }).catch(err => {
        console.log("err",err)
      })
    },
    addCount() { //增加次数
      this.num++
      this.SET_COUNT(this.num)
    },
    onChat(item) {
      console.log("item",item)
      this.$router.push({
        path:"/message/chat",
        query: {
          ...item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page{
  padding-bottom: 50px;
  .tabbar{
    position: fixed;
    bottom: 0;
  }
  .left_part{
    display: flex;
    align-items: center;
    // background: #ccc;
    width: 70vw;
    .left_title{
      font-size: 14px;
    }
    .left_msg{
      width: 50vw;
      font-size: 12px;
      color: #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .van-image{
      border-radius: 15px;
    }
  }
  .img_box{
    display: flex;
    margin-right: 10px;
    .img_item{
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }
  .update_date{
    font-size: 12px;
  }
}
</style>