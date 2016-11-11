import Vue from 'vue';
import App from './App';
import router from './router.js';

var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
