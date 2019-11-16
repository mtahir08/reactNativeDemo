import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from "react-native";


import { SideBar } from "./../Screens/Sidebar";
import { TabNavigator } from "./TabNavigator";
const DrawerNavigation = createDrawerNavigator({
    // SideBar,
    Tabs: TabNavigator
}, {
    initialRouteName: 'Tabs',
    contentComponent: SideBar,
    drawerWidth: (Dimensions.get("screen").width) / 1.3,
    drawerPosition: 'right',
    overlayColor: "rgba(0,0,0,0.4)",
    statusBarAnimation: "none",
    drawerLockMode: 'locked-closed',
    drawerType: 'front',
    // backBehavior: 'initialRoute'
});

export { DrawerNavigation }