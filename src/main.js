import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';
import './util/filters';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#607d8b',
    secondary: '#03a9f4',
    accent: '#00bcd4',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
