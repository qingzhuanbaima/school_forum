<template>
	<div style="width: 90%;height: auto;margin: 0 auto;border-bottom: 1px solid #eeeeee;">
		<div class="up">
			<slot name="username"></slot>
			<slot name="time"></slot>
		</div>
		<div class="com">
			<slot name="comment"></slot>
		</div>

		<div v-if="this.$route.path!='/person'">
			<div v-for="item in cmtchildren">
				<span>{{item.username}}:</span>
				<span>{{item.cmtChildren}}</span>
			</div>
			<div>
				<input type="text" placeholder="添加回复:" style="border: none;height: 30px;font-size: 12px;"
					@keydown.enter="enterClick" v-model="cmtchild.cmtChildren">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Comment",
		data() {
			return {
				cmtchildren: null,
				cmtchild: {
					ccId: null,
					cmtChildren: null,
					cmtId: this.$props.cid,
					replyTime: null,
					username: this.$store.state.user.username,
				}
			}
		},
		props: {
			cid: {
				type: Number,
				default: null
			}
		},
		methods: {
			enterClick() {
				const _this = this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.cmtchild.replyTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;

				console.log(_this.cmtchild)
				_this.$axios.post(_this.GLOBAL.BASE_URL + '/cmtchild/addcmtchild', this.cmtchild)
					.then(function(response) {
						if (response.data == 'success') {
							location.reload()
						}
					})
			}
		},
		created() {
			const _this = this
			_this.$axios({
					method: 'get',
					url: _this.GLOBAL.BASE_URL + '/cmtchild/getcmtchild',
					params: {
						cid: _this.$props.cid
					}
				})
				.then(function(resp) {
					console.log(resp.data)
					_this.cmtchildren = resp.data
				})
		}
	}
</script>

<style scoped="scoped">
	.up {
		margin-top: 5px;
	}

	.com {
		margin-top: 3px;
		font-size: 14px;
		margin-bottom: 10px;
	}
</style>
