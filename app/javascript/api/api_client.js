class ApiClient {
	getAddress() {
		return process.env.NODE_ENV === 'production' ?
			'https://lemoney-api.herokuapp.com/' :
			'http://localhost:3001';
	}

	storeAuthenticationHeaders(responseHeaders) {
		localStorage.setItem('uid', responseHeaders.get('uid'));
		localStorage.setItem('client', responseHeaders.get('client'));
		localStorage.setItem('access-token', responseHeaders.get('access-token'));
	}

	fetchAuthenticationHeaders() {
		return {
			uid: localStorage.getItem('uid'),
			client: localStorage.getItem('client'),
			'access-token': localStorage.getItem('access-token')
		}
	}

	fetch(path, options = {}) {
		const requestUrl = `${this.getAddress()}${path}`;
		const requestHeaders = {...{}, ...options.headers, ...this.fetchAuthenticationHeaders()};
		const requestOptions = {...{}, ...options, ...{headers: requestHeaders}};

		return fetch(requestUrl, requestOptions)
			.then(response => this.handleResponse(response))
	}

	handleResponse(response) {
		const requestNotAuthorized = [401, 403].includes(response.status)

		if (requestNotAuthorized) {
			window.location.href = '/admin/sessions/new';
		} else {
			return Promise.resolve(response);
		}
	}
}

export const apiClient = new ApiClient();