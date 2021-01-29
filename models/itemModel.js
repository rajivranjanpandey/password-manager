import React from 'react';
import { makeAutoObservable, flow, observable, autorun } from 'mobx';
import { fetchItemListApi } from '../requests/itemsApi';

export default class ItemModel {
    itemList = 0;

    constructor() {
        makeAutoObservable(this, {
            fetchItemList: flow,
            itemList: observable
        });
        autorun(() => this.passwordList);

    }
    // Actions
    *fetchItemList(payload) {
        try {
            console.log('action_called');
            const response = yield fetchItemListApi(payload);
            if (response) {
                console.log(response[0])
                // this.setItemList(1);
                this.itemList += 1;
            }
        } catch (e) {
            console.log(e)
        }
    }

    setItemList(payload) {
        this.itemList += payload;
    }
    get passwordList() {
        console.log('comutation_called');
        return this.itemList;
    }
}

