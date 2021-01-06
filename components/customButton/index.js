import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { COLORS } from '../../utils/misc/colors';

export default function CustomButton(props) {
    return (
        <TouchableOpacity style={props.styleObj.touchableContainer} activeOpacity={props.opacityLevel} onPress={() => props.onPress()}>
            <View style={props.styleObj.btnContainer}>
                {
                    props.icon.show &&
                    <Icon name={props.icon.name} color={props.icon.color} size={props.icon.size} />
                }
                {
                    props.title &&
                    <Text style={props.styleObj.titleContainer}>{props.title}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}
CustomButton.propTypes = {
    opacityLevel: PropTypes.number,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string,
    icon: PropTypes.shape({
        show: PropTypes.bool.isRequired,
        name: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.number,
    }),
    styleObj: PropTypes.shape({
        touchableContainer: PropTypes.object,
        btnContainer: PropTypes.object,
        titleContainer: PropTypes.object,
    }),
};
CustomButton.defaultProps = {
    opacityLevel: 0.5,
    icon: {
        show: false,
        name: 'arrow-drop-up',
        color: COLORS.lightBlue,
        size: 25,
    },
};