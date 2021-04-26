<template>
	<div>
		<notice-item>
			<div slot="title" style="font-weight: 700;text-align: center; width: 100%;" >公告标题</div>
			<span slot="content">公告正文</span>
		</notice-item>
	</div>
</template>

<script>
	import NoticeItem from '../../components/content/public/NoticeItem.vue'
	export default{
		name:"Notice",
		components:{
			NoticeItem
		}
	}
</script>

<style>
</style>
