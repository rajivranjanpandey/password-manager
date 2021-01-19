import React from 'react';
import ItemModel from '../../../models/itemModel';

const dataModels = React.createContext({
    ItemModel: new ItemModel()
});
export const useStores = () => React.useContext(dataModels);
export default dataModels;