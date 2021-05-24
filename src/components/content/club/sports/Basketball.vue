<template>
	<div>
		<page-head>
			
		</page-head>
		<div v-for="item in result" @click="toArticle(item.id)">
			<preview>
				<div slot="username">{{item.username}}</div>
				<div slot="title">{{item.title}}</div>
				<span slot="star" v-bind:starCount="item.star">{{item.star}}</span>
				<span slot="comment" v-bind:commentCount="item.comment">{{item.comment}}</span>
			</preview>
		</div>

		<div style="height: 50px;"></div>
	</div>
</template>

<script>
	import Preview from '../../Preview.vue'
	import pageHead from '../../../common/pageHead.vue'
	export default {
		name: "Basketball",
		data() {
			return {
				result: null,
			}
		},
		components: {
			Preview,
			pageHead
		},
		methods:{
			toArticle(id){
				this.$router.push({
					path: '/article',
					query: {
						id:id
					}
				})
			}
		},
		created() {
			const _this = this
			_this.$axios({
				method: 'get',
				url: this.GLOBAL.BASE_URL + '/article/club',
				params: {
					label: "篮球"
				}
			}).then(function(resp) {
				_this.result = resp.data;
				console.log(_this.result)
			})
		}
	}
</script>

<style>
</style>
