<template>
	<div>
		<div class="head">
			<div class="headLeft" @click="backOne">
				<img src="../../assets/img/backOne.svg" alt="">
				<span>返回</span>
			</div>
			<div class="headCenter">{{article.club}}</div>
			<div class="headRight"></div>
		</div>
		<div class="Article">
			<div class="articleTitle">{{article.title}}</div>
			<div class="user">{{article.username}}
				<div>{{article.article_time}}</div>
			</div>
			<div class="articleContent">
				<!-- <textarea name="" id="" readonly="readonly"
					style="border: none;width: 98%;height:200px;resize: none;">{{article.content}}</textarea> -->
				<pre style="border: none;width: 98%;height:auto;resize: none;">{{article.content}}</pre>
				<!-- <div v-for="item in imgsrc">
					<img :src="item" alt="" style="width: 80%;margin: 0 auto;">
				</div> -->
				<div style="display: flex;flex-wrap: wrap;margin: 0 auto;">
					<span class="img" v-for="item in imgsrc" >
						<viewer :images="imgsrc">
							<img :src="item" alt="" >
						</viewer>
					</span>
				</div>
			</div>


		</div>


		<!-- 评论 -->
		<div class="cmtBar">
			<div style="padding-left: 10px;">评论</div>
			<div style="display: flex;margin-left: 60%;">
				<div style="display: flex;margin-left:10px;">
					<div><img src="../../assets/img/star/comment.svg" alt=""></div>
					<div style="line-height: 30px;">
						<slot name="comment">{{article.comment}}</slot>
					</div>
				</div>
				<div style="display: flex;margin-left:10px;">
					<div v-if="!star_active" @click="starClick">
						<img src="../../assets/img/star/star.svg" />
					</div>
					<div v-else @click="starClick">
						<img src="../../assets/img/star/star_active.svg" />
					</div>
					<div style="line-height: 30px;">
						<slot name="star">{{article.star}}</slot>
					</div>
				</div>
			</div>
		</div>

		<div v-for="item in comments">
			<comment>
				<div slot="username">{{item.username}}</div>
				<div slot="time">{{item.replytime}}</div>
				<div slot="comment">{{item.comment}}</div>
			</comment>
		</div>
		<div style="height: 40px;"></div>

		<!-- 评论输入框 -->
		<div class="addcmt">
			<nut-textinput v-model="mycmt.comment" placeholder="请输入内容" @focus="onFocus" :clearBtn="true"
				:disabled="false" style="width: 85%;" />
			<button style="width: 15%;height: auto;" @click="addComment">评论</button>
		</div>
	</div>
</template>

<script>
	import Comment from './comment.vue'

	export default {
		name: "Article",
		components: {
			Comment
		},
		data() {
			return {
				article: Object,
				comments: null,
				mycmt: {
					cid: null,
					username: this.$store.state.user.username,
					aid: this.$route.query.id,
					comment: null,
					replytime: null
				},
				star_active: false,
				imgids: null,
				imgsrc: []
			}
		},
		methods: {
			backOne() {
				this.$router.go(-1)
			},

			onFocus() {
				if (this.$store.state.user.username === null) {
					this.$router.push({
						path: '/login',
					})
				}
			},
			// 发出评论
			addComment() {
				const _this = this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.mycmt.replytime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;


				_this.$axios.post(_this.GLOBAL.BASE_URL + '/comments/addcomment', this.mycmt)
					.then(function(response) {
						if (response.data == 'success') {
							_this.mycmt.comment = null
							location.reload()
						} else {

						}
						// console.log(response)
					})
			},

			//点赞
			starClick() {
				if (this.star_active == false) {
					this.star_active = true,
						this.$axios({
							method: 'post',
							url: this.GLOBAL.BASE_URL + '/article/star',
							params: {
								id: this.$route.query.id
							}
						})
					this.article.star++
				}
			}
		},
		beforeCreate() {
			const _this = this
			//取得图片
			_this.$axios({
				method: 'get',
				url: _this.GLOBAL.BASE_URL + '/article/id',
				params: {
					id: _this.$route.query.id
				}
			}).then(function(resp) {
				_this.article = resp.data;
				if (resp.data.imgpathlist != null) {
					_this.imgids = resp.data.imgpathlist.split(",")					
					for (let imgid of _this.imgids) {
						_this.$axios({
								method: 'get',
								url: _this.GLOBAL.BASE_URL + '/article/getimg',
								params: {
									imgid: imgid
								}
							})
							.then(function(resp) {							
								_this.imgsrc.push('data:image/jpg;base64,' + resp.data)
							})
					}
				}

			})

			// 取得评论
			_this.$axios({
				method: 'get',
				url: _this.GLOBAL.BASE_URL + '/comments/getcomment',
				params: {
					id: _this.$route.query.id
				}
			}).then(function(resp) {
				_this.comments = resp.data;
			})
		}
	}
</script>

<style scoped="scoped">
	.head {
		display: flex;
		width: 100%;
		height: 49px;
		line-height: 49px;
		font-size: 16px;
		border-bottom: 1px solid #dcdcdc;
		position: fixed;
		top: 0;
		background-color: #f7f7f7;
		margin: 0;
		padding: 0;
		color: #1989FA;
	}

	/* //文章 */
	.Article {
		border-bottom: 3px solid #dfdfdf;
		padding-top: 50px;
		font-size: 14px;
	}

	.headLeft {
		text-indent: 20px;
		flex: 1;
	}

	.headCenter {
		text-align: center;
		flex: 1;
	}

	.headRight {
		flex: 1;
	}

	.articleTitle {
		font-size: 16px;
		font-weight: 800;
		margin: 8px;
		font-family: "黑体";
	}

	.user {
		margin: 8px;
	}

	.articleContent {
		margin: 8px;
	}

	/* 评论 */
	.cmtBar {
		width: 100%;
		height: 29px;
		line-height: 29px;
		position: sticky;
		top: 50px;
		/* border-bottom: 1px solid #dcdcdc; */
		-webkit-box-shadow: 0 0 3px #06c;
		box-shadow: 0 0 3px #06c;
		background-color: #FFFFFF;
		display: flex;
	}

	.cmtBar img {
		width: 23px;
		margin: 3px;
	}


	/* 添加评论 */
	.addcmt {
		width: 100%;
		margin: 0 auto;
		position: fixed;
		display: flex;
		bottom: 0;
	}


	pre {
		white-space: pre-wrap;
		/* css-3 */
		white-space: -moz-pre-wrap;
		/* Mozilla, since 1999 */
		white-space: -pre-wrap;
		/* Opera 4-6 */
		white-space: -o-pre-wrap;
		/* Opera 7 */
		word-wrap: break-word;
		/* Internet Explorer 5.5+ */
		word-break: break-all;
		overflow: hidden;
	}
	
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
	}
</style>
