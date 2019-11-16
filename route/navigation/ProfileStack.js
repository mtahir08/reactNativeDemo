import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import SecondScreen from './../Screens/Second';
import Colors from './../constants/Colors';

const ProfileStack = createStackNavigator(
    {
        Profile: SecondScreen,
    }
);
ProfileStack.path = '';

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            focused={focused}
            name={'ios-person'}
            size={26}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}

        />
    ),
};

export { ProfileStack }

