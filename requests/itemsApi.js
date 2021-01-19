import request from './index';

export const fetchItemListApi = (payload) => {
    const options = {
        method: 'get',
        params: {}
    };
    return request('/todos', options, false);
}