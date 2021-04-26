import Vue from 'vue'
import Vuex from 'vuex'


// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
	state: {
		user: {
			username: null,
			mail: null,
			password: null,
			tel: null,
			birthday: null,
			introduction: null
		}
	},
	mutations: {
		//方法
		login(state,loguser){
			state.user.username=loguser
		},
		userLoad(state,user){
			state.user.mail=user.mail,
			state.user.tel=user.tel,
			state.user.birthday=user.birthday,
			state.user.introduction=user.introduction,
			state.user.password=user.password
		},
	},
	actions: {},
	getters: {},
	modules: {}
})

// 导出对象
export default store
