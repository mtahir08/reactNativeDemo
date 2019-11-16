import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import Settings from './../Screens/Settings';
import Colors from './../constants/Colors';


const SettingsStack = createStackNavigator(
    {
        Settings,
    },
    {
        // headerMode: 'none',
        defaultNavigationOptions: {
            headerStyle: {},
            headerForceInset: { top: "never" }
        }
    }
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    headerStyle: { height: 20 },
    headerBackground: 'red',

    // headerMode: 'none',
    tabBarIcon: ({ focused }) => {
        return (
            <Ionicons
                focused={focused}
                name={'ios-aperture'}
                size={26}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}

            />
        )
    },
};

export { SettingsStack }


