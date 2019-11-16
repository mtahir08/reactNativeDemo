import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Icon, Button, Text } from 'native-base';

export default function App() {
  const [isReady, SetIsReady] = useState(false);
  const onDidMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    SetIsReady(true);
  }

  useEffect(() => {
    onDidMount()
  }, [])

  return (
    isReady ?
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button block success style={{ backgroundColor: 'orange' }}>
          <Text>Click Me!</Text>
        </Button>
        <Button >
          {/* <Text>Back</Text> */}
          <Icon name='arrow-forward' />
        </Button>
        <Icon name='printer' type="AntDesign" />

      </View> :
      <Text>Loading!</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
