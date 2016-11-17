import { Base64 } from 'js-base64';

const toBase64 = (arr) => {
	if (arr.constructor !== Array) return;
	return Base64.encode(arr.join(':'));
}

const apiURL = 'http://10.241.95.218:8989'

export {
	toBase64,
	apiURL
}
