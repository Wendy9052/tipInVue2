<template>
  <div class="home_page">
    <van-cell-group>
      <van-cell v-for="(item,index) in 5" :key="index" title="单元格">
        <template #title>
          <div class="left_part">
            <div class="img_box">
              <!-- <img src="https://img01.yzcdn.cn/vant/cat1.jpeg" class="img_item" alt=""> -->
              <van-image width="50" height="50" style="border-radius:15px" src="https://img01.yzcdn.cn/vant/cat2.jpeg"/>
            </div>
            <div>
              <div class="left_title">名称</div>
              <div class="left_msg">消息</div>
            </div>
          </div>
          
        </template>
        <template #default>
          <div class="update_date">11月8日</div>
        </template>
      </van-cell>

      <!-- <van-cell title="单元格" value="内容" label="描述信息" /> -->
    </van-cell-group>
    <tabbar class="tabbar" :currentTab="'message'"></tabbar>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations,mapGetters } from 'vuex'
import { Toast } from 'vant';
import Tabbar from '../components/tabbar.vue'
export default {
  data() {
    return {
      num: null,
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
  },
  methods: {
    ...mapActions(['SET_COUNT']),
    addCount() { //增加次数
      this.num++
      this.SET_COUNT(this.num)
    },
  }
}
</script>

<style lang="scss" scoped>
.home_page{
  .tabbar{
    position: fixed;
    bottom: 0;
  }
  .left_part{
    display: flex;
    .left_title{
      font-size: 14px;
    }
    .left_msg{
      font-size: 12px;
      color: #ccc;
    }
    .van-image{
      border-radius: 15px;
    }
  }
  .img_box{
    display: flex;
    margin-right: 10px;
    .img_item{
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  }
  .update_date{
    font-size: 12px;
  }
}
</style>