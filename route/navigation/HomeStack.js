import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import FirstScreen from './../Screens/First';
import Colors from './../constants/Colors';

const HomeStack = createStackNavigator(
    {
        Home: FirstScreen,
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