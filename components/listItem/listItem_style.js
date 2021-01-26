import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../utils/misc/colors";

export const listItemStyle = StyleSheet.create({
    itemContainer: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: COLORS.midBlue,
        borderRadius: 15
    },
    parentHead: {
        width: '100%',
        flexDirection: 'row',
    },
    itemImg: {
        flex: 0.85,
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    titleContainer: {
        flex: 2,
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'flex-start',
    },
    itemText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    itemAccount: {
        fontSize: 15,
        color: COLORS.midGrey,
        marginTop: 2,
        letterSpacing: 0.3
    },
    arrowIcon: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'center',
    },
    childContainer: {
        // borderWidth: 2,
        // borderColor: COLORS.white,
        // alignItems: 'flex-end'
    },
    childItemContainer: {
        // borderWidth: 2,
        // borderColor: COLORS.white,
        marginLeft: 83,
        marginRight: 10
    },
    childSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    childText: {
        color: '#c6c4c4',
        fontSize: 15,
        paddingHorizontal: 5,
        letterSpacing: 0.25,
    },
    childPassword: {
        // borderWidth: 2,
        // borderColor: COLORS.white,
        marginTop: 3,
        marginLeft: 17,
        marginRight: 10,
        color: COLORS.lightWhite,
        fontSize: 17,
        flex: 1

    },
    btnContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
export const editBtnStyle = StyleSheet.create({
    btnContainer: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: COLORS.lightBlue,
        // padding: 15,
        // borderRadius: 15,
        marginLeft: 12,
    },
    titleContainer: {
        marginRight: 4,
        color: COLORS.white,
        letterSpacing: 0.23,
        fontWeight: '600'
    }
});