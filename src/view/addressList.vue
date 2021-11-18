<template>
  <div>
    通讯录
    <tabbar class="tabbar" :currentTab="'address'"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar.vue'
export default {
  components: {
    Tabbar,
  },

}
</script>

<style>

</style>