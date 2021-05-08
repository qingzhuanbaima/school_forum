<template>
	<div style="width: 90%;height: 80px;margin: 0 auto;border-bottom: 1px solid #f1f1f1;">
		<div class="up">
			<slot name="username"></slot>
			<slot name="time"></slot>
		</div>
		<div class="com">
			<slot name="comment"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Comment"
	}
</script>

<style scoped="scoped">
	.up{
		margin-top: 5px;
	}
	.com{
		margin-top: 3px;
		font-size: 14px;
		margin-bottom: 3px;
	}
</style>
