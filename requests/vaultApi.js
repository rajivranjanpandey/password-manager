import request from './index';

export const getPasswordList = (payload) => {
    const options = {
        method: 'get',
        params: {},
    };
    return request('/customer/user_passwords', options, true);
};
