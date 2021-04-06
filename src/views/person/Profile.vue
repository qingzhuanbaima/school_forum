<template>

	<div class="profile_container">
		<div style="display: flex;">
			<div class="portrait">
				<img src="../../assets/img/club_img/chigua.png" alt="">
			</div>
			<div class="details">
				<div class="name">Laboon</div>
				<div class="faculty">计算机与信息学院</div>
				<!-- <div class="introduce">个人介绍--------------长风破浪会有时</div> -->
			</div>
		</div>
		<div class="introduction">个人介绍</div>
	</div>


</template>

<script>
	export default {
		name: "Profile"
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
