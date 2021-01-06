import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { PasswordListStyle } from './passwordList_style';
import ListItem from '../../components/listItem';

export default function PasswordList(props) {
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
            children: [{
                id: '1234',
                title: 'Child 1 of Item 1'
            }, {
                id: '8456',
                title: 'Child 2 of Item 1'
            }]
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];
    const itemActionClick = (item, action_type) => {
        props.navigation.push('EditItem', { title: 'Item 1' });
    }
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ListItem parentItem={item} itemActionClick={itemActionClick} />}
                keyExtractor={(item) => item.id}
                extraData={null}

            />
        </SafeAreaView>
    )
}

const styles = PasswordListStyle;
