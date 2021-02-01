import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PasswordListStyle } from './passwordList_style';
import ListItem from '../../components/listItem';
import dataModels from '../../utils/misc/config/index-model';
import { COLORS } from '../../utils/misc/colors';

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
    const onAddItemClick = () => {
        props.navigation.push('CreateItem');
    }
    return (
        <SafeAreaView>
            <FlatList
                data={list}
                renderItem={({ item }) => <ListItem parentItem={item} itemActionClick={itemActionClick} />}
                keyExtractor={(item) => item._id}
                extraData={null}
            />
            <TouchableOpacity style={styles.addBtn} onPress={() => onAddItemClick()}>
                <Icon style={styles.addBtnIcon} name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = PasswordListStyle;

export default observer(PasswordList);
