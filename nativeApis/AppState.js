/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { AppState, Text, View } from 'react-native';

const App: () => React$Node = () => {

    const onStateChange = (nextAppState) => {
        console.log("nextAppState", nextAppState);
    }

    useEffect(() => {
        console.log("on did mount")
        AppState.addEventListener('change', onStateChange);
    }, []);

    return (
        <View>
            {/* <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text> */}
        </View>
    );
};

export default App;
