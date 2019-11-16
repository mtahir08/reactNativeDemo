import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeStack } from './HomeStack';
import { ProfileStack } from './ProfileStack';
import { SettingsStack } from './SettingStack';

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    SettingsStack,
}, {
    tabBarOptions: {
        showLabel: false,
        safeAreaInset: { bottom: 'never', top: 'never' }
    },
    initialRouteName: "HomeStack",
});

export { TabNavigator };
