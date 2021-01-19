import axios from 'axios';

const BASE_REQUEST = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: { Accept: 'application/json' },
    timeout: '1000',
    timeoutErrorMessage: 'Serer request timeout',
};
const methodHandler = async (options) => {
    switch (options.method) {
        case 'get':
            return axios
                .get(options.url)
                .then(res => { return res.data; })
                .catch(e => { console.log('error', e); return null });
    }
}
export default async function request(url, options, authToken = false) {
    if (authToken) {
        BASE_REQUEST.defaults.headers.common['X-Auth-Token'] = { 'X-Auth-Token': '124' };
    }
    options.url = `${BASE_REQUEST.baseURL}${url}`;
    const response = await methodHandler(options);
    return response;
}