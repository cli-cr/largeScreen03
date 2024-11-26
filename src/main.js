import Vue from 'vue'
import App from './App.vue'

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import "./assets/css/index.css"

//全局引入echarts
import * as echarts from 'echarts';
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts;


// 全屏
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
