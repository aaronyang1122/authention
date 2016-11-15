import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import login from './modules/login';
import Promise from 'babel-polyfill';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    login
  }
})