<template>
	<div>
		<mt-field label="用户名" placeholder="输入用户名" v-model="user.username" readonly:true></mt-field>
		<mt-field label="邮箱" placeholder="输入邮箱" type="email" v-model="user.mail"></mt-field>
		<mt-field label="密码" placeholder="输入密码" type="password" v-model="user.password"></mt-field>
		<mt-field label="电话" placeholder="输入电话" type="tel" v-model="user.tel"></mt-field>
		<mt-field label="生日" placeholder="输入生日" type="date" v-model="user.birthday"></mt-field>
		<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="user.introduction"></mt-field>
		<div style="text-align: center;">
			<mt-button type="primary" style="width: 80%;" @click="updateUser">提交</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProfileChange",
		data() {
			return {
				user: this.$store.state.user
			}
		},
		methods:{
			updateUser(){
				const _this=this
				console.log(_this.user)
				_this.$axios({
					method:'put',
					url:_this.GLOBAL.BASE_URL + '/user/updateUser',
					data:_this.user
				}).then(function(response){
					console.log(response)
				})
			}
		}
	}
</script>

<style>
</style>
