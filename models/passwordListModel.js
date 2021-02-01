import { makeAutoObservable, flow, autorun } from 'mobx';
import { createPasswordListItemApi, getPasswordList, updatePasswordListItemApi } from '../requests/vaultApi';

export default class PasswordListModel {
    storedPasswordList = [];

    constructor() {
        makeAutoObservable(this, {
            fetchPasswordList: flow,
            updatePasswordListItem: flow
        });
        autorun(() => this.passwordList);

    }
    // Actions
    *fetchPasswordList(payload) {
        try {
            const response = yield getPasswordList(payload);
            console.log(response);
            if (response) {
                this.storedPasswordList = response;
            }
        } catch (e) {
            console.log(e);
        }
    }
    *createPasswordList(payload) {
        try {
            const response = yield createPasswordListItemApi(payload);
            if (response) {
                return true;
            }
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    *updatePasswordListItem(payload) {
        try {
            const response = yield updatePasswordListItemApi(payload);
            if (response) {
                this.storedPasswordList = response;
                return response;

            }
        } catch (e) {
            console.log(e)
        }
    }

    get passwordList() {
        return this.storedPasswordList;
    }
}

