import React, { Component } from 'react'
import { Image, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { showImagePicker } from 'react-native-image-picker';
import { COLORS } from '../../utils/misc/colors';
import { settingsStyle } from './settings_style';

export default class Settings extends Component {
    state = {
        editName: false,
        editMobile: false
    }
    onEditClick = (stateName) => {
        this.setState((prevState) => ({ [stateName]: !prevState[stateName] }), () => {
            if (this.state.editName) {
                const refInput = this[`${stateName}Input`];
                refInput.focus();
            }
        });
    }
    onImgChoseClick = () => {
        console.log('imgCLick')
        const options = {
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        showImagePicker(options, (response) => console.log(response));
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.userContainer}>
                    <Image source={require('../../assets/images/logo.jpg')} style={styles.imgContainer} blurRadius={10} />
                    <View style={styles.profileContainer} >
                        <Icon name="face-recognition" size={30} color={COLORS.lightBlue} style={styles.profileIcon} onPress={() => this.onImgChoseClick()} />
                    </View>
                </View>
                <View style={styles.editContainer}>
                    <View style={styles.itemSetting}>
                        <Icon name="face-profile" size={20} color={COLORS.midGrey} style={styles.settingIcon} />
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Name</Text>
                            <TextInput
                                key={`${this.state.editName}-name`}
                                ref={ref => this.editNameInput = ref}
                                keyboardType="name-phone-pad"
                                defaultValue={'Rajiv Ranjan Pandey'}
                                style={styles.userInput}
                                editable={this.state.editName}
                            />
                        </View>
                        <Icon name={this.state.editName ? 'close' : 'pencil'} size={20} color={COLORS.lightWhite} style={styles.settingIcon} onPress={() => this.onEditClick('editName')} />

                    </View>
                    <View style={styles.itemSetting}>
                        <Icon name="cellphone-iphone" size={20} color={COLORS.midGrey} style={styles.settingIcon} />
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Mobile Number</Text>
                            <TextInput
                                key={`${this.state.editName}-mobile`}
                                ref={ref => this.editMobileInput = ref}
                                keyboardType="phone-pad"
                                defaultValue={'8981215328'}
                                style={styles.userInput}
                                editable={this.state.editMobile}
                            />
                        </View>
                        <Icon name={this.state.editMobile ? 'close' : 'pencil'} size={20} color={COLORS.lightWhite} style={styles.settingIcon} onPress={() => this.onEditClick('editMobile')} />
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
