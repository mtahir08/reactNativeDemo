import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { rootStyles } from './Styles'

export default function App(props) {
    return (
        <View style={rootStyles.container}>
            <Text style={rootStyles.title}>Second</Text>
            <TouchableOpacity style={{}} onPress={() => { props.navigation.navigate('Settings') }}>
                <Text style={rootStyles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}