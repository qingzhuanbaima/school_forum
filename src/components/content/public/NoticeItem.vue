<template>
	<div class="notice">
		<div class="noticeTitle">
			<slot name="title"></slot>
		</div>
		<div class="noticeContent">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"NoticeItem"
	}
</script>

<style>
	.notice{
		width: 90%;
		height: auto;
		border: 1px solid #d1d1d1;
		border-radius: 5px;
		margin: 5px auto;
		line-height: 30px;
	}
	.noticeTitle{
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #e1e1e1;
		display: flex;
	}
	.noticeContent{
		width: 100%;
		height: auto;
	}
</style>
