<template>
  <tab-bar>
    <tab-bar-item path="/home/sports">
      <img slot="item-icon" src="../../../assets/img/tabbar_icon/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar_icon/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/club">
      <img slot="item-icon" src="../../../assets/img/tabbar_icon/club.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar_icon/club_active.svg" alt="">
      <div slot="item-text">板块</div>
    </tab-bar-item>
    <tab-bar-item path="/public">
      <img slot="item-icon" src="../../../assets/img/tabbar_icon/public.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar_icon/public_active.svg" alt="">
      <div slot="item-text">站务</div>
    </tab-bar-item>
    <tab-bar-item path="/person">
      <img slot="item-icon" src="../../../assets/img/tabbar_icon/person.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar_icon/person_active.svg" alt="">
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
	import TabBar from './TabBar.vue'
	import TabBarItem from './TabBarItem.vue'
	
	export default {
	  name: "MaintabBar",
	  components: {
	    TabBar,
	    TabBarItem
	  }
	}
</script>

<style>
</style>
