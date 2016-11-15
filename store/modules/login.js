import * as types from '../mutation-types';

const state = {
  token: '',
  custom: {
  	username: '',
  	password: '',
  	role: '',
  	isAdmin: false
  }
}

// getters
const getters = {
  user: state => state.user
}

// mutations
const mutations = {
  [types.SAVE_TOKEN] (state, str) {
    state.token = str
  },

  [types.SET_USER] (state, { obj }) {
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
  mutations
}