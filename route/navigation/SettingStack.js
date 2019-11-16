import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import ThirdScreen from './../Screens/Third';
import Colors from './../constants/Colors';


const SettingsStack = createStackNavigator(
    {
        Settings: ThirdScreen,
    }
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',

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


