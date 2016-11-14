import Vue from 'vue';
import Vuex from 'vuex';
import {toBase64} from '../api/apis';

console.log(toBase64)

Vue.use(Vuex);

const state = {
	user: {
		token: '',
		test: 1
	}
}

const mutations = {
	savetoken (state, token) {
		console.log(token)
		state.user.token = token;
	}
}

const actions = {
	save ({ commit }, payload) {
		console.log(toBase64(payload))
		commit('savetoken', toBase64(payload))
	} 
}

const getters = {
	doneTodos (state) {
		return state.user.token + "haha,I'm get"
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})