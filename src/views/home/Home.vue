<template>
	<div class="home">

		<mt-search class="search"  cancel-text="取消" placeholder="搜索">
		</mt-search>

		<main-top-bar></main-top-bar>


		<!-- <div class="top_bar_container">
			<div class="top_bar">
				<div class="top_bar_item" index="/sports" :class="top_bar_active()">运动</div>
				<div class="top_bar_item" index="/study" @click="topbar_click(index)">学习</div>
				<div class="top_bar_item">影音</div>
				<div class="top_bar_item">游戏</div>
				<div class="top_bar_item">动漫</div>
				<div class="top_bar_item">数码</div>
				<div class="top_bar_item">其他</div>
			</div>
		</div> -->


		<div class="view_container">
			<div class="view">
				<router-view></router-view>
			</div>
		</div>


	</div>
</template>

<script>
	import MainTopBar from '../../components/common/topbar/MainTopBar.vue'
	export default {
		name: 'Home',
		data() {
			return {
				value: 'search'
			}
		},
		methods: {
			tabSwitch() {
				// alert(this.index)
			},
			top_bar_active() {
				return {
					active: true
				}
			},
			topbar_click(index) {
				this.$router.replace(index)
			}
		},
		components: {
			MainTopBar
		},

	}
</script>


<style scoped>
	.home {
		/* border: 10px solid #ABABAB; */
	}

	.view_container {
		width: 99.5%;
		height: 666px;
		position: fixed;
		top: 95px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.top_bar_container .top_bar {
	    width: 150%;
	}

	.view {
		width: 99%;
		display: flex;
		flex-direction: column;
	}

/* 	.top_bar_container {
		position: fixed;
		top: 49px;
		width: 100%;
		height: auto;
		background-color: #007AFF;
		overflow-x: scroll;
	}

	.top_bar_container::-webkit-scrollbar {
		display: none;
	}

	.top_bar {
		width: 150%;
		display: flex;
		scroll-behavior: smooth;
	}

	.top_bar_item {
		height: 36px;
		background-color: #ffffff;
		border-bottom: 1px solid #656B79;
		flex: 1;
		line-height: 36px;
		text-align: center;
		font-size: 14px;
	}
 */

	.mint-search.search {
		height: 49px;
		width: 100%;
		position: fixed;
		top: 0;
	}
</style>
