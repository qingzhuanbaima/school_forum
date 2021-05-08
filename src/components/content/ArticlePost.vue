<template>
	<div>
		<!-- 顶部 -->
		<mt-header title="发布帖子">
			<router-link to="/" slot="left">
				<mt-button>取消</mt-button>
			</router-link>
			<mt-button slot="right" @click="post">发布</mt-button>
		</mt-header>

		<div class="head">用户</div>
		<input class="user" placeholder="输入用户" v-model="article.username" readonly="readonly"></input>
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
					username: this.$store.state.user.username,
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
				const _this=this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.article.article_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;


				_this.$axios.post('http://localhost:8088/article/articlePost', this.article)
					.then(function(response) {
						if (response.data == 'success') {
							_this.consol.log("成功")
							_this.$router.go(-1)
						}
						// console.log(response)
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
