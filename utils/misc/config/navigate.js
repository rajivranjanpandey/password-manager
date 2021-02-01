import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../colors';

import Home from '../../../screens/home';
import PasswordList from '../../../screens/passwordList';
import EditPasswordItem from '../../../screens/editPasswordItem';
import Settings from '../../../screens/settings';
import { getTabBarVisibility } from '../navigatorHelpers';
import CreatePasswordItem from '../../../screens/createPasswordItem';
// import { MobXProviderContext } from 'mobx-react';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.darkBlue,
    },
}
const NavigationStack = createStackNavigator();
const NavigationTab = createBottomTabNavigator();

export default function IndexRouter(props) {
    React.useEffect(() => {
        console.log('component_did_mount');
    }, [])
    return (
        <NavigationContainer theme={MyTheme}>
            <View style={{
                backgroundColor: COLORS.darkBlue,
                height: '100%',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}>
                <NavigationStack.Navigator
                    //    screenOptions
                    initialRouteName={props.userToken ? 'PasswordList' : 'Home'}>
                    <NavigationStack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name="PasswordList"
                        component={VaultTabRouter}
                        options={{
                            headerShown: false
                            // headerTransparent: false,
                            // headerTitle: 'Saved Accounts',
                            // headerTitleStyle: {
                            //     fontWeight: '500',
                            //     color: COLORS.white,
                            //     fontSize: 24,
                            //     marginLeft: 0,
                            // },
                            // headerStyle: {
                            //     backgroundColor: COLORS.darkBlue
                            // }
                        }}
                    />
                </NavigationStack.Navigator>
            </View>
        </NavigationContainer>
    );
}

function VaultTabRouter() {
    return (

        <NavigationTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Vault') {
                        iconName = focused
                            ? 'dns'
                            : 'dns';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings';
                    }
                    // You can return any component that you like here!

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })
            }
            tabBarOptions={{
                activeTintColor: COLORS.lightBlue,
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0,
                    bottom: 0,

                },
                labelStyle: {
                    letterSpacing: 1.3,
                    fontSize: 13,
                    textTransform: 'uppercase',
                    marginTop: 1,
                },
                keyboardHidesTabBar: true
            }}
            initialRouteName="Vault"
            lazy={true}//loads component only when tab is activated
        >
            <NavigationTab.Screen
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route)
                })}
                name="Vault"
                component={VaultStack} />
            <NavigationTab.Screen
                name="Settings"
                component={Settings} />
        </NavigationTab.Navigator>
    )
}
function VaultStack() {
    return (
        <NavigationStack.Navigator
            initialRouteName="list"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.darkBlue,
                    elevation: 0
                },
                headerTintColor: COLORS.white,
            }}
        >
            <NavigationStack.Screen
                name="List"
                component={PasswordList}
                options={{
                    headerShown: false,
                }}
            />
            <NavigationStack.Screen
                name="CreateItem"
                component={CreatePasswordItem}
                options={({ route }) => ({
                    title: 'Create New Record',
                    headerLeftContainerStyle: { marginLeft: -15 },
                    headerTitleStyle: { marginLeft: -20 },
                })}
            />
            <NavigationStack.Screen
                name="EditItem"
                component={EditPasswordItem}
                options={({ route }) => ({
                    title: route.params.title,
                    headerLeftContainerStyle: { marginLeft: -15 },
                    headerTitleStyle: { marginLeft: -20 },
                })}
            />
        </NavigationStack.Navigator>
    )
}