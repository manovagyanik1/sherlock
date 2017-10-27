import {USER_TOKEN, PLAY_STORE_URL, USER_ID} from './constants';

export default class Gen {

	static isDevelopment() {
		return false;
	}

	static isServer() {
		return false;
	}

	static isProduction() {
		return false;
	}

	static getBaseUrl() {
		return Gen.isDevelopment() ? 'https://sherlock-clicks.amazon.com' : 'https://sherlock-clicks.amazon.com';
	}

    static getBodyAuthHeader() {
        return {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // authorization: token,
            }
        };
    }

    static getPostBodyAuthHeader({token, postData}) {
        const postBody = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: token,
            },
            body: JSON.stringify(postData),
        };
        return postBody;
    }

    static log(data) {
	    console.log(data);
    }
}