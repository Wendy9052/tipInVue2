<template>
  <div class="tabbar_page">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="message" icon="smile-comment-o" :badge="count">消息</van-tabbar-item>
      <van-tabbar-item name="address" icon="user-circle-o">通讯录</van-tabbar-item>
      <van-tabbar-item name="find" icon="browsing-history-o">发现</van-tabbar-item>
      <van-tabbar-item name="me" icon="contact">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from "vuex"
export default {
  components: {
    
  },
  props: {
    currentTab: ""
  },
  data () {
    return {
      active: "message",
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['get_count'])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['increment']),
    onChange(e) {
      console.log("当前页面：",e)
      if(e == "message") {
        this.$router.replace({
          name: "addressList"
        })
      }
      else if(e == "address") {
        this.$router.replace({
          name: "addressList"
        })
      }
      else if(e == "find") {
        this.$router.replace({
          name: "find"
        })
      }
      else if(e == "me") {
        this.$router.replace({
          name: "me"
        })
      }
    },
    init() {
      this.active = this.currentTab
      console.log("count:",this.get_count)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar_page{
  .tabbar{
    background: #ccc;
  }
}
</style>
