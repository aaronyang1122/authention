import Vue from 'vue';
import App from './App';
import router from './router.js';
import store from '../store/index';

var app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
