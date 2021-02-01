import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/misc/colors";

export const formStyle = StyleSheet.create({
    nameInput: {
        borderColor: COLORS.darkGrey,
        letterSpacing: 0.5,
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        color: '#ffff',
        fontSize: 15,
        // paddingLeft: 10,
        padding: 12,
    },
    errorNameInput: {
        borderColor: COLORS.lightRed
    },
    subListContainer: {
        borderLeftColor: COLORS.darkGrey,
        borderLeftWidth: 2,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
        paddingTop: 5,
        // borderBottomLeftRadius: 27
    },
    heading: {
        color: COLORS.white,
        fontSize: 14,
        borderColor: COLORS.darkGrey,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 7,
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    listPosition: {
        color: COLORS.white,
        fontSize: 13,
        position: 'absolute',
        top: '40%',
        left: '-8.5%',
        backgroundColor: COLORS.red,
        height: 20,
        width: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subListItemContainer: {
        // backgroundColor: 'rgba(56,137,255,0.4)',
        borderWidth: 2,
        borderColor: COLORS.darkGrey,
    },
    subItemLabelInput: {
        borderBottomWidth: 2,
        borderColor: COLORS.darkGrey,
        paddingLeft: 10,
        color: COLORS.lightWhite,
        letterSpacing: 0.5
    },
    subItemPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subItemPasswordInput: {
        paddingLeft: 10,
        color: COLORS.lightWhite,
        letterSpacing: 0.5
    },
    generateIcon: {
        padding: 10,
        textAlign: 'center'
    },
    errorText: {
        marginVertical: 7,
        marginLeft: 5,
        color: COLORS.lightRed,
        letterSpacing: 0.5
    }
});
export const addBtnStyle = StyleSheet.create({
    touchableContainer: {
        backgroundColor: COLORS.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    titleContainer: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.lightWhite
    }
})
