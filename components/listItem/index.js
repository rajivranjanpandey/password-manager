import React, { Component } from 'react'
import { View, Text, Image, Platform, UIManager, LayoutAnimation, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../utils/misc/colors';
import CustomButton from '../customButton';
import { listItemStyle, editBtnStyle } from './listItem_style';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        // For use pf LayoutAnimation in android we need to enable it.
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const { parentItem } = this.props;
        return (
            <View style={styles.itemContainer} >
                <TouchableOpacity activeOpacity={0.7} style={styles.parentHead} onPress={() => this.toggleExpand()}>
                    <Image style={styles.itemImg} source={{ uri: 'https://picsum.photos/seed/picsum/70/70' }} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.itemText}>{parentItem.platform_name}</Text>
                        <Text style={styles.itemAccount}>{parentItem.platform_passwords.length} subaccounts</Text>
                    </View>
                    <Icon style={styles.arrowIcon} name={this.state.expanded ? 'arrow-drop-up' : 'arrow-drop-down'} size={30} color={COLORS.midGrey} />
                </TouchableOpacity>
                {
                    this.state.expanded &&
                    <View>
                        <View style={styles.childContainer}>
                            <FlatList
                                data={parentItem.platform_passwords}
                                renderItem={({ item, index }) => {
                                    const isLast = index === parentItem.platform_passwords.length - 1;
                                    return (
                                        <View style={[styles.childItemContainer, { marginBottom: isLast ? 0 : 10 }]}>
                                            <View style={styles.childSubContainer}>
                                                <Icon name={'fiber-manual-record'} size={10} color={'#c6c4c4'} />
                                                <Text style={styles.childText}>{item.password_label}</Text>
                                            </View>
                                            <View style={styles.childSubContainer}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.childPassword}>{item.password_stream}</Text>
                                                <Icon name={'content-paste'} size={18} color={COLORS.lightBlue} />

                                            </View>
                                        </View>
                                    );
                                }

                                }
                                keyExtractor={(child) => child._id}
                                extraData={null}
                            />
                        </View>
                        <View style={styles.btnContainer}>
                            <CustomButton
                                onPress={() => this.props.itemActionClick(parentItem, 'share')}
                                // title={'Share'}
                                icon={{ show: true, name: 'share', size: 25, color: COLORS.lightBlue }}
                                styleObj={editBtnStyle}

                            />
                            <CustomButton
                                onPress={() => this.props.itemActionClick(parentItem, 'share')}
                                // title={'Edit'}
                                icon={{ show: true, name: 'create', size: 25, color: '#c6c4c4' }}
                                styleObj={editBtnStyle}
                            />
                            <CustomButton
                                onPress={() => this.props.itemActionClick(parentItem, 'share')}
                                // title={'Delete'}
                                icon={{ show: true, name: 'delete', size: 25, color: COLORS.red }}
                                styleObj={editBtnStyle}

                            />

                        </View>
                    </View>
                }
            </View>
        )
    }
}
const styles = listItemStyle;