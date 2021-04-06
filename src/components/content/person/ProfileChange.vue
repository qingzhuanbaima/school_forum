<template>
	<div>
		<mt-field label="用户名" placeholder="输入用户名" v-model="username"></mt-field>
		<mt-field label="邮箱" placeholder="输入邮箱" type="email" v-model="email"></mt-field>
		<mt-field label="密码" placeholder="输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="电话" placeholder="输入电话" type="tel" v-model="phone"></mt-field>
		<mt-field label="生日" placeholder="输入生日" type="date" v-model="birthday"></mt-field>
		<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
		<div style="text-align: center;">
			<mt-button type="primary" style="width: 80%;">提交</mt-button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"ProfileChange",
		data(){
			return{
				username:null,
				email:null,
				password:null,
				phone:null,
				birthday:null,
				introduction:null
			}
		}
	}
</script>

<style>
</style>
