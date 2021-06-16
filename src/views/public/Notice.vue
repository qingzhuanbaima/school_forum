<template>
	<div>
		<notice-item>
			<div slot="title" style="font-weight: 700;text-align: center; width: 100%;">公告标题</div>
			<pre slot="content" style="border: none;width: 98%;height:auto;resize: none;"></pre>
		</notice-item>	
	</div>
	
</template>
<style>
	.img{
		width: 33%;
		height: 0;
		padding-bottom: 31%;
		position: relative;
	}
	.img img{
		width: 100%;
		height: 100%;
		position: absolute;
		margin: 2px;
		z-index: 99;
	}
</style>
<script>
	import NoticeItem from '../../components/content/public/NoticeItem.vue'
	export default {
		name: "Notice",
		components: {
			NoticeItem
		},
		data() {
			return {
				content:"as dbsajdbjdbjas jdn jasn jkdn ajk ndka ndkan dkd,jnk dakj nkajnd kadnkan kn dn d dn  "
			}
		},
		methods: {
			getimg() {

			}
		},
		computed: {

		},
		beforeCreate() {
			const _this = this
		}
	}
</script>
