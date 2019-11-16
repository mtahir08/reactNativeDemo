import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './../Screens/Home';
import Colors from './../constants/Colors';

const HomeStack = createStackNavigator(
    {
        Home,
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            focused={focused}
            name={'ios-home'}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />

    ),
};

export { HomeStack }