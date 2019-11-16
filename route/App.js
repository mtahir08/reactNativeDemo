import React, { useEffect, useState } from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import AppNavigation from './navigation'
export default function App() {
  // const [isReady, SetIsReady] = useState(false);
  const onDidMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    // SetIsReady(true);
  }

  useEffect(() => {
    onDidMount()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
