import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../utils/misc/colors';

const { width } = Dimensions.get('screen');
export const HomeStyle = StyleSheet.create({
    statusBar: {
        backgroundColor: COLORS.darkBlue,
    },
    container: {
        backgroundColor: COLORS.darkBlue,
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    bannerArea: {
        flex: 2,
        borderColor: COLORS.white,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'relative'
    },
    logoImg: {
        height: 77,
        width: 77,
        borderWidth: 2,
        borderColor: COLORS.darkBlue,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        position: 'absolute',
        left: width / 3,
        top: -25
    },
    centerArea: {
        flex: 1,
        // borderWidth: 2,
        // borderColor: COLORS.offgrey,
        // borderRadius: 6,
        justifyContent: 'center',
        marginTop: 12,
        paddingTop: 15,
        paddingBottom: 10,
        // alignItems: 'center',
    },
    inputLabel: {
        color: '#d3cfcf',
        fontSize: 17,
        letterSpacing: 0.5,
    },
    inputField: {
        borderColor: COLORS.darkGrey,
        letterSpacing: 0.5,
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        color: '#ffff',
        fontSize: 18,
        // paddingLeft: 10,
        padding: 20,
    },
    submitBtn: {
        marginTop: 20,
        backgroundColor: COLORS.lightBlue,
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center'
    },
    btnText: {
        color: '#ffff',
        fontSize: 16,
        letterSpacing: 1
    },
    error: {
        padding: 10,
        color: COLORS.red,
        fontWeight: '300',
    },
    inputError: {
        borderColor: COLORS.red
    }
});