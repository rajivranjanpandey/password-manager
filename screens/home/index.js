/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React from 'react';
import { View, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager, Keyboard } from 'react-native';
import dataModels from '../../utils/misc/config/index-model';
import { HomeStyle } from './home_style';

class Home extends React.Component {
    state = {
        error: {
            isError: false,
            message: ''
        },
        scaleAnim: new Animated.Value(1),
        showOtpInput: false
    }
    mobileNumber = null;
    componentDidMount() {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }

    }
    static contextType = dataModels.UserModel;
    onGetOtp = async () => {
        const mobile = this.mobileInput + '';
        const errorState = this.state.error;
        if (mobile.length === 10) {
            console.log(mobile);
            errorState.isError = false;
            errorState.message = '';
            const response = await this.context.getOtp({ mobile: Number(mobile) });
            if (response) {
                this.mobileNumber = Number(mobile);
                Keyboard.dismiss(0);
                Animated.timing(this.state.scaleAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }).start(({ finished }) => {
                    // Once finished with animation we setState to show otpInput
                    if (finished) {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                        this.setState({
                            error: errorState,
                            showOtpInput: true
                        })
                    }
                });
            } else {
                Keyboard.dismiss(0);
            }
        } else {
            errorState.isError = true;
            errorState.message = 'Please enter a valid number';
            this.setState({ error: errorState });
        }
    }
    onVerifyOtp = async () => {
        const otp = this.otpInput + '';
        const errorState = this.state.error;
        if (otp.length === 4) {
            errorState.isError = false;
            errorState.message = '';
            const response = await this.context.verifyOtp({ mobile: this.mobileNumber, otp: Number(otp) });
            if (response) {
                this.props.navigation.push('PasswordList');
            } else {
                Keyboard.dismiss(0);
            }
        } else {
            errorState.isError = true;
            errorState.message = 'Please enter a valid otp';
            this.setState({ error: errorState });
        }
    }
    render() {
        console.log('props', this.state.scaleAnim);

        return (
            <>
                <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.logoArea}>
                            {/* <Text>{this.props.itemModel.passwordList}</Text> */}
                        </View>
                        <View style={styles.centerArea}>
                            {
                                !this.state.showOtpInput &&
                                <Animated.View
                                    nativeID={'mobileNumInput'}
                                    useN
                                    style={{ transform: [{ scale: this.state.scaleAnim }] }}
                                >
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
                                </Animated.View>
                            }

                            {
                                this.state.showOtpInput &&
                                <View nativeID={'otpInput'}>
                                    <TextInput
                                        style={this.state.error.isError ? [styles.inputField, styles.inputError] : styles.inputField}
                                        placeholder={'Enter OTP'}
                                        placeholderTextColor={'#bfbdbd'}
                                        autoCompleteType="tel"
                                        keyboardType="number-pad"
                                        returnKeyLabel="send"
                                        maxLength={4}
                                        onChangeText={text => { this.otpInput = text }}
                                    />
                                    {
                                        this.state.error.isError &&
                                        <Text style={styles.error}>{this.state.error.message}</Text>
                                    }
                                </View>
                            }

                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.state.showOtpInput ? this.onVerifyOtp() : this.onGetOtp()}>
                                <View style={styles.submitBtn}>
                                    <Text style={styles.btnText}>{this.state.showOtpInput ? 'VERIFY OTP' : 'GET OTP'}</Text>
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
export default observer(Home);
// export default observer((props) => {
//     const ItemModel = React.useContext(itemContext);
//     console.log('observer_props', ItemModel);

//     return (<Home {...props} itemModel={ItemModel} />);

// })