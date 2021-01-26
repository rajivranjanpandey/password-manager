import { makeAutoObservable, flow, observable, autorun } from 'mobx';
import { getPasswordList } from '../requests/vaultApi';

export default class PasswordListModel {
    storedPasswordList = [];

    constructor() {
        makeAutoObservable(this, {
            fetchPasswordList: flow,
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

    get passwordList() {
        return this.storedPasswordList;
    }
}

