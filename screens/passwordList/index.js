import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import { useFocusEffect } from '@react-navigation/native';
import { PasswordListStyle } from './passwordList_style';
import ListItem from '../../components/listItem';
import dataModels from '../../utils/misc/config/index-model';

function PasswordList(props) {
    const listModel = React.useContext(dataModels.PasswordListModel);

    useFocusEffect(
        React.useCallback(() => {
            listModel.fetchPasswordList();
        }, [])
    );
    const list = listModel.passwordList;
    const itemActionClick = (item, action_type) => {
        props.navigation.push('EditItem', { title: item.platform_name, data: item });
    }
    return (
        <SafeAreaView>
            <FlatList
                data={list}
                renderItem={({ item }) => <ListItem parentItem={item} itemActionClick={itemActionClick} />}
                keyExtractor={(item) => item._id}
                extraData={null}

            />
        </SafeAreaView>
    )
}

const styles = PasswordListStyle;

export default observer(PasswordList);
