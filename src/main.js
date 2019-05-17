import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';
import './util/filters';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
