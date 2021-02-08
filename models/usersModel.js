import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable, flow, observable, autorun } from 'mobx';
import { getOtpApi, verifyOtpApi, updateUserDetailsApi, getUserDetailsApi } from '../requests/usersApi';
import showMessage from '../utils/error';
import { onTheAirNavigate } from '../utils/misc/navigatorHelpers';

export default class UserModel {
    userDetails = null;

    constructor() {
        makeAutoObservable(this, {
            getOtp: flow,
            verifyOtp: flow,
            updateUserDetails: flow
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
            console.log(e);
            return null;
        }
    }
    *verifyOtp(payload) {
        try {
            console.log('action_called');
            const response = yield verifyOtpApi(payload);
            if (response) {
                this.userDetails = response;
                yield AsyncStorage.setItem('@token', response.token);
                return response;
            }
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    *getUserDetailsAction() {
        try {
            const response = yield getUserDetailsApi();
            console.log('response', response)

            if (response) {
                console.log('response', response)
                this.userDetails = response;
            }
        } catch (e) {
            console.log(e)
            return null;
        }
    }
    *updateUserDetails(payload) {
        try {
            const response = yield updateUserDetailsApi(payload);
            if (response) {
                this.userDetails = response;
                return response;
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    *onLogout() {
        yield AsyncStorage.removeItem('@token');
        this.userDetails = null;
        onTheAirNavigate('Home');
    }
    get getUserDetails() {
        console.log('comutation_called');
        return this.userDetails;
    }
}
export function userLogout() {
    const obj = new UserModel();
    obj.onLogout();
}
