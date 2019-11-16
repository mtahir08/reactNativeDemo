import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { rootStyles } from './Styles'
export default function App(props) {
    return (
        <View style={rootStyles.container}>
            <Text style={rootStyles.title}>Home</Text>
            <TouchableOpacity style={{}} onPress={() => { props.navigation.navigate('First') }}>
                <Text style={rootStyles.text}>First</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={() => { props.navigation.navigate('Second') }}>
                <Text style={rootStyles.text}>Second</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={() => { props.navigation.navigate('Settings') }}>
                <Text style={rootStyles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}
