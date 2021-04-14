<template>
	<div>
		<profile>
			<span slot="name">{{name}}</span>
			<span slot="faculty">{{name}}</span>
			<span slot="birthday">{{name}}</span>
			<span slot="connect">{{name}}</span>
			<span slot="introduction">{{name}}</span>
		</profile>
		<nut-tab @tab-switch="tabSwitch" style="margin-bottom: 50px;">
		  <nut-tab-panel tab-title="发帖">
			  <div>发帖</div>
			  <div>发帖</div>
			  <div>发帖</div>
			  <div>发帖</div>
			  
		  </nut-tab-panel>
		  <nut-tab-panel tab-title="回复">回复的帖子</nut-tab-panel>
		  <nut-tab-panel tab-title="点赞">点赞的帖子</nut-tab-panel>
		</nut-tab>
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
	import Profile from './Profile.vue'
	import ProfileChange from '../../components/content/person/ProfileChange.vue'

	export default {
		name: "Person",
		data(){
			return{
				name:'Lab'
			}
		},
		methods:{
			tabSwitch(){
				
			}
		},
		components: {
			Profile,
		}
	}
</script>

<style>
	.nut-tab .nut-tab-item{
		height: 100%;
	}
</style>
