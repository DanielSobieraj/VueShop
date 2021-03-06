import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  Vuex,
  render: h => h(App)
}).$mount('#app');
