<template>
	<div class="pageHead">
		<div id="pageImg">
			<slot name="pageimg"></slot>
		</div>
		<div id="pageInfo">
			<slot name="pageName"></slot>
			<slot name="pageIntro"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"pageHead"
	}
</script>

<style>
	.pageHead{
		width: 100%;
		height: 150px;
		display: flex;
		border-bottom: #232326 1px solid;
	}
	#pageImg{
		width: 100px;
		line-height: 150px;
	}
	#pageImg img{
		width: 80px;
		margin-top: 50px;
	}
</style>
