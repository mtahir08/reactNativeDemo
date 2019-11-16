import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { rootStyles } from './Styles'
export default function App(props) {
    return (
        <View style={rootStyles.container}>
            <Text style={rootStyles.title}>First</Text>
            <TouchableOpacity style={{}} onPress={() => { props.navigation.navigate('Second') }}>
                <Text style={rootStyles.text}>Second</Text>
            </TouchableOpacity>
        </View>
    );
}
