import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



