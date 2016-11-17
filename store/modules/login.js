import * as types from '../mutation-types';

const state = {
  token: null,
  custom: {
  	username: '',
  	password: '',
  	role: '',
  	enabled: false
  }
}

// getters
const getters = {
  user: state => state.user
}

// actions
const actions = {
  setcustom ({ commit }, obj) {
		commit(types.SET_CUSTOM, obj)
	}
}

// mutations
const mutations = {
	// set token
  [types.SET_TOKEN] (state, str) {
    state.token = str
  },

	// set custom obj
  [types.SET_CUSTOM] (state, obj) {
    for (let key in state.custom) {
    	if (obj.hasOwnProperty(key)) {
    		state.custom[key] = obj[key];
    	}
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}