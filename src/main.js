import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import router from './router';
import store from '../store/index';

Vue.use(ElementUI);

var app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
