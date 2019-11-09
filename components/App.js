import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { FlexBox } from './components/flexbox'
// import { Images } from './components/images'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
