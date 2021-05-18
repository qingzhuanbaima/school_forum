<template>
	<div class="deleteCell">
		<div style="height: 100%; width: 118%;display: flex;">
			<div class="cellContent">
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "deleteCell",
	}
</script>

<style>
	.deleteCell {
		width: 100%;
		height: auto;
		overflow: hidden;
		overflow-x: scroll;
	}
	.deleteCell::-webkit-scrollbar{
		display: none;
	}

	.cellContent {
		width: 100%;
		height: 100%;
	}

	.cellButton {
		width: 18%;
		height: 81px;
		vertical-align: middle;
		text-align: center;
		line-height: 81px;
		background-color: #ef3a0d;
		font-size: 16px;
		color: #FFFFFF;
	}
</style>
