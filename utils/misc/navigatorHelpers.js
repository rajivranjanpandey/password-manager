import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export const getTabBarVisibility = (route) => {
    const dontShowRoutes = ['EditItem'];
    const routeName = getFocusedRouteNameFromRoute(route);

    if (dontShowRoutes.includes(routeName)) {
        return false;
    }
    return true;
}