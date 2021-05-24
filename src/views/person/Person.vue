<template>
	<div>
		<profile>
			<span slot="name">{{user.username}}</span>
			<span slot="mail">{{user.mail}}</span>
			<span slot="birthday">{{user.birthday}}</span>
			<span slot="connect">{{user.tel}}</span>
			<span slot="introduction">{{user.introduction}}</span>
		</profile>
		<nut-tab @tab-switch="tabSwitch" style="margin-bottom: 50px;">
			<nut-tab-panel tab-title="发帖">
				<div v-for="item in article" @click="toArticle(item.id)">
					<!-- <delete-cell > -->
						<!-- <div slot="content"> -->
							<preview>
								<div slot="username">{{item.username}}</div>
								<div slot="title">{{item.title}}</div>
								<span slot="star" v-bind:starCount="item.star">{{item.star}}</span>
								<span slot="comment" v-bind:commentCount="item.comment">{{item.comment}}</span>
							</preview>
						<!-- </div> -->
					<!-- </delete-cell> -->
				</div>
			</nut-tab-panel>
			<nut-tab-panel tab-title="回复">
				<div v-for="item in comments" @click="toArticle(item.aid)">
					<!-- <delete-cell> -->
						<!-- <div slot="content"> -->
							<comment :cid="item.cid">
								<div slot="username">{{item.username}}</div>
								<div slot="time">{{item.replytime}}</div>
								<div slot="comment">{{item.comment}}</div>
							</comment>
						<!-- </div> -->
					<!-- </delete-cell> -->
				</div>
			</nut-tab-panel>
		</nut-tab>

	</div>
</template>

<script>
	import Profile from './Profile.vue'
	import ProfileChange from '../../components/content/person/ProfileChange.vue'
	import Preview from '../../components/content/Preview.vue'
	import deleteCell from '../../components/common/deleteCell.vue'
	import Comment from '/src/components/content/comment.vue'

	export default {
		name: "Person",
		data() {
			return {
				user: this.$store.state.user,
				article: null,
				comments: null
			}
		},
		methods: {
			tabSwitch() {

			},
			toArticle(id) {
				this.$router.push({
					path: '/article',
					query: {
						id: id
					}
				})
			}
		},
		components: {
			Profile,
			Preview,
			deleteCell,
			Comment
		},
		beforeCreate() {
			if (this.$store.state.user.username === null) {
				this.$router.push({
					path: '/login',
				})
			}
		},
		created() {
			const _this = this
			console.log(_this.$store.state.user.username)
			// axios.all([
			// 	axios({
			// 		method: 'get',
			// 		url: 'http://localhost:8088/user/getuser',
			// 		params: {
			// 			username: _this.$store.state.user.username
			// 		}
			// 	}),
			// 	axios({
			// 		method:'get',
			// 		url: 'http://localhost:8088/article/user',
			// 		params: {
			// 			username: _this.$store.state.user.username
			// 		}
			// 	})
			// ]).then(res => {
			// 	console.log(res)
			// })

			// 获取用户信息
			_this.$axios({
					method: 'get',
					url: this.GLOBAL.BASE_URL + '/user/getuser',
					params: {
						username: _this.$store.state.user.username
					}
				}).then(function(response) {
					console.log(response.data)
					_this.$store.commit('userLoad', response.data)
				}),

				// 获取用户帖子
				_this.$axios({
					method: 'get',
					url: this.GLOBAL.BASE_URL + '/article/user',
					params: {
						username: _this.$store.state.user.username
					}
				}).then(function(response) {
					_this.article = response.data.reverse(),
						console.log(_this.article)
				}),

				// 获取用户评论
				_this.$axios({
					method: 'get',
					url: this.GLOBAL.BASE_URL + '/comments/byuser',
					params: {
						username: _this.$store.state.user.username
					}
				}).then(function(response) {
					_this.comments = response.data.reverse(),
						console.log(_this.comments)
				})
		}
	}
</script>

<style>
	.nut-tab .nut-tab-item {
		height: 100%;
	}
</style>
