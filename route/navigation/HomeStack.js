import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './../Screens/Home';
import First from './../Screens/First';
import Second from './../Screens/Second';
import Colors from './../constants/Colors';

const HomeStack = createStackNavigator(
    {
        Home,
        First,
        Second,
    }, {
    // headerMode: 'none',
    defaultNavigationOptions: {
        headerStyle: {},
        headerForceInset: { top: "never" }
    }
});

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