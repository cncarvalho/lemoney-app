window.Api = {
	address: process.env.NODE_ENV === 'production' ?
		'https://lemoney-api.herokuapp.com/' :
		'http://localhost:3001'
};