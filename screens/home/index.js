/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, StatusBar, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { HomeStyle } from './home_style';

class Home extends React.Component {
    state = {
        error: {
            isError: false,
            message: ''
        }
    }
    onGetOtp = () => {
        const mobile = this.mobileInput + '';
        const errorState = this.state.error;
        if (mobile.length === 10) {
            console.log(mobile);
            errorState.isError = false;
            errorState.message = '';
            this.props.navigation.push('PasswordList');
        } else {
            errorState.isError = true;
            errorState.message = 'Please enter a valid number';

        }
        this.setState({
            error: errorState,
        });
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.logoArea}>
                            <Text>Logo View</Text>
                        </View>
                        <View style={styles.centerArea}>
                            <View nativeID={'mobileNumInput'}>
                                {/* <Text style={styles.inputLabel}>Mobile Number</Text> */}
                                <TextInput
                                    style={this.state.error.isError ? [styles.inputField, styles.inputError] : styles.inputField}
                                    placeholder={'Enter Mobile Number'}
                                    placeholderTextColor={'#bfbdbd'}
                                    autoCompleteType="tel"
                                    keyboardType="number-pad"
                                    returnKeyLabel="send"
                                    maxLength={10}
                                    onChangeText={text => { this.mobileInput = text }}
                                />
                                {
                                    this.state.error.isError &&
                                    <Text style={styles.error}>{this.state.error.message}</Text>
                                }
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.onGetOtp()}>
                                <View style={styles.submitBtn}>
                                    <Text style={styles.btnText}>GET OTP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}
const styles = HomeStyle;
export default Home;