<template>
	<top-bar>
		<top-bar-item path="/home/sports">
			<div slot="item-text">运动</div>
		</top-bar-item>
		<top-bar-item path="/home/study">
			<div slot="item-text">学习</div>
		</top-bar-item>
		<top-bar-item path="/home/game">
			<div slot="item-text">游戏</div>
		</top-bar-item>
		<top-bar-item path="/home/movie">
			<div slot="item-text">影音</div>
		</top-bar-item>
		<top-bar-item path="/home/life">
			<div slot="item-text">生活</div>
		</top-bar-item>
		<top-bar-item path="/home/digital">
			<div slot="item-text">数码</div>
		</top-bar-item>
	</top-bar>
</template>

<script>
	import TopBar from './TopBar.vue'
	import TopBarItem from './TopBarItem.vue'

	export default {
		name: "MainTopBar",
		components: {
			TopBar,
			TopBarItem
		}
	}
</script>

<style>
	
</style>
