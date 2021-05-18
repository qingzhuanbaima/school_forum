<template>
	<div>
		
		<div>
			<div class="addLost" @click="showAdd">
				<img src="../../assets/img/publish.png"
					style="width: 16px;height: 16px;margin: 7px;display: inline-block;" />
				<div style="display: inline-block;padding-bottom:20px;vertical-align: middle;">提交建议</div>
			</div>
		
			<div v-show="showForm"
				style="width: 90%;height: auto;border: 1px solid #26A2FF;border-radius: 5px;margin: 8px auto;line-height: 30px;">
				<div style="display: flex;width: 100%;height: auto;border-bottom: 1px solid #26A2FF;">
					<span style="margin-left: 7px;width: 85px;">我的建议：</span>
					<textarea name="" id="" cols="30" rows="10" style="border: none;" v-model="sugForm.suggestion"></textarea>
				</div>
				<div style="display: flex;width: 100%;height: 30px;">
					<button style="width: 100%;height: 100%;background-color:#26A2FF ;border: none;" @click="sugPost">提 交</button>
				</div>
			</div>
		</div>
		
		<suggest-item v-for="(item,index) in result" :key="index">
			<span slot="id">{{item.username}}</span>
			<span slot="time">{{item.suggest_time}}</span>
			<textarea  slot="suggestion" name="" id=""  style="border: none;resize: none;width: 80%;height: 100px;line-height: 30px;">{{item.suggestion}}</textarea>
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
				showForm:false,
				sugForm:{
					id:null,
					username:this.$store.state.user.username,
					suggestion:null,
					suggest_time:null
				}
			}
		},
		components:{
			SuggestItem
		},
		methods:{
			showAdd(){
				this.showForm=!this.showForm
			},
			sugPost(){
				const _this = this
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				_this.sugForm.suggest_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
				
				console.log(_this.sugForm)
				
				_this.$axios.post(this.GLOBAL.BASE_URL + '/suggestion/sugPost', this.sugForm)
					.then(function(response) {
						if (response.data == 'success') {
							location.reload()
						}
					})
			}
		},
		created() {
			const _this = this
			this.$axios.get(this.GLOBAL.BASE_URL + '/suggestion/findAll').then(function(resp) {
				_this.result = resp.data;
				console.log(_this.result)
			})
		}
	}
</script>

<style>
</style>
