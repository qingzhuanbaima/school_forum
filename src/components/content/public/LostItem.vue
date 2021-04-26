<template>
	<div class="lost_item">
		<div class="lostId">
			<div style="width: 50%;">
				<span style="margin-left: 7px;">序号：</span>
				<slot name="id"></slot>
			</div>
			<div style="width: 50%;">
				<span style="margin-left: 7px;">日期：</span>
				<slot name="time"></slot>
			</div>
		</div>
		<div class="lostName">
			<span style="margin-left: 7px;">物品名称：</span>
			<slot name="name"></slot>
		</div>
		<div class="lostDescribe">
			<span style="margin-left: 7px;">物品描述：</span>
			<slot name="describe"></slot>
		</div>
		<div class="lostConnect">
			<span style="margin-left: 7px;">联系方式：</span>
			<slot name="connect"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LostItem"
	}
</script>

<style>
	.lost_item {
		width: 90%;
		height: auto;
		border: 1px solid #d1d1d1;
		border-radius: 5px;
		margin: 8px auto;
		line-height: 30px;
	}

	.lostId {
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #e1e1e1;
		display: flex;
	}

	.lostName {
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #e1e1e1;
	}

	.lostDescribe {
		width: 100%;
		height: auto;
		border-bottom: 1px solid #e1e1e1;
	}

	.lostConnect {
		width: 100%;
		height: 30px;
	}
</style>
