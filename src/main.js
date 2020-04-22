import Vue from 'vue'
import App from './App.vue'
import './firebase/firebase'
// import './playground/promise'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
