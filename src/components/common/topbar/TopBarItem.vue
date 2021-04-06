<template>
	<!--所有的item都展示同一个图片, 同一个文字-->
	<div class="top-bar-item" @click="itemClick" :style="activeStyle">
		<!-- <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div> -->
		<!-- <div :style="activeStyle"><slot name="item-text"></slot></div> -->
		<slot name="item-text"></slot>
	</div>
</template>

<script>
	export default {
		name: "TopBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#1296DB'
			}
		},
		data() {
			return {
				// isActive: true
			}
		},
		computed: {
			isActive() {
				// /home -> item1(/home) = true
				// /home -> item1(/category) = false
				// /home -> item1(/cart) = true
				// /home -> item1(/profile) = true
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {
					color: this.activeColor
				} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.top-bar-item {
		flex: 1;
		text-align: center;
		height: 36px;
		line-height: 36pxpx;
		font-size: 14px;
		
	}
</style>
