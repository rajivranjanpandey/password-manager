import React, { Component } from 'react'
import { Button, KeyboardAvoidingView, LayoutAnimation, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/customButton';
import PasswordListModel from '../../models/passwordListModel';
import { COLORS } from '../../utils/misc/colors';
import { formStyle, addBtnStyle } from './createPasswordItem_style';

const listObj = {
    password_label: '',
    password_stream: ''
}
export default class CreatePasswordItem extends Component {
    constructor(props) {
        super(props);
        this.itemDetails = null;
        this.state = {
            list: [this.getInitialListObj()],
            platformName: '',
            errorArr: [],
            isError: false,
            errorMsg: ''
        }
    }
    getInitialListObj = () => {
        return JSON.parse(JSON.stringify(listObj));
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => <Button title="Save" onPress={() => this.onSave()} />,
            tabBarVisible: false
        });
    }
    onAddMoreClick = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState((prevState) => ({ list: prevState.list.concat([this.getInitialListObj()]) }));
    }
    onRemoveClick = (index) => {
        const prevList = this.state.list;
        prevList.splice(index, 1);
        LayoutAnimation.configureNext(LayoutAnimation.create(300, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity));
        this.setState({ list: prevList });
    }
    onListInputChange = (newVal, inputIndex, fieldType) => {
        this.state.list[inputIndex][fieldType] = newVal;
    }
    checkForErrors = () => {
        let isError = false;
        let tempList = this.state.list;
        if (this.state.platformName?.length) {
            this.state.errorMsg = '';
            console.log(tempList)
            const lastElement = this.state.list[this.state.list.length - 1];
            const tempErrorState = this.state.errorArr;
            if (lastElement) {
                if (!lastElement.password_label?.length && !lastElement.password_stream?.length)
                    tempList = this.state.list.slice(0, this.state.list.length - 1);
            }
            tempList.forEach((entry, index) => {
                if (!entry.password_label?.length || !entry.password_stream?.length) {
                    isError = true;
                    tempErrorState[index] = { 'isError': true, 'message': 'Please fill the required fields' }
                } else {
                    tempErrorState[index] = { 'isError': false, 'message': '' };
                }
            });
            this.state.errorArr = tempErrorState;
        } else {
            isError = true;
            this.state.errorMsg = 'Kindly enter platform name';
        }
        return { isError, tempList };
    }
    onSave = async () => {
        const { isError, tempList: pwdList } = this.checkForErrors();
        if (!isError) {
            const payload = {
                platform_name: this.state.platformName,
                platform_passwords: pwdList
            }
            const obj = new PasswordListModel();
            const response = await obj.createPasswordList(payload);
            if (response)
                this.props.navigation.goBack();
        }
        this.setState({ isError });
    }
    render() {

        return (
            <ScrollView style={{ paddingBottom: 15 }}>
                {
                    this.state.errorMsg.length > 0 ?
                        <TextInput
                            style={[styles.nameInput, { borderColor: COLORS.lightRed }]}
                            placeholder={this.state.errorMsg}
                            defaultValue={this.state.platformName}
                            placeholderTextColor={COLORS.lightRed}
                            onChangeText={(newVal) => this.state.platformName = newVal}
                        />
                        :
                        <TextInput
                            style={styles.nameInput}
                            placeholder={"Enter Platform Name"}
                            defaultValue={this.state.platformName}
                            placeholderTextColor={COLORS.inputPlaceholder}
                            onChangeText={(newVal) => this.state.platformName = newVal}
                        />
                }
                <View style={styles.subListContainer}>
                    <HrLineView>
                        <Text style={styles.heading}>Sub Password List</Text>
                    </HrLineView>
                    {
                        this.state.list.map((item, index) => {
                            const isLastIndex = index === this.state.list.length - 1;
                            let errorObj = null;
                            if (this.state.isError && this.state.errorArr[index]) {
                                errorObj = this.state.errorArr[index].isError ? this.state.errorArr[index] : null;
                            }
                            return (
                                <HrLineView key={`Item_${index}`}>
                                    {
                                        !isLastIndex &&
                                        <TouchableOpacity activeOpacity={0.7} style={styles.listPosition} onPress={() => this.onRemoveClick(index)}>
                                            <Icon name="clear" size={14} color={COLORS.white} />
                                        </TouchableOpacity>
                                    }
                                    <View style={styles.subListItemContainer}>
                                        <TextInput
                                            style={styles.subItemLabelInput}
                                            placeholder="Enter Password Label"
                                            placeholderTextColor={COLORS.inputPlaceholder}
                                            defaultValue={item.password_label}
                                            onChangeText={(e) => this.onListInputChange(e, index, 'password_label')}
                                        />
                                        <View style={styles.subItemPasswordContainer}>
                                            <TextInput
                                                style={styles.subItemPasswordInput}
                                                placeholder="Enter Password Stream"
                                                placeholderTextColor={COLORS.inputPlaceholder}
                                                defaultValue={item.password_stream}
                                                onChangeText={(e) => this.onListInputChange(e, index, 'password_stream')}
                                            />
                                            <TouchableOpacity style={styles.generateIcon}>
                                                <Icon name="wifi-protected-setup" size={20} color={COLORS.lightBlue} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {errorObj && <Text style={styles.errorText}>{errorObj.message}</Text>}
                                </HrLineView>
                            );
                        })
                    }
                    <HrLineView>
                        <CustomButton
                            onPress={() => this.onAddMoreClick()}
                            title={'Add More Password'}
                            icon={{ show: false }}
                            styleObj={addBtnStyle}

                        />
                    </HrLineView>
                </View>
            </ScrollView>
        )
    }
}
function HrLineView(props) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginVertical: 10 }}>
            <View style={{ borderWidth: 1, borderColor: COLORS.darkGrey, width: '10%', height: 1, justifyContent: 'center', alignSelf: 'center' }} />
            <View style={{ flex: 2 }}>
                {props.children}
            </View>
        </View>
    )
}
const styles = formStyle;
