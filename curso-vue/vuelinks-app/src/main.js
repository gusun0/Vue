// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Firebase
//import VueFire from 'vuefire'
import { firestorePlugin } from 'vuefire'
//import { rtdbPlugin as VueFire } from 'vuefire'

Vue.config.productionTip = false

//Vue.use(VueFire);
Vue.use(firestorePlugin)
//Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})
