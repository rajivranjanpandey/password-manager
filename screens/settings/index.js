import React, { Component } from 'react'
import { Image, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../utils/misc/colors';
import { settingsStyle } from './settings_style';

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.userContainer}>
                    <Image source={require('../../assets/images/logo.jpg')} style={styles.imgContainer} blurRadius={10} />
                    <View style={styles.profileContainer}>
                        <Icon name="face-recognition" size={30} color={COLORS.lightBlue} style={styles.profileIcon} />
                    </View>
                </View>
                <View style={styles.editContainer}>
                    <View style={styles.itemSetting}>
                        <Icon name="face-profile" size={20} color={COLORS.midGrey} style={styles.settingIcon} />
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Name</Text>
                            <TextInput
                                keyboardType="name-phone-pad"
                                defaultValue={'Rajiv Ranjan Pandey'}
                                style={styles.userInput}
                            />
                        </View>
                        <Icon name="pencil" size={20} color={COLORS.lightWhite} style={styles.settingIcon} />
                    </View>
                    <View style={styles.itemSetting}>
                        <Icon name="cellphone-iphone" size={20} color={COLORS.midGrey} style={styles.settingIcon} />
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Mobile Number</Text>
                            <TextInput
                                keyboardType="phone-pad"
                                defaultValue={'8981215328'}
                                style={styles.userInput}
                            />
                        </View>
                        <Icon name="pencil" size={20} color={COLORS.lightWhite} style={styles.settingIcon} />
                    </View>
                </View>
                <KeyboardAvoidingView style={styles.logoutContainer}>
                    <Icon name="lock" size={18} color={COLORS.lightWhite} style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Logout</Text>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = settingsStyle;
