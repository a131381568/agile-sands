import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
// import listData from '~/mock/list'

var mock = new MockAdapter(axios);

mock.onGet("/users").reply(200, {
	users: [{ id: 1, name: "John Smith" }],
});

/*
// add page asyncData
let userData = await $axios.get("/users");
return {
	mockUsers: userData.data.users
};
*/

/*
export default function (ctx, inject) {
	// axios.defaults.baseURL = 'http://localhost:3000'
	// axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN'
	// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	ctx.$axios = axios;
	inject('axios', axios)

	let mock = new MockAdapter(axios, { onNoMatch: "throwException" })

	mock.onGet('/users').reply(200, {
		data: listData
	})
}
*/