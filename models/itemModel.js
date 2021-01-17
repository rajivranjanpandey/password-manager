import { makeAutoObservable, flow } from 'mobx';
import { fetchItemListApi } from '../requests/itemsApi';

export default class ItemModel {
    itemList = [];

    constructor() {
        makeAutoObservable(this, {
            fetchItemList: flow,
        });
    }
    // Actions
    *fetchItemList(payload) {
        try {
            const response = yield fetchItemListApi(payload);
            this.itemList = response;
        } catch (e) {
            console.log(e)
        }
    }
    get itemList() {
        return this.itemList;
    }
}
