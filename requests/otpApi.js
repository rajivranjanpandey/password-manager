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