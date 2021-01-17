import axios from 'axios';

const BASE_REQUEST = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    timeout: '1000',
    timeoutErrorMessage: 'Serer request timeout'
});
const methodHandler = (options, defaultHeader) => {
    switch (options.emthod) {
        case 'get':
            return BASE_REQUEST
                .get(options.url, { headers: defaultHeader })
                .then(res => res)
                .catch(e => { console.log(e); return null });
    }
}
export default async function request(url, options, authToken = false) {
    let defaultHeader = {};
    if (authToken) {
        defaultHeader = { 'X-Auth-Token': '124' };
    }
    options.url = url;
    const response = await methodHandler(options, defaultHeader);
    return response;
}