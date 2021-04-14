<template>
	<div class="public">
		<mt-header title="站务管理"></mt-header>
		<top-bar style="width: 99.5%;">
			<top-bar-item path="/public/notice" style="width: 99.5%;">
				<div slot="item-text">学校公告</div>
			</top-bar-item >
			<top-bar-item path="/public/lost">
				<div slot="item-text">失物招领</div>
			</top-bar-item>
			<top-bar-item path="/public/suggestion">
				<div slot="item-text">站务建议</div>
			</top-bar-item>
		</top-bar>
		
		<div class="view_container">
			<div class="view">
				<router-view></router-view>
			</div>
		</div>
	</div>

</template>

<script>
	import TopBar from '../../components/common/topbar/TopBar.vue'
	import TopBarItem from '../../components/common/topbar/TopBarItem.vue'

	export default {
		name: "Notice",
		components: {
			TopBar,
			TopBarItem
		}
	}
</script>

<style scoped>
	.navbar {
		width: 100%;
		height: 49px;
		border-bottom: 1px solid #A9ACB1;
		font-size: 16px;
		/* font-weight: 500; */
		text-align: center;
		line-height: 49px;
	}
	
	.top_bar_container .top_bar {
	    width: 100%;
	}
	
	.view_container {
		width: 99.5%;
		height: 666px;
		position: fixed;
		top: 95px;
		overflow: hidden;
		overflow-y: scroll;
	}
	
	.view {
		width: 99%;
		display: flex;
		flex-direction: column;
	}
</style>
