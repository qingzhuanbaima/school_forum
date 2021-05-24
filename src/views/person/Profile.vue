<template>

	<div class="profile_container">
		<div style="display: flex;">
			<div class="portrait" >
				<router-link to="/profilechange">
					<img src="../../assets/img/club_img/chigua.png" alt="">
				</router-link>

			</div>
			<div class="details">
				<div class="name"><slot name="name"></slot></div>
				<div class="mail">邮箱:<slot name="mail"></slot></div>
				<div class="birthday">生日:<slot name="birthday"></slot></div>
				<div class="connect">联系:<slot name="connect"></slot></div>
			</div>
		</div>
		<div style="text-indent: 15px;">个人介绍:<slot name="introduction"></slot></div>
	</div>


</template>

<script>
	export default {
		name: "Profile",
		data(){
			return{
				
			}
		},
		props:{
			name:String
		}

	}
</script>

<style>
	.profile_container {
		width: 100%;
		height: 200px;
		background-color: #EEEEEE;
		font-size: 14px;
		display: flex;
		flex-direction: column;
	}

	.portrait {
		height: auto;
	}

	.profile_container img {
		width: 119px;
		height: 119px;
		margin: 10px;
	}

	.details {
		margin-top: 30px;
	}

	.profile_container .name {
		font-size: 24px;
	}
</style>
