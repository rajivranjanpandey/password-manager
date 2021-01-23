import { makeAutoObservable, flow, observable, autorun } from 'mobx';
import { getOtpApi, verifyOtpApi } from '../requests/otpApi';
import showMessage from '../utils/error';

export default class UserModel {
    userDetails = null;

    constructor() {
        makeAutoObservable(this, {
            getOtp: flow,
            verifyOtp: flow
        });
        autorun(() => this.getUserDetails);

    }
    // Actions
    *getOtp(payload) {
        try {
            console.log('action_called', payload);
            const response = yield getOtpApi(payload);
            if (response) {
                showMessage(response.message);
                return response;
            }
        } catch (e) {
            console.log(e)
        }
    }
    *verifyOtp(payload) {
        try {
            console.log('action_called');
            const response = yield verifyOtpApi(payload);
            if (response) {
                this.userDetails = response;
                return response;
            }
        } catch (e) {
            console.log(e)
        }
    }
    get getUserDetails() {
        console.log('comutation_called');
        return this.userDetails;
    }
}
