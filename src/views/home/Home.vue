<template>
	<div class="home">
		<!-- 搜索 -->
		<div class="search" style="background-color: #FFFFFF;z-index: 10;display: flex;">
			<div class="logo">+++</div>
			<nut-searchbar v-model="val" placeText="" style="margin: 10px 0;height: 30px;"></nut-searchbar>

			<div class="publish" @click="publish">
				<img src="../../assets/img/publish.png"
					style="width: 16px;height: 16px;padding-top: 5px;margin-left: 4px;margin-right: 2px;" />
				<div style="padding: 8px 0;">发布</div>
			</div>
		</div>



		<!-- 轮播图 -->
		<div class="swip" style="z-index: 1;">
			<nut-swiper direction="horizontal" :swiperData="dataItem" :canDragging="false" :paginationVisible="true"
				:paginationClickable="true" :autoPlay="3000" >
				<div v-for="(item,index) in dataItem" :key="index" class="nut-swiper-slide">
					<img :src="item.imgURL" alt="" style="width: 100%;height: 100%;">
				</div>
			</nut-swiper>
		</div>


		<!-- 导航栏 -->
		<div style="position: sticky;top: 50px; background-color: #FFFFFF;">
			<main-top-bar></main-top-bar>
		</div>

		<!-- 帖子 -->
		<div class="view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import MainTopBar from '../../components/common/topbar/MainTopBar.vue'

	export default {
		name: 'Home',
		components: {

		},
		data() {
			return {
				screenHeight: document.documentElement.clientHeight,
				value: 'search',
				val:null,
				dataItem: [{
						imgURL:'https://tse1-mm.cn.bing.net/th/id/OIP.wfBnTm3bzerie3AzfD_3ngHaEK?w=287&h=180&c=7&o=5&pid=1.7',
					},
					{
						imgURL:'https://th.bing.com/th/id/R0ebb84b0fc2a3137700fde8da9c378bd?rik=cMuj3QgPZL%2fbmA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20130708%2f20130708163732-349105602.jpg&ehk=gqcyye3KcKbwhqSKRfr33z74UyA%2f2xrPPXiwMch4ZTY%3d&risl=&pid=ImgRaw',
					},
					{
						imgURL:'https://tse1-mm.cn.bing.net/th/id/OIP.-naQYLAfMrYpP478RpPM_QHaEK?w=293&h=180&c=7&o=5&pid=1.7',
					},
					{
						imgURL:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1895710976,3631951770&fm=26&gp=0.jpg',
					}
				]
			}
		},
		mounted() {
			//获取屏幕高度
			const that = this
			window.onresize = () => {
				return (() => {
					window.fullHeight = document.documentElement.clientHeight
					that.screenHeight = window.fullHeight
				})
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
			},
			publish(){
				this.$router.push({
					path: '/articlePost',
					query: {
						name: 'kobe',
					}
				})
			}
		},
		components: {
			MainTopBar
		},

	}
</script>


<style scoped>
	.home {
		display: flex;
		flex-direction: column;
	}

	.search {
		height: 49px;
		width: 100%;
		position: sticky;
		top: 0px;
		border-bottom: 1px solid #c8cbce;
	}

	.logo {
		width: 60px;
		height: 50px;
	}

	.publish {
		display: flex;
		width: 53px;
		height: 24px;
		border: 1px solid #656B79;
		border-radius: 15px;
		margin: 12px 0;
		margin-left: 5px;
	}

	.main_box {
		position: fixed;
		top: 50px;
		overflow: hidden;
		width: 100%;
		padding-top: 50px;
	}

	.main_container {
		height: auto;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}

	.view_container {
		width: 99.5%;
		height: auto;
		/* position: fixed; */
		top: 95px;
		overflow: hidden;
		/* overflow-y: scroll; */
	}

	.top_bar_container .top_bar {
		width: 100%;
	}

	.view {
		width: 99%;
		display: flex;
		flex-direction: column;
	}

	.stickyTop {
		top: 0;
		z-index: 10;
	}

	.tab {
		height: 30px;
		line-height: 30px;
		background-color: greenyellow;
	}
</style>
