<template>
	<div class="club_item" >
		<div class="club_img" >
			<slot name="club_img"></slot>
		</div>
		<div class="club_name">
			<slot name="club_name"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"ClubItem",
		methods:{
			
		}
	}
</script>

<style>
	.club_item{
		width: 33%;
		text-align: center;
		float: left;
		margin-top: 14px;
	}
	.club_item img{
		width: 50px;
		height: 50px;
		border-radius: 5px;
	}
</style>
