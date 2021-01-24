import { createContext } from 'react';
import UserModel from '../../../models/usersModel';
import PasswordListModel from '../../../models/passwordListModel';
import ItemModel from '../../../models/itemModel';

const dataModels = {
    UserModel: createContext(new UserModel()),
    ItemModel: createContext(new ItemModel()),
    PasswordListModel: createContext(new PasswordListModel())
};
// const dataModels = React.createContext({
//     ItemModel: new ItemModel()
// });
// export const useStores = () => React.useContext(dataModels);
export default dataModels;