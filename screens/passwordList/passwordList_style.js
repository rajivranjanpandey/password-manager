import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../utils/misc/colors";
const { height: screenHeight } = Dimensions.get('window');
export const PasswordListStyle = StyleSheet.create({
    addBtn: {
        backgroundColor: COLORS.midBlue,
        borderColor: COLORS.midBlue,
        borderWidth: 5,
        borderRadius: 50,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: screenHeight - 170,
        right: 10
    },
})