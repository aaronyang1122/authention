import { Base64 } from 'js-base64';

const toBase64 = (arr) => {
	if (arr.constructor !== Array) return;
	return Base64.encode(arr.join(':'));
}

export {
	toBase64
}
