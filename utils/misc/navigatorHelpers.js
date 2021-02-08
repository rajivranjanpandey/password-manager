import React from 'react';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export const navigationRef = React.createRef();
export const getTabBarVisibility = (route) => {
    const dontShowRoutes = ['EditItem'];
    const routeName = getFocusedRouteNameFromRoute(route);

    if (dontShowRoutes.includes(routeName)) {
        return false;
    }
    return true;
}
export const onTheAirNavigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
}