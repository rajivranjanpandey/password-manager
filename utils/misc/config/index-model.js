import React from 'react';
import ItemModel from '../../../models/itemModel';
import UserModel from '../../../models/usersModel';

const dataModels = {
    UserModel: React.createContext(new UserModel()),
    ItemModel: React.createContext(new ItemModel()),
}
// const dataModels = React.createContext({
//     ItemModel: new ItemModel()
// });
// export const useStores = () => React.useContext(dataModels);
export default dataModels;