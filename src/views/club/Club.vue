<template>

	<div class="club">
		<!-- 轮播图 -->
		<div class="swip" style="z-index: 1;">
			<nut-swiper direction="horizontal" :swiperData="dataItem" :canDragging="false" :paginationVisible="true"
				:paginationClickable="true" :autoPlay="3000">
				<div v-for="(item,index) in dataItem" :key="index" class="nut-swiper-slide">
					<img :src="item.imgURL" alt="" style="width: 100%;height: 100%;">
				</div>
			</nut-swiper>
		</div>

		<nut-tab @tab-switch="tabSwitch" :is-scroll="true" position-nav="left" :def-index="0"
			:wrapper-height="screenHeight-270">
			<nut-tab-panel tab-title="运动">
				<router-link to="/basketball">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/lanqiu.png" alt="">
						<div slot="club_name">篮球</div>
					</club-item>
				</router-link>

				<router-link to="/pingpong">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/pingpangqiu.png" alt="">
						<div slot="club_name">乒乓</div>
					</club-item>
				</router-link>

				<router-link to="/tennis">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/wangqiu.png" alt="">
						<div slot="club_name">网球</div>
					</club-item>
				</router-link>

				<router-link to="/badminton">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/yumaoqiu.png" alt="">
						<div slot="club_name">羽毛球</div>
					</club-item>
				</router-link>

				<router-link to="/run">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/ziyuan.png" alt="">
						<div slot="club_name">跑步</div>
					</club-item>
				</router-link>
				<router-link to="/football">
					<club-item>
						<img slot="club_img" src="../../assets/img/club_img/xiaoyuan-.png" alt="">
						<div slot="club_name">足球</div>
					</club-item>
				</router-link>
			</nut-tab-panel>
			<nut-tab-panel tab-title="学习">
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/kaoyan.png" alt="">
					<div slot="club_name">考研</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/shuxue-.png" alt="">
					<div slot="club_name">高数</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/wuli.png" alt="">
					<div slot="club_name">大学物理</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/C++.jpeg" alt="">
					<div slot="club_name">计算机</div>
				</club-item>
			</nut-tab-panel>
			<nut-tab-panel tab-title="影音">
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/movie.png" alt="">
					<div slot="club_name">电影</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/dianshiju.png" alt="">
					<div slot="club_name">追剧</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/music.png" alt="">
					<div slot="club_name">音乐</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/gaoda.png" alt="">
					<div slot="club_name">动漫</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/chigua.png" alt="">
					<div slot="club_name">吃瓜</div>
				</club-item>
			</nut-tab-panel>
			<nut-tab-panel tab-title="游戏">
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/lol.png" alt="">
					<div slot="club_name">英雄联盟</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/csgo.png" alt="">
					<div slot="club_name">CS:GO</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/wzry.png" alt="">
					<div slot="club_name">王者荣耀</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/pubg.png" alt="">
					<div slot="club_name">绝地求生</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/pubg_mobile.png" alt="">
					<div slot="club_name">和平精英</div>
				</club-item>
			</nut-tab-panel>
			<nut-tab-panel tab-title="数码">
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/shouji.png" alt="">
					<div slot="club_name">手机</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/diannao.png" alt="">
					<div slot="club_name">电脑</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/xiangji.png" alt="">
					<div slot="club_name">相机</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/shumapeijian.png" alt="">
					<div slot="club_name">其他数码</div>
				</club-item>
			</nut-tab-panel>
			<nut-tab-panel tab-title="生活">
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/shaizhao.png" alt="">
					<div slot="club_name">晒照</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/meishi.png" alt="">
					<div slot="club_name">美食</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/lvyou.png" alt="">
					<div slot="club_name">旅游</div>
				</club-item>
				<club-item>
					<img slot="club_img" src="../../assets/img/club_img/ershou.png" alt="">
					<div slot="club_name">二手闲置</div>
				</club-item>
			</nut-tab-panel>
		</nut-tab>
	</div>
</template>

<script>
	import ClubItem from '../../components/content/club/ClubItem.vue'
	import MainTopBar from '../../components/common/topbar/MainTopBar.vue'
	export default {
		name: 'Club',
		data() {
			return {
				value: 'search',
				val: null,
				screenHeight: document.documentElement.clientHeight,
				dataItem: [{
						imgURL: 'https://tse1-mm.cn.bing.net/th/id/OIP.wfBnTm3bzerie3AzfD_3ngHaEK?w=287&h=180&c=7&o=5&pid=1.7',
					},
					{
						imgURL: 'https://th.bing.com/th/id/R0ebb84b0fc2a3137700fde8da9c378bd?rik=cMuj3QgPZL%2fbmA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20130708%2f20130708163732-349105602.jpg&ehk=gqcyye3KcKbwhqSKRfr33z74UyA%2f2xrPPXiwMch4ZTY%3d&risl=&pid=ImgRaw',
					},
					{
						imgURL: 'https://tse1-mm.cn.bing.net/th/id/OIP.-naQYLAfMrYpP478RpPM_QHaEK?w=293&h=180&c=7&o=5&pid=1.7',
					},
					{
						imgURL: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1895710976,3631951770&fm=26&gp=0.jpg',
					}
				]
			}
		},
		mounted() {
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
			publish() {
				this.$router.push({
					path: '/articlePost',
				})
			}

		},

		components: {
			MainTopBar,
			ClubItem
		}
	}
</script>

<style>
	.left_tab {
		height: 100%;
	}
</style>
