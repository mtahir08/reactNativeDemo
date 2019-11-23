/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {Linking, Platform, Text, View} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

const App: () => React$Node = () => {
  //   const netInfo = useNetInfo();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      {/* <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text> */}
    </View>
  );
};

export default App;
