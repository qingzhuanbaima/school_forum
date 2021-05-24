<template>
	<div class="suggest">
		<div class="suggestUser">
			<div style="width: 50%;">
				<span style="margin-left: 10px;">用户：</span>
				<slot name="id"></slot>
			</div>
			<div style="width: 50%;">
				<span >日期：</span>
				<slot name="time"></slot>
			</div>
		</div>
		<div class="suggestion">
			<div style="margin-left: 10px;width: 60px;">留言：</div>
			<slot name="suggestion"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"SuggestItem"
	}
</script>

<style>
	.suggest{
		width: 90%;
		height: auto;
		border: 1px solid #d1d1d1;
		border-radius: 5px;
		margin: 5px auto;
		line-height: 30px;
	}
	.suggestUser{
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #e1e1e1;
		display: flex;
	}
	.suggestion{
		width: 100%;
		height: auto;
		display: flex;
	}
</style>
