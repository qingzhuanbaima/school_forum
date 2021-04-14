<template>
	<div>
		<h2>游戏页面</h2>
		<mt-cell-swipe title="text" :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => this.$messagebox('delete')
		    }
		  ]"></mt-cell-swipe>
		  
		  
	</div>
</template>

<script>
	export default {
		name: "Game"
	}
</script>

<style>
</style>
