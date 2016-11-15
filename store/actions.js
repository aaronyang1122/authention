import {toBase64} from '../api/api';
import * as types from './mutation-types'

const savetoken = ({ commit }, payload) => {
	console.log(payload)
	commit(types.SAVE_TOKEN, toBase64(payload))
}

export {
	savetoken
}