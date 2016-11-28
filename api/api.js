import { Base64 } from 'js-base64';
import _ from 'lodash';

const toBase64 = (arr) => {
	if (arr.constructor !== Array) return;
	return Base64.encode(arr.join(':'));
}

const apiURL = 'http://10.241.95.218:8989'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    error.status = response.status
    throw error
  }
}

const parseJSON = (response) => {
  return response.json();
}

const unauthorized = (e, context) => {
	context = context || this;
	if (e.status === 401) {
		context.$message({
      message: '认证失效请重新登录',
      type: 'error',
      onClose () {
      	context.$store.dispatch('settoken', null);
	 			context.$router.push({name: 'signin'});
      }
   	});
	}
}

export {
	toBase64,
	apiURL,
	checkStatus,
	parseJSON,
	unauthorized
}
