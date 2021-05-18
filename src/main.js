import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.prototype.$axios = axios;

import global_ from './base.vue'
Vue.prototype.GLOBAL=global_
axios.default.baseURL=global_.BASE_URL


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)
Viewer.setDefaults({
	defaultOptions:{
		zIndex:9999
	},
	Options:{
		"toolbar":false,
		"fullscreen":true
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



