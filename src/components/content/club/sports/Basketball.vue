<template>
	<div>
		<page-head class="pageHead">
			<!-- <img src="../../../../assets/img/club_img/lanqiu.png" alt="" slot="pageimg">
			<h2 slot="pageName">篮球</h2>
			<div slot="pageIntro">篮球社区</div> -->
		</page-head>
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
				_this.result = resp.data.reverse();
				console.log(_this.result)
			})
		}
	}
</script>

<style scoped="scoped">
	.pageHead{
		background: url(../../../../assets/img/page_img/basketball.jpeg) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size:cover ;
		background-size: cover;
	}
</style>
