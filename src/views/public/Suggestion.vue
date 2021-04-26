<template>
	<div>
		<suggest-item>
			<span slot="id">laboon</span>
			<span slot="time">2021-04-18</span>
			<span slot="suggestion"></span>
		</suggest-item>
		<suggest-item v-for="item in result">
			<span slot="id">{{item.username}}</span>
			<span slot="time">{{item.suggest_time}}</span>
			<span slot="suggestion">{{item.suggestion}}</span>
		</suggest-item>
	</div>
	
</template>

<script>
	import SuggestItem from '../../components/content/public/SuggestItem.vue'
	
	export default{
		name:"Suggestion",
		data(){
			return{
				result: null,
			}
		},
		components:{
			SuggestItem
		},
		created() {
			const _this = this
			this.$axios.get('http://localhost:8088/suggestion/findAll').then(function(resp) {
				_this.result = resp.data;
				console.log(_this.result)
			})
		}
	}
</script>

<style>
</style>
