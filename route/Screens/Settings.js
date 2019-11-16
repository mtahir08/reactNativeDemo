import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { rootStyles } from './Styles'
export default function App() {
    return (
        <View style={rootStyles.container}>
            <Text style={rootStyles.text}>Settings</Text>
        </View>
    );
}
