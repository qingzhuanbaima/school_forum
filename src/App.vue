<template>
  <div id="app" class="wrapper">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from '/src/components/common/tabbar/MainTabBar.vue'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>