<template>
	<div>
		<div>
			<div class="addLost" @click="showAdd">
				<img src="../../assets/img/publish.png"
					style="width: 16px;height: 16px;margin: 7px;display: inline-block;" />
				<div style="display: inline-block;padding-bottom:20px;vertical-align: middle;">发布失物招领</div>
			</div>

			<div v-show="showForm"
				style="width: 90%;height: auto;border: 1px solid #26A2FF;border-radius: 5px;margin: 8px auto;line-height: 30px;">
				<div style="display: flex;width: 100%;height: 30px;border-bottom: 1px solid #26A2FF;">
					<span style="margin-left: 7px;width: 85px;">物品名称：</span>
					<input type="text" style="border: none;" v-model="lostForm.lostname">
				</div>
				<div style="display: flex;width: 100%;height: auto;border-bottom: 1px solid #26A2FF;">
					<span style="margin-left: 7px;width: 85px;">物品描述：</span>
					<input type="text" style="border: none;" v-model="lostForm.descri">
				</div>
				<div style="display: flex;width: 100%;height: auto;border-bottom: 1px solid #26A2FF;">
					<span style="margin-left: 7px;width: 85px;">联系方式：</span>
					<input type="text" style="border: none;" v-model="lostForm.connect">
				</div>
				<div style="display: flex;width: 100%;height: 30px;">
					<button style="width: 100%;height: 100%;background-color:#26A2FF ;border: none;" @click="lostPost">发 布</button>
				</div>
			</div>
		</div>

		<lost-item v-for="(item,index) in allLost" :key="index">
			<span slot="id">{{item.id}}</span>
			<span slot="time">{{item.lost_time}}</span>
			<span slot="name">{{item.lostname}}</span>
			<span slot="describe">{{item.descri}}</span>
			<span slot="connect">{{item.connect}}</span>
		</lost-item>
	</div>
</template>

<script>
	import LostItem from '../../components/content/public/LostItem.vue'

	export default {
		name: "Lost",
		components: {
			LostItem
		},
		data(){
			return{
				showForm:false,
				lostForm:{
					id:null,
					lostname:null,
					lost_time:null,
					descri:null,
					connect:null
				},
				allLost:null
			}
		},
		methods:{
			showAdd(){
				this.showForm=!this.showForm
			},
			lostPost(){
				const _this = this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.lostForm.lost_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
				
				console.log(_this.lostForm)
				
				_this.$axios.post(this.GLOBAL.BASE_URL + '/lost/lostPost', this.lostForm)
					.then(function(response) {
						if (response.data == 'success') {
							location.reload()
						}
					})
			}
		},
		created(){
			const _this = this
			_this.$axios({
				method: 'get',
				url: this.GLOBAL.BASE_URL + '/lost/findAll',
			}).then(function(resp) {
				_this.allLost = resp.data;
				console.log(_this.allLost)
			})
		}
	}
</script>

<style>
	.addLost {
		width: 70%;
		height: 30px;
		border: 1px solid #26A2FF;
		margin: 0 auto;
		text-align: center;
		/* border-radius: 15px; */
	}
</style>
