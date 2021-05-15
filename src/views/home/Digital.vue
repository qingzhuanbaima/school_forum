<template>
	<div>
		<div v-for="item in result" @click="toArticle(item.id)">
			<preview :imgpathlist="item.imgpathlist">
				<div slot="username">{{item.username}}</div>
				<div slot="title">
					<div>{{item.title}}</div>
				</div>
				<span slot="star" v-bind:starCount="item.star">{{item.star}}</span>
				<span slot="comment" v-bind:commentCount="item.comment">{{item.comment}}</span>
			</preview>
		</div>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
	import Preview from '../../components/content/Preview.vue'
	export default {
		name: "Digital",
		data() {
			return {
				result: null,
			}
		},
		components: {
			Preview
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
				url: 'http://localhost:8088/article/label',
				params: {
					label: "数码"
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
