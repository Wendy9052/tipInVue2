<template>
  <div class="find_page">
    <van-cell class="cell_item" is-link @click="goPage('kaka')">
      <template #title>
        <div class="left_part">
          <div><van-icon size="20" name="flower-o" /></div>
          <div class="left_part_text">咖咖圈</div>
        </div>
      </template>
    </van-cell>
    <van-cell class="cell_item" is-link >
      <template #title>
        <div class="left_part">
          <div><van-icon size="20" name="scan" /></div>
          <div class="left_part_text">扫一扫</div>
        </div>
      </template>
    </van-cell>
    <van-cell class="cell_item" is-link >
      <template #title>
        <div class="left_part">
          <div><van-icon size="20" name="video-o" /></div>
          <div class="left_part_text">直播</div>
        </div>
      </template>
    </van-cell>
    <van-cell class="cell_item" is-link >
      <template #title>
        <div class="left_part">
          <div><van-icon size="20" name="setting-o" /></div>
          <div class="left_part_text">设置</div>
        </div>
      </template>
    </van-cell>
    <tabbar class="tabbar" :currentTab="'find'"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
export default {
  components: {
    Tabbar,
  },
  methods: {
    goPage(value) {
      let path = "/find/" + value
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.find_page{
  height: 100vh;
  background: rgba(204,204,204,0.3);
  .cell_item{
    // background: rgba(204,204,204,0.3);
    margin-bottom: 10px;
  }
  .left_part{
    display: flex;
    .left_part_text{
      margin-left: 10px;
    }
  }
}
</style>