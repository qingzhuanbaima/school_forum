<template>
	<div>
		<notice-item>
			<div slot="title" style="font-weight: 700;text-align: center; width: 100%;">公告标题</div>
			<span slot="content">公告正文</span>
		</notice-item>

		<!-- <div style="display: flex;flex-wrap: wrap;margin: 0 auto;">
			<span class="img" v-for="item in imgsrc" >
				<img :src="item" alt="" >
			</span>
		</div> -->
		
		<div style="display: flex;flex-wrap: wrap;margin: 0 auto;">
			<span class="img" v-for="item in imgsrc" >
				<viewer >
					<img :src="item" alt="" >
				</viewer>
			</span>
		</div>
		
			
		
	</div>
</template>
<style>
	.img{
		width: 33%;
		height: 0;
		padding-bottom: 31%;
		position: relative;
	}
	.img img{
		width: 100%;
		height: 100%;
		position: absolute;
		margin: 2px;
		z-index: 99;
	}
</style>
<script>
	import NoticeItem from '../../components/content/public/NoticeItem.vue'
	export default {
		name: "Notice",
		components: {
			NoticeItem
		},
		data() {
			return {
				imgids: null,
				imgsrc: []
			}
		},
		methods: {
			getimg() {

			}
		},
		computed: {

		},
		beforeCreate() {
			const _this = this
			_this.$axios({
				method: 'get',
				url: _this.GLOBAL.BASE_URL + '/article/id',
				params: {
					id: 41
				}
			}).then(function(resp) {
				_this.imgids = resp.data.imgpathlist.split(",")
				console.log(_this.imgids)
				for (let imgid of _this.imgids) {
					console.log(imgid)
					_this.$axios({
							method: 'get',
							url: _this.GLOBAL.BASE_URL + '/article/getimg',
							params: {
								imgid: imgid
							}
						})
						.then(function(resp) {
							console.log(resp)
							_this.imgsrc.push('data:image/jpg;base64,' + resp.data)
						}).then(function() {
							console.log(111)
							console.log(_this.imgsrc)
						})
				}
			})

		}
	}
</script>
