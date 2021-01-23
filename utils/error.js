import { Platform, Alert, ActionSheetIOS, ToastAndroid } from 'react-native';

export default function showMessage(title, msgType) {
    if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(title, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    } else if (Platform.OS === 'ios') {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title,
                options: ['OK'],
                //   destructiveButtonIndex: 2,
                cancelButtonIndex: 0
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                }
            }
        );
    }
}