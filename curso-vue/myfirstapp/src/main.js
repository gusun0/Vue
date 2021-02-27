// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './components/Test.vue'
import User from './components/User.vue'

import vueResource from 'vue-resource'
Vue.use(vueResource)

import vueRouter from 'vue-router'
Vue.use(vueRouter)



const router = new vueRouter({
	mode: 'history',
	base: __dirname,  //de donde obtiene los componentes
	routes: [
		{
		path: '/',
		component: User
		},
		{
		path: '/test',
		component: Test
		}

	]

});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
