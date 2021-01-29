import request from './index';

export const getPasswordList = (payload) => {
    const options = {
        method: 'get',
        params: {},
    };
    return request('/customer/user_passwords', options, true);
};
export const updatePasswordListItemApi = (payload) => {
    const options = {
        method: 'put',
        params: payload.data,
    }
    return request(`/customer/user_passwords/${payload.itemId}`, options, true);
}