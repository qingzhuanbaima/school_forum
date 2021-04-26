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
				<div>发帖</div>
				<div>发帖</div>
				<div>发帖</div>
				<div>发帖</div>

			</nut-tab-panel>
			<nut-tab-panel tab-title="回复">回复的帖子</nut-tab-panel>
			<nut-tab-panel tab-title="点赞">点赞的帖子</nut-tab-panel>
		</nut-tab>
		<mt-cell-swipe title="text" :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => this.$messagebox('delete')
		    }
		  ]"></mt-cell-swipe>
	</div>
</template>

<script>
	import Profile from './Profile.vue'
	import ProfileChange from '../../components/content/person/ProfileChange.vue'

	export default {
		name: "Person",
		data() {
			return {
				user: this.$store.state.user,
				article:null
			}
		},
		methods: {
			tabSwitch() {

			}
		},
		components: {
			Profile,
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


			_this.$axios({
				method:'get',
				url:'http://localhost:8088/user/getuser',
				params:{
					username:_this.$store.state.user.username
				}
			}).then(function(response){
				console.log(response.data)
				_this.$store.commit('userLoad',response.data)
			}),
			
			_this.$axios({
				method:'get',
				url:'http://localhost:8088/article/user',
				params:{
					username:_this.$store.state.user.username
				}
			}).then(function(response){
				
				// _this.$store.commit('userLoad',response.data)
				_this.article=response.data,
				console.log(_this.article)
			})
		}
	}
</script>

<style>
	.nut-tab .nut-tab-item {
		height: 100%;
	}
</style>
