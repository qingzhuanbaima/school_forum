<template>
	<div id="app" class="wrapper">
		<router-view />
		<div v-if="this.$route.path!='/article' && this.$route.path!='/login'" >
			<main-tab-bar />
		</div>

	</div>
</template>

<script>
	import MainTabBar from '/src/components/common/tabbar/MainTabBar.vue'

	export default {
		name: 'app',
		components: {
			MainTabBar
		},
		created() {
			//在页面加载时读取sessionStorage里的状态信息
			if (sessionStorage.getItem("store")) {
				this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
			}

			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				sessionStorage.setItem("store", JSON.stringify(this.$store.state))
			})
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
