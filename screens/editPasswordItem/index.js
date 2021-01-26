import React, { Component } from 'react'
import { Button, LayoutAnimation, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/customButton';
import { COLORS } from '../../utils/misc/colors';
import { formStyle, addBtnStyle } from './editPasswordItem_style';

const listObj = {
    password_label: '',
    password_stream: ''
}
export default class EditPasswordItem extends Component {
    constructor(props) {
        super(props);
        this.itemDetails = null;
        this.state = {
            list: this.setUpInitialList()
        }

    }
    setUpInitialList = () => {
        this.itemDetails = this.props.route.params.data ?? null;
        if (this.itemDetails)
            return Array.from(this.itemDetails.platform_passwords)
        else
            return [this.getInitialListObj()];
    }
    getInitialListObj = () => {
        return JSON.parse(JSON.stringify(listObj));
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => <Button title="HI !" />
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
    onInputChange = (e, inputIndex, fieldType) => {
        this.state.list[inputIndex][fieldType] = e.target.value;
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <TextInput
                    style={styles.nameInput}
                    placeholder="Enter Platform Name"
                    placeholderTextColor={COLORS.inputPlaceholder}
                />
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
                                            onChange={(e) => this.onInputChange(e, index, 'password_label')}
                                        />
                                        <View style={styles.subItemPasswordContainer}>
                                            <TextInput
                                                style={styles.subItemPasswordInput}
                                                placeholder="Enter Password Stream"
                                                placeholderTextColor={COLORS.inputPlaceholder}
                                                defaultValue={item.password_stream}
                                                onChange={(e) => this.onInputChange(e, index, 'password_stream')}
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
            </View>
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
