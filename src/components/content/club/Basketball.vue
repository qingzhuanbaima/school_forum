<template>
	<div>



		<div>
			<ul>
				<li v-for="(item, index) in 20" :key="index">{{ item }}</li>
			</ul>
			<!-- 
      这里需要给组件添加一个class，用于控制固定的位置，看css注释部分
     -->
			<!-- <sticky-slot class="stickyTop"> -->
				<div class="tab" style="position: sticky;top: 0px;">
					假装这是一个tab栏，当页面滚动的时候要固定在顶部
				</div>
			<!-- </sticky-slot> -->
			<ul>
				<li v-for="(item, index) in 80" :key="index">{{ item }}</li>
			</ul>
		</div>


		<div class="test">
			K
		</div>
	</div>

</template>

<script>
	import stickySlot from '../../common/stickySlot.vue'
	export default {
		name: "Basketball",
		components: {
			stickySlot
		},
		data() {
			return {
				headerData: [],
				footerData: [],
				dataItem: [{
						name: "第一頁"
					},
					{
						name: "第一頁"
					},
					{
						name: "第一頁"
					},
					{
						name: "第一頁"
					}
				]
			}
		},
		methods: {
			created() {
				// 使用假数据撑满屏幕
				for (let i = 0; i < 20; i++) {
					this.headerData.push('第' + i + '条数据')
				};
				for (let i = 20; i < 80; i++) {
					this.footerData.push('第' + i + '条数据')
				}
			}
		}
	}
</script>

<style>
	/* .test{
		width: 100px;
		height: 100px;
		background-color: #1989FA;
		border-radius: 80%;
	} */
	.stickyTop {
		top: 0;
		z-index: 10;
	}

	.tab {
		height: 30px;
		line-height: 30px;
		background-color: greenyellow;
	}
</style>
