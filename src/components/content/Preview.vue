<template>
	<div class="preview">
		<div class="username">
			<slot name="username"></slot>
		</div>
		<div class="article_title">
			<slot name="title"></slot>
		</div>
		<div class="count">
			<div class="star" style="display: flex;">
				<div v-if="!star_active" @click="starClick">
					<img src="../../assets/img/star/star.svg" />
				</div>
				<div v-else @click="starClick">
					<img src="../../assets/img/star/star_active.svg" />
				</div>
				<div class="star_count" style="padding-top:3px;">
					<slot name="star"></slot>
				</div>
			</div>
			<div class="comment" style="padding-left: 30px;display: flex;">
				<div><img src="../../assets/img/star/comment.svg" alt=""></div>
				<div style="padding-top: 3px;padding-left: 2px;">
					<slot name="comment"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Preview",
		data() {
			return {
				star_active: false,
			}
		},
		methods: {
			starClick() {
				this.star_active = !this.star_active;
				if (this.star_active == true) {
					this.star_count++
				} else {
					this.star_count--
				}
			}

		}
	}
</script>

<style>
	.preview {
		height: auto;
		width: 100%;
		/* background-color: #07C160; */
		border-bottom: 1px solid #6a6a73;
		display: flex;
		flex-direction: column;
	}

	.preview img {
		width: 18px;
	}

	.username {
		font-size: 12px;
		color: #999999;
		padding-left: 10px;
		padding-top: 10px;
	}

	.article_title {
		font-size: 14px;
		font-weight: 500;
		padding-left: 10px;
		padding-top: 10px;
		overflow: hidden;
	}

	.count {
		font-size: 12px;
		color: #999999;
		padding-left: 18px;
		padding-top: 10px;
		bottom: 0;
		display: flex;
	}
</style>
