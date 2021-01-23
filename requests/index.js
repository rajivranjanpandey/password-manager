import axios from 'axios';
import showMessage from '../utils/error';

const BASE_REQUEST = {
    baseURL: 'http://localhost:3000/api',
    // headers: { Accept: 'application/json' },
    timeout: '1000',
    timeoutErrorMessage: 'Serer request timeout',
};
const errorHandler = (errorObj, url) => {
    const message = errorObj.data.message;
    switch (errorObj.status) {
        case 400:
            showMessage(message, 'error');
            break;
        case 401:
            showMessage(message, 'error');
            break;
    }
}
const methodHandler = async (options) => {
    switch (options.method) {
        case 'get':
            return axios
                .get(options.url)
                .then(res => { return res.data; })
                .catch(e => { errorHandler(e.response); return null });
        case 'post':
            return axios
                .post(options.url, options.params)
                .then(res => { return res.data; })
                .catch(e => { errorHandler(e.response); return null });
    }
}
export default async function request(url, options, authToken = false) {
    if (authToken) {
        BASE_REQUEST.defaults.headers.common['X-Auth-Token'] = { 'X-Auth-Token': '124' };
    }
    options.url = `${BASE_REQUEST.baseURL}${url}`;
    console.log('url', options.url);
    const response = await methodHandler(options);
    return response;
}