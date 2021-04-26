<template>
		<div style="width: 100%;height: auto; overflow: hidden;" >
			<div class="logo1">这里是logo</div>
			<div class="loginAndregist" v-bind:class="getClass()">
				<div class="login">
					<div >
						<div style="margin-left: 18%;margin-top: 50px;">用户</div>
						<input class="textinput" type="text" placeholder="请输入账户" v-model="logInfo.username" @input="logEmptyFunction" >
						<div style="margin-left: 18%;margin-top: 3px;">
							<label v-show="!isExist" for="" style="margin-left: 30%;color: red;">用户不存在！</label>
						</div>
						<div style="margin-left: 18%;margin-top: 30px;">密码</div>
						<input class="textinput" type="password" placeholder="请输入密码" v-model="logInfo.password" @input="logEmptyFunction" >
						<div style="margin-left: 18%;margin-top: 3px;">
							<a href="">忘记密码</a>
							<label v-show="!isCorrect" for="" style="margin-left: 30%;color: red;">密码错误！</label>
						</div>
						<span class="change" @click="toRegist">去注册</span>
						<button class="btn" v-bind:class="loginBtnActive()" @click="logBtnClick()">登 录</button>
					</div>
				</div>
				<div class="regist">
					<div >
						<div style="margin-left: 18%;margin-top: 50px;">创建用户</div>
						<input class="textinput" type="text" placeholder="请输入账户" v-model="regInfo.username" @input="regEmptyFunction">
						<div style="margin-left: 18%;margin-top: 30px;">输入密码</div>
						<input class="textinput" type="password" placeholder="请输入密码" v-model="regInfo.password1" @input="regEmptyFunction">
						<div style="margin-left: 18%;margin-top: 30px;">确认密码</div>
						<input class="textinput" type="password" placeholder="请确认密码" v-model="regInfo.password2" @input="regEmptyFunction">
						<span class="change" @click="toLogin">去登录</span>
						<button class="btn" v-bind:class="regBtnActive()" @click="regBtnClick()" >注 册</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				logInfo: {
					username: null,
					password: null,
				},
				regInfo:{
					username:null,
					password1:null,
					password2:null
				},
				isActive:false,
				logEmpty:false,
				regEmpty:false,
				isCorrect:true,
				isExist:true
			}
		},
		methods:{
			getClass(){
				return {changeActive:this.isActive}
			},
			toLogin(){
				this.isActive=false
			},
			toRegist(){
				this.isActive=true
			},
			loginBtnActive(){
				return {btnActive:this.logEmpty}
			},
			regBtnActive(){
				return {btnActive:this.regEmpty}
			},
			
			//判断登录输入框是否为空
			logEmptyFunction(){
				if(this.logInfo.username==null||this.logInfo.password==null){
					this.isCorrect=true
					this.logEmpty=false
				}else{
					this.isCorrect=true
					this.logEmpty=true
				}
			},
			//判断注册输入框是否为空
			regEmptyFunction(){
				if(this.regInfo.username==null||this.regInfo.password1==null||this.regInfo.password2==null){
					this.regEmpty=false
				}else{
					this.regEmpty=true
				}
			},
			
			//登录
			logBtnClick(){
				const _this=this
				this.$axios.post('http://localhost:8088/user/login',this.logInfo)
					.then(function(response) {
						if(response.data=='success'){
							_this.$store.commit('login',_this.logInfo.username)
							_this.$router.push({
								path: '/person',
							})
						}else if(response.data=='error'){
							_this.isCorrect=false
						}else{
							_this.isExist=false
						}
					})
			},
			
			//判断两次密码是否相同,并判断是否注册成功
			regBtnClick(){
				if(this.regInfo.password1===this.regInfo.password2){
					let userReg=new Object();
					userReg.username=this.regInfo.username,
					userReg.password=this.regInfo.password1,
					
					this.$axios.post('http://localhost:8088/user/register',userReg)
						.then(function(response) {
							if(response.data!='success'){
								alert(response.data)
							}else{
								alert("注册成功！")
							}
							
						})
				}
			}
		},
		computed:{
			
		}
	}
</script>

<style >
	.logo1{
		width: 75px;
		height: 75px;
		background-color: #000000;
		margin: 0  auto;
		margin-top: 100px;
	}
	
	.loginAndregist {
		width: 200%;
		height: 100%;
		display: flex;
		overflow: hidden;
		transition: 0.3s;
	}
	.changeActive{
		transform: translateX(-50%);
	}
	
	.login {
		width: 100%;
	}
	
	.regist {
		width: 100%;
	}

	.textinput {
		display: block;
		height: 36px;
		width: 75%;
		margin: 0px auto;
		text-indent: 30px;
		border: 1px solid #c8c8c8;
		border-radius: 18px;
	}

	input:focus {
		outline: none;
		border: 1px solid #1296DB;
		border-radius: 18px;
	}

	.change {
		display: inline-block;
		width: 50%;
		height: 40px;
		margin-top: 45px;
		text-align: center;
	}

	.btn {
		width: 100px;
		height: 40px;
		margin-top: 45px;
		margin-left: 20px;
		border: none;
		border-radius: 18px;
		font-size: 15px;
		outline: none;
		pointer-events: none;
	}

	.btnActive {
		background-color: #1296DB;
		pointer-events: all;
	}

</style>
