import React from 'react'
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataModels from '../../utils/misc/config/index-model';
import { observer } from 'mobx-react';
import SplashScreen from '../splashScreen';

function AuthChecker(props) {
    const [token, setToken] = React.useState(null);
    const userRef = React.useContext(dataModels.UserModel);
    const renderIntialScreen = async () => {
        const userToken = await AsyncStorage.getItem('@token');
        setToken(userToken);
    };
    const renderElements = React.useMemo(() => {
        let elements;
        if (token) {
            elements = React.Children.map(props.children, (child) => {
                if (React.isValidElement(child))
                    return React.cloneElement(child, { userToken: token });
                return child;
            });
        } else {
            elements = <SplashScreen />
        }
        return elements;
    }, [token, props.children]);
    React.useEffect(() => {
        renderIntialScreen();
    }, [userRef.userDetails])
    console.log('renderElements', renderElements);
    return (
        <>
            {renderElements}
        </>
    )
}

export default observer(AuthChecker)

