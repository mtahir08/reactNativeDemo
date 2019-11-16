import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { DrawerNavigation } from './Drawer';

export default createAppContainer(
    createSwitchNavigator({
        Main: DrawerNavigation,
    })
);