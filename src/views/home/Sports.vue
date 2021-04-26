<template>
	<div>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>
		<h2>Sports页面</h2>

		<preview v-for="item in result">
			<div slot="username">{{item.username}}</div>
			<div slot="title">{{item.title}}</div>
			<span slot="star" v-bind:starCount="item.star">{{item.star}}</span>
			<span slot="comment" v-bind:commentCount="item.comment">{{item.comment}}</span>
		</preview>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
	import Preview from '../../components/content/Preview.vue'
	export default {
		name: "Sports",
		data() {
			return {
				result: null,
			}
		},
		components: {
			Preview
		},
		created() {
			const _this = this
			this.$axios.get('http://localhost:8088/article/findAll').then(function(resp) {
				_this.result = resp.data;
				console.log(_this.result)
			})
		}
	}
</script>

<style>
</style>
