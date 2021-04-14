<template>
	<div>
		<!-- 顶部 -->
		<mt-header title="发布帖子">
			<router-link to="/" slot="left">
				<mt-button>取消</mt-button>
			</router-link>
			<mt-button slot="right" @click="post">发布</mt-button>
		</mt-header>

		<!-- 发帖面板 -->
		<!-- 	<nut-textinput v-model="val" label="用户：" placeholder="请输入内容" :clearBtn="true" :disabled="false" />
		<nut-textbox :txt-areaH="10"> 输入标题</nut-textbox>
		<nut-textbox :txt-areaH="10"> </nut-textbox> -->
		<div class="head">用户</div>
		<input class="user" placeholder="输入用户" v-model="article.username"></input>
		<div class="head">标题</div>
		<textarea class="title" maxlength="50" placeholder="输入标题" rows="2" v-model="article.title"></textarea>
		<div class="head">内容</div>
		<textarea class="content" maxlength="9999" placeholder="输入正文" v-model="article.content"></textarea>

	</div>

</template>

<script>
	export default {
		name: "ArticlePost",
		data() {
			return {
				article: {
					username: this.$route.query.name,
					title: null,
					content: null,
					article_time: null
				}
			}
		},
		methods: {
			close() {

			},
			edit() {

			},
			post() {
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				this.article.article_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;


				this.$axios.post('http://localhost:8088/article/articlePost', this.article)
					.then(function(response) {
							// if (response.data == 'success') {
							// 	alert("添加成功")
							// };
							console.log(response)
						})
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
