import * as types from './mutation-types'

const settoken = ({ commit }, str) => {
	commit(types.SET_TOKEN, str)
}

export {
	settoken
}