<template>
  <div class="home_page">
    <div>
      {{num}}
    </div>
    <van-button type="default" @click="addCount()">增加</van-button>
    <tabbar class="tabbar"></tabbar>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations,mapGetters } from 'vuex'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page{
  .tabbar{
    position: fixed;
    bottom: 0;
  }
}
</style>