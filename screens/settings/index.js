import React, { Component } from 'react'
import { Image, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { showImagePicker } from 'react-native-image-picker';
import { COLORS } from '../../utils/misc/colors';
import { settingsStyle } from './settings_style';
import { observer } from 'mobx-react';
import dataModels from '../../utils/misc/config/index-model';

class Settings extends Component {
    state = {
        editName: false,
        editMobile: false,
        error: { isError: false, message: '' }
    }
    static contextType = dataModels.UserModel;
    onEditClick = async (stateName) => {
        if (this.state[stateName]) {
            const errorObj = this.state.error;
            const value = this[`${stateName}Input`];
            const payload = { name: this.editNameInput.value, mobile: this.editMobileInput.value };
            if (!value.length) {
                errorObj.isError = true;
                errorObj.message = 'Required field';
            } else if (stateName === 'editMobile') {
                if (value.length < 10) {
                    errorObj.isError = true;
                    errorObj.message = 'Mobile Number should be of 10 digits';
                } else {
                    errorObj.isError = false;
                    errorObj.message = '';
                    payload.mobile = Number(value);
                }
            } else {
                errorObj.isError = false;
                errorObj.message = '';
            }
            if (errorObj.isError) {
                this.setState({ error: errorObj });
            } else {
                this.state.error = errorObj;
                this.state[stateName] = !this.state[stateName];
                const response = await this.context.userDetails.updateUserDetails(payload);
            }
        } else {
            this.setState((prevState) => ({ [stateName]: !prevState[stateName] }), () => {
                if (this.state[stateName]) {
                    const refInput = this[`${stateName}Input`];
                    refInput.focus();
                }
            });
        }
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
        let key = `${this.state.editName}_settings`;
        let objVal = { name: '', mobile: '' };
        if (this.context.userDetails) {
            key = `${this.state.editName}_settings_data`;
            objVal.name = this.context.userDetails.name || '';
            objVal.mobile = this.context.userDetails.mobile;
        }
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
                                key={`${key}-name`}
                                ref={ref => this.editNameInput = ref}
                                keyboardType="name-phone-pad"
                                defaultValue={objVal.name}
                                style={styles.userInput}
                                editable={this.state.editName}
                            />
                        </View>
                        <Icon name={this.state.editName ? 'done' : 'pencil'} size={20} color={COLORS.lightWhite} style={styles.settingIcon} onPress={() => this.onEditClick('editName')} />

                    </View>
                    <View style={styles.itemSetting}>
                        <Icon name="cellphone-iphone" size={20} color={COLORS.midGrey} style={styles.settingIcon} />
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Mobile Number</Text>
                            <TextInput
                                key={`${key}-mobile`}
                                ref={ref => this.editMobileInput = ref}
                                keyboardType="tel"
                                defaultValue={objVal.mobile}
                                style={styles.userInput}
                                maxLength={10}
                                editable={this.state.editMobile}
                            />
                        </View>
                        <Icon name={this.state.editMobile ? 'done' : 'pencil'} size={20} color={COLORS.lightWhite} style={styles.settingIcon} onPress={() => this.onEditClick('editMobile')} />
                    </View>
                </View>
                {
                    this.state.error.isError &&
                    <Text style={styles.errorText}>{this.state.error.message}</Text>
                }
                <KeyboardAvoidingView style={styles.logoutContainer}>
                    <Icon name="lock" size={18} color={COLORS.lightWhite} style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Logout</Text>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = settingsStyle;

export default observer(Settings);
