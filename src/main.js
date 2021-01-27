import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseCard from './components/ui/BaseCard.vue'

import FlightLine from './components/ui/FlightLine.vue'




Vue.config.productionTip = false

Vue.component('base-card', BaseCard);
Vue.component('flight-line', FlightLine);

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
