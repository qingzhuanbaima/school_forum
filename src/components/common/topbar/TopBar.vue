<template>
	<div class="top_bar_container">
		<div class="top_bar">
			<slot></slot>
		</div>
	</div>

</template>

<script>
	export default {
		name: "TopBar"
	}
</script>

<style >
	.top_bar_container {
		position: fixed;
		top: 49px;
		width: 99.5%;
		height: 40px;
		line-height: 36px;
		border: 1px solid #26A2FF;
		overflow-x: scroll;
	}
	.top_bar_container::-webkit-scrollbar {
		display: none;
	}
	
	.top_bar {
		width: 100%;
		display: flex;
		scroll-behavior: smooth;
		box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
	}
	/* .top_bar {
		width: 150%;
		display: flex;
		background-color: #f6f6f6;

		position: fixed;
		left: 0;
		right: 0;
		top: 50px;

		box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
	} */
</style>
