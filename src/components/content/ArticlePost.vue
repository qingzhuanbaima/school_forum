<template>
	<div style="margin-bottom: 50px;">
		<!-- 顶部 -->
		<div style="position: sticky;top: 0;">
			<mt-header title="发布帖子">
				<router-link to="/" slot="left">
					<mt-button>取消</mt-button>
				</router-link>
				<mt-button slot="right" @click="post">发布</mt-button>
			</mt-header>
		</div>


		<div class="head">用户</div>
		<input class="user" placeholder="请登录" style="border: none;text-indent: 20px;" v-model="article.username"
			readonly="readonly"></input>
		<div class="head">标题</div>
		<textarea class="title" maxlength="50"
			style="resize: none;border: 1px solid #1989FA;border-radius: 10px;margin: 0 auto;" placeholder="输入标题"
			rows="2" v-model="article.title"></textarea>
		<div class="head">内容</div>
		<textarea class="content" maxlength="9999" placeholder="输入正文"
			style="height: 300px;resize: none;border: 1px solid #1989FA;border-radius: 10px;margin: 0 auto;"
			v-model="article.content"></textarea>

		<!-- <select name="" v-model="article.label" @change="labelChange">
			<option  v-for="(item,index) in labelList" >{{item.label}}</option>
		</select> -->

		<nut-cell :showIcon="false" @click.native="show= true">
			<span slot="title">选择社区</span>
			<span slot="desc">{{article.label}}--{{article.club}}</span>
		</nut-cell>
		<nut-tabselect :tabList="tabList" :show="show" @close="show = false" @choose="choose" :multiple="false"
			:isDefaultSelected="true"></nut-tabselect>


		<!-- <nut-imagepicker @imgMsg="imgMsg" :max="9" :imgList.sync="imgList">
		</nut-imagepicker> -->
		<img-picker v-on:imglist="imgpick"></img-picker>


	</div>

</template>

<script>
	import imgPicker from '../common/imgPicker.vue'
	export default {
		name: "ArticlePost",
		components: {
			imgPicker
		},
		data() {
			return {
				article: {
					username: this.$store.state.user.username,
					title: null,
					content: null,
					label: '运动',
					club: '篮球',
					article_time: null,
					imgpathlist: []
				},

				imgList: [],

				mainTitle: "社区",
				tabList: [{
					tabTitle: "社区",
					children: [
						// 一级tab内容
						{
							tabTitle: "运动", // 二级tab标题
							content: ['篮球', '足球', '乒乓', '羽毛球', '网球', '跑步'],
						},
						{
							tabTitle: "学习",
							content: ['考研', '高数', '物理', '计算机'],
						},
						{
							tabTitle: "游戏",
							content: ['英雄联盟', 'CS:GO', '王者荣耀', '绝地求生', '和平精英'],
						},
						{
							tabTitle: "影音",
							content: ['电影', '追剧', '音乐', '吃瓜', '动漫'],
						},
						{
							tabTitle: "生活",
							content: ['晒照', '美食', '旅游', '二手闲置'],
						},
						{
							tabTitle: "数码",
							content: ['手机', '电脑', '相机', '其他数码'],
						}
					],
				}, ],
				show: false,
			}
		},
		methods: {
			close() {

			},
			edit() {

			},
			post() {
				const _this = this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.article.article_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
				_this.article.imgpathlist = _this.article.imgpathlist.toString()

				console.log(this.imgList)
				// _this.$axios.post(_this.GLOBAL.BASE_URL + '/article/articlePost', this.article)
				// 	.then(function(response) {
				// 		if (response.data == 'success') {
				// 			console.log(JSON.stringify(_this.imgList))
				// 			_this.$axios.post(_this.GLOBAL.BASE_URL + '/article/imgsave',_this.imgList )
				// 				.then(function(response) {
				// 					if (response.data == 'success') {

				// 					}
				// 				})
				// 		}
				// 	})

				_this.$axios.post(_this.GLOBAL.BASE_URL + '/article/articlePost', this.article)
					.then(function(response) {
						_this.$axios.post(_this.GLOBAL.BASE_URL + '/article/imgsave', _this.imgList)
					})
					.then(

					)

				// _this.$axios({
				// 	method: 'Post',
				// 	url: 'http://localhost:8088/article/articlePost',
				// 	params: {
				// 		article: this.article,
				// 		// imgList: this.imgList[this.imgList.length-1].id
				// 	}
				// }).then(function(response) {
				// 	console.log(response)
				// 	if (response.data == 'success') {
				// 		_this.$router.go(-1)
				// 	}
				// })
			},
			labelChange() {

			},
			choose(title, item) {
				this.article.label = item[0].subTit
				this.article.club = item[0].content
			},
			imgpick(imglist) {
				this.imgList = imglist
				console.log(this.imgList)
				this.article.imgpathlist.push(this.imgList[this.imgList.length - 1].imgid)
				console.log(this.article.imgpathlist.toString())
			}
		}
	}
</script>

<style>
	input {
		display: block;
		width: 99%;
		height: 30px;
		font-size: 16px;
	}

	.head {
		margin-top: 3px;
		margin-left: 3px;

	}

	.title {
		width: 99%;
		font-size: 16px;
	}

	.content {
		width: 99%;
		height: 590px;
		font-size: 16px;
	}
</style>
