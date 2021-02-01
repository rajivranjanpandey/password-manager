import request from './index';

export const getOtpApi = (payload) => {
    const options = {
        method: 'post',
        params: payload,
    };
    return request('/client/users/send-otp', options, false);
}
export const verifyOtpApi = (payload) => {
    const options = {
        method: 'post',
        params: payload,
    };
    return request('/client/users/verify-otp', options, false);
}
export const getUserDetailsApi = () => {
    const options = {
        method: 'get',
        params: {},
    };
    return request('/client/customer/profile', options, true);
}
export const updateUserDetailsApi = (payload) => {
    const options = {
        method: 'put',
        params: payload,
    };
    return request('/client/customer/profile', options, true);
}