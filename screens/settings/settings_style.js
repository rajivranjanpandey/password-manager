import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/misc/colors";


export const settingsStyle = StyleSheet.create({
    mainContainer: {
        display: 'flex'
    },
    userContainer: {
        display: 'flex',
        flexGrow: 3,
    },
    imgContainer: {
        height: 200,
        width: '100%'
    },
    profileContainer: {
        position: 'relative',
        alignItems: 'center',
        height: 40
    },
    profileIcon: {
        position: 'absolute',
        top: -50,
        height: 80,
        width: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.lightWhite
    },
    editContainer: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginVertical: 7
    },
    itemSetting: {
        backgroundColor: COLORS.midBlue,
        borderRadius: 15,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    settingIcon: {
        // borderWidth: 2,
        flex: 0.5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inputContainer: {
        // borderWidth: 2,
        flex: 4
    },
    inputLabel: {
        color: COLORS.lightGrey,
        fontSize: 14,
        paddingHorizontal: 5,
        paddingTop: 7

    },
    userInput: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 5,
        marginVertical: -4,
        color: COLORS.white
    },
    logoutContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },
    logoutIcon: {
        backgroundColor: COLORS.midGrey,
        borderWidth: 2,
        borderColor: COLORS.midGrey,
        borderRightWidth: 0,
        textAlignVertical: 'center',
        paddingLeft: 10
    },
    logoutText: {
        color: COLORS.lightWhite,
        // fontWeight: 'bold',
        borderColor: COLORS.midGrey,
        padding: 10,
        backgroundColor: COLORS.midGrey,
        borderWidth: 2,
        borderLeftWidth: 0,
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.5
    }
});